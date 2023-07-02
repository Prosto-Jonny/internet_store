const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')


router.post('/', productController.create)
router.get('/', productController.getAll)
// при переходе на страницу инфы товара
router.get('/:id', productController.getProduct)

module.exports = router