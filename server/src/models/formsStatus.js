function FormsStatus(){
    this.formId="";
    this.status = "";

}

FormsStatus.prototype.setFormId=function(formId) {
    this.formId=formId;
};
FormsStatus.prototype.setStatus=function(status) {
    this.status=status;
};

module.exports = FormsStatus;