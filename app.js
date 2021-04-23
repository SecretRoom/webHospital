/* eslint-disable no-console */
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use('/api/auth', require('./routes/auth.route'));

const PORT = config.get('port');

const start = async () => {
  try {
    mongoose.Promise = global.Promise;

    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }, (err) => {
      if (err) console.log(`Error in DB connection: ${err}`);
    });

    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
  } catch (e) {
    console.log('🚀 ~ file: app.js ~ line 13 ~ start ~ message', e.message);
    process.exit(1);
  }
};

// app.get('/', (req, res) => res.send('Hello World!'))

start();
