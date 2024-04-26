const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minLength: 8,
        validate: {
            validator: function(value) {
              // Use regular expressions to check for inclusion of symbols, uppercase letters, and numbers
              const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
              return regex.test(value);
            },
            message: props => `${props.value} is not a valid password. Password must contain at least one symbol, one uppercase letter, and one number.`
          }
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    job:{
        type: String,
        required: true
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;