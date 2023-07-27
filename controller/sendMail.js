const nodemailer = require("nodemailer");
const sendMail = async (req,res) => {
    let testAccount = await nodemailer.createTestAccount();

    // connect with SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'trey.beahan@ethereal.email',
            pass: 'SnRqZAp4JnDtCfD6rS'
        }
    });

    let info = await transporter.sendMail({
        from:'"harsh khandelwal" <hRA@gamil.com>',
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    })
    console.log("Message Sent %s",info.messageId);
    // res.json(info);

    res.send(`We are sending a mail`);
}


module.exports = sendMail;