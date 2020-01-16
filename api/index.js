import express from 'express';
import session from 'express-session';
import cors from 'cors';
import Route from './routes';
import mongoose from 'mongoose';
import initDB from './services/initDataBaseService';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true,
}));

app.use(session({
  secret: 'hello',
  resave: false,
  saveUninitialized: true,
  cookie: {
    name: 'userInfoCookie',
    httpOnly: false,
    secure: false,
    maxAge: 3600000,
    expires: new Date(Date.now() + 3600000),
  }
}));

app.use(Route);
app.use('/static', express.static('public'));

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
  console.log('Connected to mongod server');
  db.dropCollection("users", function (err, result) {
    if (err) {
      console.log("error delete collection");
    } else {
      console.log("delete collection success");
    }
  });
  initDB();
});

mongoose.connect('mongodb://localhost:27017/store', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
