const router = require('express').Router()
const cAsic = require('../controllers/cAsic')
const cAsicContract = require('../controllers/cAsicContract')
const jtoken = require('../controllers/JWT')

router.post('/add',jtoken.authorize,cAsic.postAddAsic)//Admin
router.get('/',jtoken.authorize,cAsic.getGetAsics)
router.get('/:id',jtoken.authorize,cAsic.getGetAsicByID)//Admin
router.put('/update/:id',jtoken.authorize,cAsic.putUpdateAsic)//Admin
router.delete('/delete/:id',jtoken.authorize,cAsic.deleteDeletePlan)//Admin

router.get('/x/contract',jtoken.authorize,cAsicContract.getGetAsicsContract)
router.post('/x/contract/add',jtoken.authorize,cAsicContract.postAddAsicContract)
router.get('/x/contract/onDemand',jtoken.authorize,cAsicContract.getNotActiveAsicsContract)
router.put('/x/contract/activate/:id',jtoken.authorize,cAsicContract.activateAsicContarct)
router.put('/x/contract/expire/:id',jtoken.authorize,cAsicContract.endAsicContract)

module.exports = router