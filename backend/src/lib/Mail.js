import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();


class Mail {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });
    }

    send(to, from, subject, html) {
        return this.transporter.sendMail({
            to,
            from,
            subject,
            html,
        }, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
    }

}


export default Mail;