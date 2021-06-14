// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/html/index.html');
})

// left hand operand, num1
// right hand operand, num2
app.get("/:num1/:num2", (req, res) => {
    try {
        const { num1, num2 } = req.params;
        if(isNaN(num1)||isNaN(num2)) throw Error(`left hand operand: ${num1} or right hand operand: ${num2} is not a number.`)
        const sum = (Number(num1) + Number(num2)).toString();
        if(!sum) throw Error(`sum of ${num1} nad ${num2} is not a number.`);
        res.send({ sum });
    } catch (error) {
        console.error(error.message);
        res.status(422).send({ok: false, error: error.message})
    }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
