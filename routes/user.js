const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plm = require('passport-local-mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/nayaappfordb")

// Define the user schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  posts: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }],
  dp: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: String
});
userSchema.plugin(plm);

// Create the User model
module.exports = mongoose.model('User', userSchema);


