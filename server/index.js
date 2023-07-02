require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const PORT = process.env.PORT
const fileupload = require('express-fileupload')
const router = require('./routes')
const errorHand = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const app = express()
// отправка запросов с браузера
app.use(cors())
app.use(express.json())
//явное указание, что файлы из папки статик нужно раздавать, как статику, чтобы их получать
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileupload({}))
app.use('/api', router)
// мидл по ошибке обяз-но рег. последним
app.use(errorHand)

// ф-я для подключ. к бд
const start = async () => {
    try{
        await sequelize.authenticate()
        // сверка состояния бд со схемой данных 
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()


