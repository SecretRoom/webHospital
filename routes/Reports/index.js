/* eslint-disable consistent-return */
const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const R = require('ramda');
const moment = require('moment')
const ScheduleAppointment = require('../../models/ScheduleAppointment')
const ScheduleAnalysis = require('../../models/ScheduleAnalysis')
const Examination = require('../../models/Examination')

const Patient = require('../../models/Patient')

const router = Router()



// /reports
router.post(
  '',
  [
    check('dateTo', 'Некорректные данные').notEmpty(),
    check('idEmpl', 'Некорректные данные').notEmpty(),
    check('dateFor', 'Некорректные данные').notEmpty(),
  ],

  async (req, res) => {
    try {

      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          status: '1',
          message: 'Некорректные данные при создании осмотра',
        })
      }

      const {
        dateTo,
        idEmpl,
        dateFor,
      } = req.body

      const scheduleAnalysis = await ScheduleAnalysis.find({ idEmpl })
      const scheduleAppointment = await ScheduleAppointment.find({ idEmpl })
      const examList = await Examination.find()
      const examCreateList = await Examination.find({ idCreateEmpl: idEmpl })
      const examEditList = await Examination.find({ idEditEmpl: idEmpl })

      const ticketsList = []

      R.forEach((exam) => R.forEach((ticket) => { if (ticket.idEmplRef === idEmpl) ticketsList.push(ticket) }, exam.dataExam?.tickets), examList)

      res.status(200).json({
        status: '0', items: [{
          countAnalyzes: R.filter((item) => moment(item.dateCreate).isBetween(dateTo, dateFor, undefined, '[]'), scheduleAnalysis).length,
          countAdoptedPat: R.filter((item) => moment(item.date).isBetween(dateTo, dateFor, undefined, '[]'), scheduleAppointment).length,
          countTickets: R.filter((item) => moment(item.dateCreate).isBetween(dateTo, dateFor, undefined, '[]'), ticketsList).length,
          countCreateExam: R.filter((item) => moment(item.dateExam).isBetween(dateTo, dateFor, undefined, '[]'), examCreateList).length,
          countEditExam: R.filter((item) => moment(item.editDateExam).isBetween(dateTo, dateFor, undefined, '[]'), examEditList).length,
        }]
      })
    } catch (e) {
      res.status(500).json({ e, status: '1', message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

module.exports = router
