const express = require('express');
require('../src/db/conn');
const app = express();

const MensRanking = require('../src/models/mens');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send('Hello world')
});
app.post('/api', async (req, res) => {
    try {
       const addingMensRanking =  new MensRanking(req.body)
       console.log(req.body)
       addingMensRanking.save();
    } catch (e) {
        res.send(e);
    }
})

app.listen(port, () => {
    console.log(`server is running at ${port}`)
});