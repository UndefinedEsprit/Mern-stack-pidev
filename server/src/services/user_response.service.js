const UserResponse = require("../models/user_response");
const Question = require("../models/question");
const mongoose = require("mongoose");

class UserResponseService {}

UserResponseService.prototype.getAll = async (req, res) => {
  const userResponses = await UserResponse.find();
  res.json(userResponses);
};

UserResponseService.prototype.getById = async (req, res) => {
  let id = req.params.id;
  const userResponse = await UserResponse.findById(id);
  res.json(userResponse);
};

UserResponseService.prototype.add = async (req, res) => {
  let model = new UserResponse(req.body);
  model._id = mongoose.Types.ObjectId();
  const userResponse = await model.save();
  res.json(userResponse);
};

UserResponseService.prototype.delete = async (req, res) => {
  let id = req.body._id;
  const userResponse = await UserResponse.findOneAndDelete(id);
  res.json(userResponse);
};

UserResponseService.prototype.getByQuestion = async (req, res) => {
  const userResponses = await UserResponse.find({
    question: { _id: req.params.id},
  });
  res.json(userResponses);
};

UserResponseService.prototype.getAnswersVolume = async (req, res) => {
  const userResponses = await UserResponse.find({
    question: { _id: req.params.id},
  });
  let answersVolumeMap = [];
  let answers=[];
  userResponses.map((element) => {
    if (answers.includes(element.text)) {
      answersVolumeMap.map((e) => {
        if (e.answer == element.text) e.volume++;
      });
    } else {
      answers.push(element.text);
      answersVolumeMap.push({ answer: element.text, volume: 1});
    }
  });
  res.json(answersVolumeMap);
};

module.exports = UserResponseService;
