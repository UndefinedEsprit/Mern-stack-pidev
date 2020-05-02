const Study = require("../models/study");
const mongoose = require("mongoose");
const FormService = require("./form.service");


class StudyService {}

StudyService.prototype.getAll = (req, res) => {
  Study.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

StudyService.prototype.getById = (req, res) => {
  let id = req.params.id;
  Study.findById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

StudyService.prototype.add = (req, res) => {
  let obj = req.body;
  let model = new Study(obj);
  model._id = mongoose.Types.ObjectId();
  model.save((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

StudyService.prototype.update = (req, res) => {
  let id = req.body._id;
  let study = {
    name: req.body.name,
  };
  Study.findOneAndUpdate({ _id: id }, study, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

StudyService.prototype.delete = (req, res) => {
  let id = req.query.id;
  Study.findOneAndDelete({ _id: id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

StudyService.prototype.CountForms = async (req, res) => {
  const studies = await Study.find();
  let countMap = [];
  for (const study of studies) {
    let formsNumber = await FormService.prototype.getCountByStudy(study._id);
    countMap.push({"studyId":study._id,"studyName":study.name,"formsNumber":formsNumber});
  }

  res.json(countMap);
};

StudyService.prototype.getStudyWithMostPublishedForms = async (req, res) => {
    let topStudy = await FormService.prototype.getMostPublishedFormsByStudy(res);
    let study= await Study.findById(topStudy._id);
    res.json({"studyId":study._id,"studyName":study.name , "countForms":topStudy.count,"createdAt":study.createdAt});
};

StudyService.prototype.getLatestStudy = async (req, res) => {
  let study= await Study.findOne({}, {}, { sort: { 'createdAt' : -1 } });
  res.json(study);
}

module.exports = StudyService;
