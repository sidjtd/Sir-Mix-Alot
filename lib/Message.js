var User = require('./User');
var Model = require('./Model');
// I require Model.js to work


var MessageSchema = {
  from : User,
  to : User,
  message: String,
  sent: Date
};

function Message () {
  Model.call(this,MessageSchema);
}

Model.extend(Message);

module.exports = Message;