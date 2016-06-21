var Model = require('./Model');
// I require Model.js to work

function User(){
  this.id = null;
  this.schema = UserSchema;

  Model.call(this, UserSchema);
}


var UserSchema = {
  username : String,
  password : String
};




//??????????
Model.extend(User);

//Model.extend(User);
module.exports = User;