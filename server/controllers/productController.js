const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo} = require('../models/models')
const Apierror = require('../error/Apierror')

class ProductController {
    async create(req, res) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const product = await Product.create({name, price, brandId, typeId, img: fileName})
    
            if(info) {
                info = JSON.parse(info)
                info.forEach(i => 
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: i.deviceId
                    })
                )
            }
            return res.json(product)
        } catch (e){
            next(Apierror.badrequest(e.message))
        }
    }
    async getAll(req, res) {
        let{brandId, typeId, limit, page} = req.query 
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let products;
        if(!brandId && !typeId) {products = await Product.findAll({limit, offset})}
        if(brandId && !typeId) {products = await Product.findAll({where:{brandId}, limit, offset})}
        if(!brandId && typeId) {products = await Product.findAll({where:{typeId}, limit, offset})}
        if(brandId && typeId) {products = await Product.findAll({where:{brandId, typeId}, limit, offset})}
        return res.json(products)
    }
    async getProduct(req, res) {
        const{id} = req.params
        const product = await Product.findOne({
            where: {id},
            include: [{model: ProductInfo, as: 'info'}]
        })
        return res.json(product)
    }
}

module.exports = new ProductController()