const nodemailer = require('nodemailer')
const path = require('path')
const handlebars = require("handlebars");
const fs = require('fs');
const { fileURLToPath } = require('url');
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
let filePath = path.join(__dirname, '../generateEmail/views/email.html');
let notifyPath = path.join(__dirname, '../generateEmail/views/notify.html');
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'scentsationaal@gmail.com',
        pass: 'walamekcehjqylih'
    },
    tls: {
        rejectUnauthorized: false
    }
})
function intitiate(email, htmlToSend) {
    const mailOptions = {
        from: 'scentsationaal@gmail.com',
        to: email,
        subject: ' Purchase Initiated',
        text: 'Scentsational',
        html: htmlToSend,
        context: {
            // replace {{company}} with My Company
        }
    }
    console.log('initiated');
    try {
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log("Email sent: " + info.response);
            }
        })
    } catch (error) {
        console.log(error);
    }
}

/**
 * @param {{ name: any; location: any; email: any; phone_number: any; }} customer
 * @param {any} total
 * @param {any} orderId
 * @param {any} items
 */
async function sendEmail(data) {
    // point to the template folder
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        name: data.name,
        Location: data.location,
        email: data.email,
        items: data.items,
        company: 'Scentsational',
        orderId: data.orderId,
        phone_number: data.phone,
        total: data.total
    };
    const htmlToSend = template(replacements);

    // use a template file with nodemailer
    // intitiate(data.email, htmlToSend)

    const mailOptions = {
        from: 'scentsationaal@gmail.com',
        to: data.email,
        subject: ' Purchase Initiated',
        text: 'Scentsational',
        html: htmlToSend,
        context: {
            // replace {{company}} with My Company
        }
    }
    console.log('initiated');
    try {
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log("Email sent: " + info.response);
            }
        })
    } catch (error) {
        console.log(error);
    }
    // return sendNotification(data).then((e)=> {
    //     console.log(e);
    //     })
}


async function sendNotification(data) {
    // point to the template folder
    const source = fs.readFileSync(notifyPath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        name: data.name,
        Location: data.location,
        email: data.email,
        items: data.items,
        company: 'Scentsational',
        orderId: data.orderId,
        phone_number: data.phone,
        total: data.total
    };
    const htmlToSend = template(replacements);

    // use a template file with nodemailer
    return await intitiate('marionankunda728@gmail.com', htmlToSend)
}



module.exports = { sendEmail }