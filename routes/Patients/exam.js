/* eslint-disable consistent-return */
const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const R = require('ramda');
const moment = require('moment')
const Examination = require('../../models/Examination')
const Staff = require('../../models/Staff')
const ExamType = require('../../models/ExamType')

const router = Router()


// /patients/:id/examination/create
router.post(
  '/:id/examination/create',
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
        idExamType,
        dateExam,
        idCreateEmpl,
      } = req.body

      const newExamination = new Examination({
        idPat: req.params.id,
        idExamType,
        dateExam,
        idCreateEmpl,
      })

      const { id } = await newExamination.save()

      res.status(200).json({ status: '0', message: 'Осмотр создан', id })
    } catch (e) {
      res.status(500).json({ e, status: '1', message: 'Что-то пошло не так, попробуйте снова' })
    }
  },
)

// /patients/:id/examination
router.get(
  '/:id/examination',
  async (req, res) => {
    try {
      const examList = await Examination.find({ idPat: req.params.id }).sort({ dateExam: "desc" })
      const emplList = await Staff.find()
      const examTypeList = await ExamType.find()

      const findEmpl = (id) => {
        const fioEmpl = JSON.parse(JSON.stringify(R.find(R.propEq('idEmpl', id))(emplList))).fioEmpl
        const newFio = fioEmpl.match(/[a-zа-я]+/gi)
        if (newFio?.length === 1) return newFio[0]
        if (newFio?.length === 2) return `${newFio[0]} ${newFio[1][0]}.`
        if (newFio?.length === 3) return `${newFio[0]} ${newFio[1][0]}. ${newFio[2][0]}.`
      }

      const findExamType = (id) => JSON.parse(JSON.stringify(R.find(R.propEq('id', id))(examTypeList))).name

      res.status(200).json({
        status: '0',
        items: R.map((item) => ({
          id: item.id,
          dateExam: moment(item.dateExam).format('DD.MM.YYYY HH:mm').toString(),
          fioEmpl: findEmpl(item.idCreateEmpl),
          examTypeName: findExamType(item.idExamType)
        }), examList),
      })
    } catch (e) {
      res.status(500).json({ e, status: '1', message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

// /patients // получение данных осмотра
// router.post(
//   '',
//   async (req, res) => {
//     try {
//       let findData = {}
//       R.forEachObjIndexed((value, key) => {
//         if (!R.isNil(value)) {
//           findData = R.mergeAll([findData, { [key]: new RegExp(value, 'i') }])
//         }
//       }, req.body)
//       const findPatient = R.isEmpty(req.body)
//         ? await Patient.find().sort({ surname: 1 })
//         : await Patient.find(findData).sort({ surname: 1 })

//       res.status(200).json({ status: '0', items: findPatient })

//     } catch (e) {
//       res.status(500).json({ e, status: '1', message: 'Что-то пошло не так, попробуйте снова' })
//     }
//   })


module.exports = router
