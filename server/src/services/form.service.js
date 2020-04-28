const Form = require("../models/form");
const Question = require("../models/question");
const mongoose = require("mongoose");
const MailService = require("./mail.service");
const GroupService = require("./group.service");
const QuestionService = require("./question.service");
const CountQuestions = require("../models/countQuestions");
const FormsStatus = require("../models/formsStatus");

const mailService = new MailService();
const groupService = new GroupService();
const questionService = new QuestionService();

class FormService {
  getById = async (id) => {
    let form =await Form.findById(id);
    form.questions = await questionService.getByForm(id);
    return form;
  };

  update = async (form) => {
    let id = form._id;
    delete form._id;
    return await Form.findOneAndUpdate({ _id: id }, form, { new: true });
  };

  publish = async (data) => {
    let groups = data.groups;
    delete data.groups;
    groups.map((group) => {
      groupService
        .findById(group._id)
        .then((result) => {
          result.users.map((user) => {
            mailService.sendEmail(user);
          });
        })
        .catch((err) => console.log(err));
    });
    return await this.update(data);
  };

  getByStudy = async (studyId) => {
    return await Form.find({ study: { _id: studyId } });
  };

  delete = async (id) => {
    await Form.findOneAndDelete({ _id: id });
    await questionService.deleteByForm(id);
  };
}

FormService.prototype.getAll = (req, res) => {
  Form.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

FormService.prototype.add = async (req, res) => {
  //get the form object from req
  let form = new Form({
    title: req.body.title,
    description: req.body.description,
    study: req.body.study,
    _id: mongoose.Types.ObjectId(),
  });
  try {
    form = await form.save();
    await questionService.addAll(req.body.questions, form._id);
    res.status("200").send();
  } catch (error) {
    console.log(error);
    res.status("500").send(error);
  }
};

FormService.prototype.edit = async (req, res) => {
  //get form id
  let formId = req.body._id;
  //check again if form id is not null
  if (formId !== undefined && formId !== null) {
    //create form object to be passed to mongoose
    let form = new Form({
      title: req.body.title,
      description: req.body.description,
      study: req.body.study,
    });
    try {
      await Form.findOneAndUpdate({ _id: formId }, form, { new: true });
      await Question.deleteMany({ form: { _id: formId } });
      await questionService.addAll(req.body.questions, formId);
      res.status("200").send();
    } catch (error) {
      console.log(error);
      res.status("500").send();
    }
  } else res.status("500").send();
};

FormService.prototype.getCountByStudy = async (id, res) => {
  const forms = await Form.find({ study: { _id: id } });
  res = forms.length;
  return res;
};

FormService.prototype.CountQuestions = async (req, res) => {
  const forms = await Form.find({ study: { _id: req.params.id } });
  let countMap = [];
  for (const form of forms) {
    let questionsNumber = await QuestionService.prototype.getCountByForm(
      form._id
    );
    let countQuestions = new CountQuestions();
    countQuestions.setFormId(form._id);
    countQuestions.setQuestionsNumber(questionsNumber);
    countMap.push(countQuestions);
  }

  res.json(countMap);
};

FormService.prototype.getStatusById = async (id) => {
  const form = await Form.findById(id);
  if (form.expiresAt) {
    return "expired";
  } else {
    if (form.publishedAt) {
      return "published";
    } else {
      return "unpublished";
    }
  }
};

FormService.prototype.getStatusByStudy = async (req, res) => {
  const forms = await Form.find({ study: { _id: req.params.id } });
  let statusMap = [];
  for (const form of forms) {
    let status = await FormService.prototype.getStatusById(form._id);
    let formsStatus = new FormsStatus();
    formsStatus.setFormId(form._id);
    formsStatus.setStatus(status);
    statusMap.push(formsStatus);
  }
  res.json(statusMap);
};
module.exports = FormService;
