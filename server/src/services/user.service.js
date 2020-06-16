const User = require("../models/user");
const mongoose = require("mongoose");
const UserResponseService = require("./user_response.service");

class UserService{}

UserService.prototype.getAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

UserService.prototype.getById = async (req, res) => {
  let id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
};

UserService.prototype.filterByCriteria = async (req, res) => {
  var users = Array;
  var {query } = UserService.prototype.buildCriteriaQuery(req);
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

UserService.prototype.getMostActiveUsers = async (req, res) => {
  let activeUsers = [];
  let activeUsersIds = await UserResponseService.prototype.getMostActiveUsersIds();
  for(const activeUserId of activeUsersIds ){
    let user = await User.findById(activeUserId ._id);
    activeUsers.push({"userId":user._id,"email":user.email,"participation":activeUserId .count,"address":user.address,"age":user.age});
  }
  res.json(activeUsers);
}

UserService.prototype.getMostFrequentAge = async (req, res) => {
  const filter = await User.aggregate([  
        {$group: {_id: "$age", count: { "$sum": 1}}},
        {$sort: {count: -1}},
        {$limit: 1} 
  ]);
  res.json(filter[0]);
};

module.exports = UserService;

