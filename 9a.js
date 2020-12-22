const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/calculate", (req, res) => {
    let firstNumber = parseInt( req.body.firstNumber);
    let secondNumber = parseInt(req.body.secondNumber);
    let sign = req.body.operator;

    switch(sign) {
        case "add":
            res.json(
                {firstNumber, 
                sign, 
                secondNumber,   
                result: firstNumber + secondNumber 
            });
            break;
        case "sub":
            res.json(
                {
                    firstNumber,
                    sign,
                    secondNumber,
                    result: firstNumber - secondNumber
                });            
            break;
        case "mul":
            res.json(
                {
                    firstNumber,
                    sign,
                    secondNumber,
                    result: firstNumber * secondNumber
                });
            break;
        case "dev":
            res.json(
                {
                    firstNumber,
                    sign,
                    secondNumber,
                    result: firstNumber / secondNumber
                });
            break;
        default:
            res.json({
                        firstNumber, 
                        sign, 
                        secondNumber,
                        result: 0
                    });
            break;
    }
});


app.listen(3002, () => {
    console.log(`Working...`);
});
