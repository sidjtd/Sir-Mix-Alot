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

module.exports = Model;


