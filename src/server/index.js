const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.options('*', cors())
const bodyParser = require('body-parser');
app.use(express.json())

app.get('/products', (req, res, next) => {

    const result = [{
        id: 1,
        name: 'name',
        price: 'price',
        image: 'image'
    },
    {
        id: 2,
        name: 'name',
        price: 'price',
        image: 'image'
    },
    {
        id: 3,
        name: 'name',
        price: 'price',
        image: 'image'
    }];

    res.type('json');

    res.end(JSON.stringify({ result }))
})

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

