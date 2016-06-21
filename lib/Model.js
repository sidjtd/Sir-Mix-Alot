var DataStore = require('./DataStore');
// //--------------------
function extend(destination, source) {
 for (var k in source) {
   if (source.hasOwnProperty(k)) {
     destination[k] = source[k];
   }
 }
 return destination;
}


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

Model.prototype.destroy = function() {
  if(this.id !== null) {
     this.id = null;
  }
};


Model.find = function (id) {
  for(var i = 0; i < DataStore.store[this.name].length; i++) {
    if(DataStore.store[this.name][i].id === id) {
      return DataStore.store[this.name][i];
    }
  }
  return null;
};

Model.extend = function (klass) {
  extend(klass,Model);
  extend(klass.prototype,Model.prototype);
};



module.exports = Model;
// //---------------


