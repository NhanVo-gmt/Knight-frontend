require("dotenv").config();

const express = require('express')
const app = express();
app.use(express.static("public"));

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({urlencoded: true}))

const https = require('https')

app.get("/", (req, res) => {
    res.json("Hello")
})

app.post("/", (req, res) => {
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed"
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = `https://us22.admin.mailchimp.com/lists/${process.env.MAILCHIMP_LIST_ID}/`

    const options = {
        method: "POST",
        headers: {
            Authorization: `auth ${process.env.MAILCHIMP_API_KEY}-us22`
        }
    }

    const request = https.request(url, options, (res) => {
        if (res.statusCode == 200)
        {
            console.log("Subscribe successfully")
        }
    })

    request.write(jsonData);
    request.end();
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})