import mongoose from "mongoose";
import dcrypt from "bcrypt";

let model = {
    username: {
        type: String,
        required: [true, "User name is missing !!!"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Add valid email address"],   //make in arr and the 2nd element will be the error string [the condition , the error string]
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Please add a password"],   //make in arr and the 2nd element will be the error string [the condition , the error string],
        minlength: [6 , "Min password length should be 6 char/digits"],
    },
    phone: Number,
    avaible: Boolean
}

const usersSchema = mongoose.Schema (model);

//hashed password using dcrypt package
//using mongoos middleware or hooks
usersSchema.pre("save", async function (next){
    try {
        const salt = await dcrypt.genSalt(10);
        this.password = await dcrypt.hash(this.password, salt);

    } catch (error) {
        console.log(error);        
    }
    next();
})

// static method to login user
usersSchema.statics.Login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await dcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

export const theSchema =  mongoose.model (
    "usersSchema",
    usersSchema
)