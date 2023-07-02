const Router = require('express')
const router = new Router()

const productRouter = require('./productRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')


// сопоставление маршрутов c роутерами и объед. в один
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)

module.exports = router