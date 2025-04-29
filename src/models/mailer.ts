import nodemailer from 'nodemailer';

// Configure transporter using environment variables
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export function sendEmail(to: string, subject: string, html: string) {
    return transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        html
    });
}

