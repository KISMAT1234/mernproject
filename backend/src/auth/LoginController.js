import User from "../models/User.js";
import TokenVerify from "../middleware/TokenVerify.js";
import PasswordReset from "../models/PasswordReset.js";
import Mail from "../lib/Mail.js";
import dotenv from "dotenv";

dotenv.config();

class LoginController{

    async login(req, res){
        const {email, password} = req.body;
        let user =await User.findOne({email: email});
        if(!user){
            return res.status(200).json({notfound: "User not found"});
        }
        let isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(200).json({incorrect: "Incorrect password"});
        }
        let token = user.generateToken();
        return res.status(200).json({token: token});
    }

    async tokenMatch(req,res){
        let token = req.headers.authorization;
         token = token.split(' ')[1];
        if(token){
            let response = TokenVerify.verifyToken(token);
            if(response){
                return res.status(200).json({
                    success: true
                });
            }else{
                return res.status(200).json({
                    error: "Token is not valid"
                });
            }
        }else{
            return res.status(200).json({
                error: "No token found"
            });
        }
        

    }

    async resetPassword(req,res){
        let user =await User.findOne({email: req.body.email});
        if(!user){
            return res.status(200).json({notfound: "User not found"});
        }else{
                let randomToken  = Math.floor(100000 + Math.random() * 900000);
                randomToken = randomToken+user.email;
                let email = user.email;
                let storeData = {
                    email: email,
                    token: randomToken
                }

                let findData = await PasswordReset.findOne({email: email});
                if(findData){
                    return res.status(200).json({notfound: "Token Already send"});
                }else{
                    let senderEmail = process.env.SMTP_EMAIL;
                    let mail = new Mail();
                    let message = `
                    <h1>Reset Password</h1>
                    <p>Click on the link to reset your password</p>
                    <a href="http://localhost:3000/reset-confirm/${randomToken}">Reset Password</a>
                    `;
                    mail.send(email, senderEmail, "Reset Password", message);
                    let passwordReset = new PasswordReset(storeData);
                    await passwordReset.save();
                    return res.status(200).json({success: "Token send successfully"});
                }

        }

    }

    async resetConfirm(req,res){
        const {token, password} = req.body;
        let fnData = await PasswordReset.findOne({token: token});
        if(!fnData){
            return res.status(200).json({notfound: "Token not found"});
        }else{
            let email = fnData.email;
            let user = await User.findOne({email: email});
            if(!user){
                return res.status(200).json({notfound: "User not found"});
            }
            user.password = password;
            await user.save();
            await PasswordReset.deleteOne({token: token});
            return res.status(200).json({success: "Password reset successfully"});

        }

    }

}

export default LoginController;