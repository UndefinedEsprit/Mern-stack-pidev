function AnswersVolume(){
    this.answer="";
    this.questionId="";
    this.volume = 0;

}

AnswersVolume.prototype.setAnswer=function(answer) {
    this.answer=answer;
};
AnswersVolume.prototype.setVolume=function(volume) {
    this.volume=volume;
};
AnswersVolume.prototype.setQuestionId=function(questionId) {
    this.questionId=questionId;
};
module.exports = AnswersVolume;