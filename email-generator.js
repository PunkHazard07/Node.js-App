const nodemailer = require('nodemailer');

const mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'belloayoola20@gmai.com',
        pass: 'kyld ioqn phqu zlrv'
    }
});

const mailOption = {
    from: 'belloayoola20@gmail.com',
    to: 'izuchi.alaneme@gmail.com',
    subject: 'This is me exploring Node.js',
    text: 'This is how to use Nodemailer in Node.js'
};

mail.sendMail(mailOption, (error, info) => {
    if (error){
        console.log(error)
    }else{
        console.log('Email sent' + info.response);
    }
});
