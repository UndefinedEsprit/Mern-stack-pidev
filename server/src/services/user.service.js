const User = require("../models/user");
const mongoose = require("mongoose");

class UserService {}

UserService.prototype.getAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

UserService.prototype.getById = async (req, res) => {
  let id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
};

UserService.prototype.getByCriteria = async (req, res) => {
  let criteria = req.body;
  var users = Array;
  var query = {};
  for (var key in criteria) {
    if (criteria.hasOwnProperty(key)) {
      var field = criteria[key].field;
      var value = criteria[key].value;
      query[field] = value;
    }
  }
  users = await User.find(query);
  res.json(users);
};
UserService.prototype.add = async (req, res) => {
  let model = new User(req.body);
  model._id = mongoose.Types.ObjectId();
  const user = await model.save();
  res.json(user);
};

UserService.prototype.update = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.body._id, req.body);
  res.json(user);
};

UserService.prototype.delete = async (req, res) => {
  let id = req.params.id;
  const user = await User.findOneAndDelete(id);
  res.json(user);
};

module.exports = UserService;
