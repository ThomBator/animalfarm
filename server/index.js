import express from 'express';
//cors = cross origin resource sharing, lets you make requests to servers from different urls
//In this app cors is needed to access results from the chance api 
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

import Chance from 'chance';
const chance = new Chance();

const animals = [...Array(250).keys()].map(id => {
    return {
        id,
        type: chance.animal(),
        age: chance.age(),
        name: chance.name()
    }
});

app.get('', (req, res) => {
    const q = req.query.q?.toLowerCase() || '';
    const results = animals.filter( animal => animal.type.toLowerCase().includes(q));

    res.send(results);



});

app.listen(8081, ()=> console.log('Listening on port http:localhost:8081'));
