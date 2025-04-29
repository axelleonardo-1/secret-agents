import { Router } from 'express';
import { sendEmail } from '../models/mailer';
import { uploadFile } from '../controllers/upload';
import { upload } from '../middlewares/S3';

const router = Router();

router.get('', (req, res) => {
    res.render('index');
})

// Add the new mailSender route
router.get('/mailSender', (req, res) => {
    res.render('mailSender');
});

router.get('/test', (req, res) => {
    sendEmail(
        'your-user@gmail.com', 
        `Let's play Secret Agents`, 
        `This is a test email. Let's play!`
    ).then(() => {
        res.send('email sent');
    }).catch(() => {
        res.status(500).send('Failed to send email');
    })
})

<<<<<<< HEAD
router.post('/send-email', (req, res):any => {
    const { recipient, subject, body } = req.body;
    
    // Validate required fields
    if (!recipient || !body) {
        return res.status(400).json({ 
            error: "Missing required fields: recipient and body are required" 
        });
    }

    // Use default subject if not provided
    const emailSubject = subject || "Secret Message from Agent";
    
    sendEmail(recipient, emailSubject, body)
        .then(() => {
            res.status(200).json({ message: "Email sent successfully" });
        })
        .catch((error) => {
            console.error("Email sending failed:", error);
            res.status(500).json({ error: "Failed to send email" });
        });
});
=======
router.post('/uploads', upload.single('file'), uploadFile);
>>>>>>> 8753a3338d349bb6911942736ea373444722567a

export default router;