function CountForms(){
    this.studyId="";
    this.studyName = "";
    this.formsNumber = 0

}
CountForms.prototype.setStudyName=function(studyName) {
    this.studyName=studyName;
};
CountForms.prototype.setStudyId=function(studyId) {
    this.studyId=studyId;
};
CountForms.prototype.setFormsNumber=function(formsNumber) {
    this.formsNumber=formsNumber;
};
CountForms.prototype.getStudyName = function() {
    return this.studyName;
};
CountForms.prototype.getFormsNumber = function() {
    return this.formsNumber;
};
module.exports = CountForms;