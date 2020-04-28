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
  let model = new Question(req.body);
  const userResponse = await UserResponse.find({
    question: { _id: model._id },
  });
  res.json(userResponse);
};

module.exports = UserResponseService;
