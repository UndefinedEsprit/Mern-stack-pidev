const UserResponse = require("../models/user_response");
const mongoose = require("mongoose");
const User = require("../models/user");
const Question = require("../models/question");
const Form =require("../models/form");
const Study =require("../models/study");
const QueryBuilderService=require("./queryBuilder.service");
const ObjectId = mongoose.Types.ObjectId;

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

UserResponseService.prototype.getByQuestion = async (id) => {
  const userResponses = await UserResponse.find({
    question: { _id:id},
  });
  return userResponses;
};

UserResponseService.prototype.getAnswersVolume = async (req, res) => {
  let questionId = req.params.id;
  const responsesFilter = await UserResponse.aggregate([ 
    {"$match":{"question": ObjectId(questionId)}}, 
    {$group: {_id: "$text", count: { "$sum": 1}}}
  ]);
  res.json(responsesFilter);
};

UserResponseService.prototype.getMostActiveUsersIds = async () => {
  const filter = await UserResponse.aggregate([  
        {$group: {_id: "$user", count: { "$sum": 1}}},
        {$sort: {count: -1}},
        {$limit: 5} 
  ]);
  return filter;
};

UserResponseService.prototype.filterAnswersVolumeByUserCriteria = async (req, res) => {
  var {query}=QueryBuilderService.prototype.buildCriteriaQuery(req);
  let users=await User.find(query,'_id');
  let usersId=[];
  users.map((user)=>{
    usersId.push(user._id);
  })
  let questionId = req.body.questionId;
  const responsesFilter = await UserResponse.aggregate([ 
    {"$match":{$and:[ 
      {"question": ObjectId(questionId)},
      {"user":{$in:usersId}}
    ]}}, 
    {$group: {_id: "$text", count: { "$sum": 1}}}
  ]);
  res.json(responsesFilter);
};

UserResponseService.prototype.getLatestUserResponse = async (req, res) => {
  let userResponse= await UserResponse.findOne({}, {}, { sort: { 'createdAt' : -1 } });
  let user = await User.findById(userResponse.user); 
  let question = await Question.findById(userResponse.question); 
  let form = await Form.findById(question.form); 
  let study = await Study.findById(form.study); 
  res.json({"text":userResponse.text,"userEmail":user.email,"questionText":question.text,"formTitle":form.title,"studyName":study.name});
}

UserResponseService.prototype.getMostAnsweredQuestion = async (req,res) => {
  const responsesFilter = await UserResponse.aggregate([  
        {$group: {_id: "$question", count: { "$sum": 1}}},
        {$sort: {count: -1}},
        {$limit: 1} 
  ]);
  let question = await Question.findById(responsesFilter[0]._id); 
  let form = await Form.findById(question.form); 
  let study = await Study.findById(form.study); 
  res.json({"questionText":question.text,"formTitle":form.title,"studyName":study.name,"count":responsesFilter[0].count});
}

UserResponseService.prototype.getNumberOfAnswersByQuestion = async (questionId) => {
  const responsesFilter = await UserResponse.aggregate([ 
        {"$match":{"question": ObjectId(questionId)}}, 
        {$group: {_id: "$question", count: { "$sum": 1}}}
  ]);
  if(!responsesFilter[0]){
    return({"_id":questionId,"count":0})
  }
  return responsesFilter[0];
}

module.exports = UserResponseService;
