const express = require("express")
const router= express.Router()
const transactions=require("../controllers/Transactions")

router.post('/',transactions.createTransaction)
router.get('/:id',transactions.viewTrans)
router.put('/:id',transactions.updateTrans)
router.delete('/:id',transactions.deleteTrans)
router.get('/',transactions.SearchTrans)
router.get('/search',transactions.SearchTransFileds)

module.exports=router