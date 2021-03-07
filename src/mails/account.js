const mailgun = require("mailgun-js");
const DOMAIN = "sandbox430360980fab44359351c8867ee56f87.mailgun.org";
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});
const data = {
	from: "Mailgun Sandbox <postmaster@sandbox430360980fab44359351c8867ee56f87.mailgun.org>",
	to: "surajk6121@gmail.com",
	subject: "Hello",
	text: "Welcome to the Task Manager"
};

const trigger = ()=>{
    mg.messages().send(data, function (error, body) {
        console.log(body);
    });
}
module.exports = {trigger}
