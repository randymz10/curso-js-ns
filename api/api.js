const express = require('express');
const mongoose = require('mongoose');
const user = require('./user.controller');

const app = express();
const port = 3000;
app.use(express.json());

const urlDb = 'mongodb+srv://admin:admin@cluster0.giycsrq.mongodb.net/myApp?retryWrites=true&w=majority';
mongoose.connect(urlDb);

app.get('/users', user.list);
app.post('/users', user.create);
app.get('/users/:id', user.get);
app.put('/users/:id', user.update);
app.patch('/users/:id', user.update);
app.delete('/users/:id', user.destroy);

app.use(express.static('app'));

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/index.html`);
});

app.get('*', (req, res) => {
    res.status(404).send('Esta página no existe');
})

app.listen(port, () => {
    console.log('Arrancando la aplicacion');
});