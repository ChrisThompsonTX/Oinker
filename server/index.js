const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=> {
    res.json({
        message: "hello"
    });
});

app.post('/oinks', (req,res)=> {
    if (isValidOink(req.body)) {

    } else {
        res.status(422);
        res.json({
            message: "Name and Content required!"
        })
    }
});

app.listen(5000, ()=> {
    console.log('Listening on http://localhost:5000')
});