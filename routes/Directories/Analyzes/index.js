/* eslint-disable consistent-return */
const { Router } = require('express')
const R = require('ramda');

const Analysis = require('../../../models/Analysis')

const router = Router()


// /directories/analyzes
router.get(
  '/analyzes',
  async (req, res) => {
    try {
      const findAnalysis = await Analysis.find().sort({ name: 'asc' })
      console.log("🚀 ~ file: index.js ~ line 16 ~ findAnalysis", findAnalysis)
      res.status(200).json({ status: '0', items: findAnalysis, })

    } catch (e) {
      res.status(500).json({ e, status: '1', message: 'Что-то пошло не так, попробуйте снова' })
    }
  })


module.exports = router
