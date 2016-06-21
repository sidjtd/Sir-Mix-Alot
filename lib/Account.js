var Model = require('./Model');
// I require Model.js to work


var AccountSchema = {
  user : '',
  accountNumber : 0,
  address : '',
  balance : 0
};

function Account () {
  Model.call(this, AccountSchema);
}

Model.extend(Account);

module.exports = Account;