import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;
import db from './queries';
import request from 'request';

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (request, response) => {
  response.json({ info: "Started from nothin' now it's here! Testing. Ok this is kool right?!!" });
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
