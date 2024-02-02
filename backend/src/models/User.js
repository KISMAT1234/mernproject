import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        rrequied: true,
        min: 2,
        max: 100,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true,      
    },    
    gender:{
        type: String,
        enum: ["male", "female"],
        required: true,

    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    image:{
        type: String,
    },

},{
    versionKey: false,
});

userSchema.pre("save", async function(next){
    try{
        if(this.isModified("password")){
            const hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
        }
        next();
    }catch(err){
        next(err);
    }
});

userSchema.methods.comparePassword = async function(password){
    try{
        const isMatch = await bcrypt.compare(password, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}

userSchema.methods.toJSON = function () {
    let obj = this.toObject();
    if (obj.image) {
        obj.image = process.env.BASE_URL + "/uploads/users/" + obj.image;
    }else{
        obj.image = process.env.BASE_URL + "/uploads/icons/user.jpg";
    }
    delete obj.password;
    return obj;
}



userSchema.methods.generateToken = function(){
    let obj = {
        id: this._id,
        name: this.name,
        role: this.role,
    }
    const token = jwt.sign(obj, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
    return token;
}


export default mongoose.model("User", userSchema);
