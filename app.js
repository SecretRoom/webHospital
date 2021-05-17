/* eslint-disable no-console */
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
app.use(express.json({ extended: true }))
app.use('/auth', require('./routes/Auth'))
app.use('/reports', require('./routes/Reports'))
app.use('/patients', require('./routes/Patients'))
app.use('/examination', require('./routes/Examinations'))
app.use('/directories', require('./routes/Directories/Staff'))
app.use('/directories', require('./routes/Directories/Analyzes'))
app.use('/directories', require('./routes/Directories/ExamTypes'))
app.use('/directories', require('./routes/Directories/Diagnoses'))
app.use('/schedule_analyzes', require('./routes/ScheduleAnalyzes'))
app.use('/directories', require('./routes/Directories/OmsCompanies'))
app.use('/schedule_appointment', require('./routes/ScheduleAppointment'))

const PORT = config.get('port')

const start = async () => {
  try {
    mongoose.Promise = global.Promise

    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }, (err) => {
      if (err) console.log(`Error in DB connection: ${err}`)
    })

    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
  } catch (e) {
    console.log('🚀 ~ file: app.js ~ line 13 ~ start ~ message', e.message)
    process.exit(1)
  }
}

start()
