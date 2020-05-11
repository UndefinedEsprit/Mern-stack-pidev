class QueryBuilderSerive{}

QueryBuilderSerive.prototype.buildCriteriaQuery=(req)=> {
    let criteria = req.body.criteria;
    let query = {};
    for (var key in criteria) {
      if (criteria.hasOwnProperty(key) ) {
        var field = criteria[key].field;
        var value = criteria[key].value;
        query[field] = value;
      }
    }
    return {query};
  }

  module.exports = QueryBuilderSerive;