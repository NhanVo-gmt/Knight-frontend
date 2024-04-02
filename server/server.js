require("dotenv").config();

const express = require('express')
const cors = require('cors');
const addMailMember = require("./components/mailsubscription");


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json("Hello")
})

app.post("/subscribe", async (req, res) => {
    email = req.body['email'];
    console.log(email);

    const result = await addMailMember(email, "hello", "world");
    res.send(result);
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})