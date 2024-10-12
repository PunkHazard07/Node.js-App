const nodemailer = require('nodemailer');

const mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'belloayoola20@gmai.com',
        pass: ''
    }
});

const mailOption = {
    from: 'belloayoola20@gmail.com',
    to: '',
    subject: 'This is me exploring Node.js',
    text: 'This is how to use Nodemailer in Node.js'
};

Transport.sendmail((err, info) => {
    if (err){
        console.log(error)
    }else{
        console.log(`Email sent ${info.response}`);
    }
});
