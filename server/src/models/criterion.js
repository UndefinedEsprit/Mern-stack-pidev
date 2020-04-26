function Criterion(){
    this.field = "field";
    this.value = "value"

}

Criterion.prototype.getField = function() {
    return this.field;
};
Criterion.prototype.getValue = function() {
    return this.value;
};
module.exports = Criterion;