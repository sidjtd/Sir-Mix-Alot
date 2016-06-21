var DataStore = require('./Datastore.js');

function Model(scheme){
  Datastore.call(this,x);
  this.schema = shema;
}

Model.prototype = Object.create(DataStore.prototype);

module.exports = new Model();