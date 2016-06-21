// var extend = require('./extend');
var DataStore = require('./DataStore');
// //--------------------

function Model(schema){
 this.schema = schema;
 this.id = null;
  for(var prop in schema) {
    this[prop] = null;
    }
    if( DataStore.store[this.constructor.name] === undefined) {
       DataStore.store[this.constructor.name] = [];
  }
}

Model.prototype.save = function(){
  if(this.id===null) {
    this.id=this.constructor.getNextId();
    DataStore.store[this.constructor.name].push(this);
  }
};

Model.getNextId = function () {
  return DataStore.store[this.name].length + 1;
};


module.exports = Model;
// //---------------






