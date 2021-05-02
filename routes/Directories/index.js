/* eslint-disable consistent-return */
const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const R = require('ramda');
const Staff = require('../../models/Staff')
const User = require('../../models/User')

const router = Router()


// /api/directories/staff/register
// eslint-disable-next-line consistent-return
router.post(
  '/staff/register',
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации',
        })
      }

      const { idEmpl, fioEmpl } = req.body
      const findEmpl = await Staff.findOne({ idEmpl })

      if (findEmpl) {
        return res.status(400).json({ message: 'Такой сотрудник уже существует' })
      }

      const newStaff = new Staff({ idEmpl, fioEmpl })

      await newStaff.save()

      res.status(201).json({ message: 'Сотрудник создан' })
    } catch (e) {
      res.status(500).json({ e, message: 'Что-то пошло не так, попробуйте снова' })
    }
  },
)


// /directories/staff
router.post(
  '/staff',
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          status: '1',
          message: 'Ошибка получения данных',
        })
      }
      const { idEmpl } = req.body
      let staff = []
      if (R.isEmpty(idEmpl)) {
        staff = await Staff.find()
      } else {
        staff = await Staff.find({ idEmpl: { $in: idEmpl } })
      }
      if (!staff) {
        return res.status(400).json({ status: '1', message: 'Сотрудников нет' })
      }
      res.json({ items: R.map((item) => ({ idEmpl: item.idEmpl, fioEmpl: item.fioEmpl }), staff), status: '0' })
    } catch (e) {
      res.status(500).json({ e, status: '1', message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

module.exports = router
