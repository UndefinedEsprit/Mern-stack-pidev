function CountQuestions(){
    this.formId="";
    this.questionsNumber = 0

}

CountQuestions.prototype.setFormId=function(formId) {
    this.formId=formId;
};
CountQuestions.prototype.setQuestionsNumber=function(questionsNumber) {
    this.questionsNumber=questionsNumber;
};

module.exports = CountQuestions;