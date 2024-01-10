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
    // tls: {
    //     rejectUnauthorized: false
    // },
    port: 465, secure: true
})


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
    //  intitiate(data.email, htmlToSend)


    await intitiate(data.email, htmlToSend)
    await sendNotification(data)
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
    const notificationToSend = template(replacements);

    // use a template file with nodemailer
    return await intitiate('marionankunda728@gmail.com', notificationToSend)
}
async function intitiate(email, htmlToSend) {
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
    return await transporter(mailOptions)
}

async function transporter(mailOptions) {
    try {
        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    reject(err);
                } else {
                    console.log('initiated');
                    resolve("Email sent: " + info.response);
                }
            })
        })
    } catch (error) {
        console.log(error);
    }

}

module.exports = { sendEmail }