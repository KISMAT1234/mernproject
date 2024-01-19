import mongoose from "mongoose";

const passowrdResetSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },


},{
    versionKey: false,
});

export default mongoose.model("PasswordReset", passowrdResetSchema);