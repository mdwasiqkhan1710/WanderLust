const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// In this schema we want username, email and password.
//Note : Passport Local Mongoose automatically adds the field of username and 
// password, whether we mention them or not.



const userSchema = new Schema ({
    email : {
        type : String,
        required : true
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);

