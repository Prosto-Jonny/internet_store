const Apierror = require('../error/Apierror')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')


generateToken = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {

    async registration(req, res, next) {
        const{email, password, role} = req.body
        if(!email || !password) {return next(Apierror.badrequest('Некорректные данные'))}
        const candidate = await User.findOne({where: {email}})
        if(candidate) {return next(Apierror.badrequest('Такой пользователь существует'))}
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateToken(user.id, user.email, user.role)

        return res.json({token})    
    }
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user) {return next(Apierror.internal('Пользователь не найден'))}
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {return next(Apierror.internal("Неверный пароль"))}
        const token = generateToken(user.id, user.email.user.role)
        return res.json({token})
    }
    // универсал. обработ. ошибки
    async check(req, res, next) {
        const token = generateToken(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
