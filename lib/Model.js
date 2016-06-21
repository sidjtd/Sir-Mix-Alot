var extend = require('./extend');
var DataStore = require('./DataStore');
var DataStoreStore = DataStore.store;
// //--------------------
var Datastore = require('./DataStore');

function Model(schema){
 this.schema = schema;
 this.id = null;
  for(var prop in schema) {
    this[prop] = null;
    }
    if( Datastore.store[this.constructor.name] === undefined) {
       Datastore.store[this.constructor.name] = [];
  }
}

Model.prototype.save = function(){
  if(this.id===null){
    this.id===this.constructor.getNextId();
    DataStoreStore[this.constructor.name].push(this);
  }
};



module.exports = Model;
// //---------------


















