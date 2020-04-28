const Question = require("../models/question");
const Form = require("../models/form");
const mongoose = require("mongoose");

class QuestionService {
  add = async (data, formId) => {
    let question = new Question({
      _id: mongoose.Types.ObjectId(),
      text: data.text,
      type: data.type,
      file: data.file,
      responses: data.responses,
      form: { _id: formId },
    });
    return await question.save();
  };

  addAll = async (questions, formId) => {
    if (questions !== undefined && questions.length !== 0) {
      for (let index in questions) {
        await this.add(questions[index], formId);
      }
    }
  };

  getByForm = async (id) => {
    return await Question.find({ form: { _id: id } });
  };

  deleteByForm = async (id) => {
    return await Question.deleteMany({ form: { _id: id } });
  };
}


QuestionService.prototype.getAll = (req, res) => {
  Question.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

QuestionService.prototype.getById = (req, res) => {
  let id = req.params.id;
  Question.findById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

QuestionService.prototype.getByForm = (req, res) => {
  let model = new Form(req.body);
  Question.find({ form: { _id: model._id } }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

QuestionService.prototype.getCountByForm = async (id, res) => {
  const questions = await Question.find({ form: { _id: id } });
  res = questions.length;
  return res;
};

QuestionService.prototype.getAllByForm = async (req, res) => {
  const questions = await Question.find({ form: { _id: req.params.id } });
  res.json(questions);
};

module.exports = QuestionService;
