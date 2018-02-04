const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MessageSchema = new Schema({
  sender: String,
  receiver: String,
  message: String
});

const Message = mongoose.model('message', MessageSchema);


module.exports = Message;
