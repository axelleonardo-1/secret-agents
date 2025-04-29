import { Router } from 'express';
import { sendEmail } from '../models/mailer';
import { uploadFile } from '../controllers/upload';
import { upload } from '../middlewares/S3';

const router = Router();

router.get('', (req, res) => {
    res.render('index');
})

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

router.post('/uploads', upload.single('file'), uploadFile);

export default router;