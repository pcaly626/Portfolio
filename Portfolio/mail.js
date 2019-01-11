const nodemailer = require(‘nodemailer’);
const xoauth2 = require(‘xoauth2’);

let transporter = nodemailer.createTransport({
service: ‘gmail’,
host: ‘smtp.gmail.com’,
secure: ‘true’,
port: ‘465’,
auth: {
type: ‘OAuth2’, //Authentication type
user: ‘pcaly626@gmail.com’, //For example, xyz@gmail.com
clientId: ‘745079170806-m4apslsr9bdr47hesvr867fsjd925f40.apps.googleusercontent.com’,
clientSecret: ‘MOmLNIw6kkSNJ-8olodqOnt8’,
refreshToken: ‘Refresh_Token’
     }
});