import Product from '../models/Product'

export const createProduct = async (req, res) => {

    try {
        
        const { name, description, category, price, discountedPrice, discountPercent } = req.body;

        const newProduct = new Product({ name, description, image: req.file.filename, category, price, discountedPrice, discountPercent })

        await newProduct.save()

        res.send(newProduct)

    } catch (error) {
        console.log(error);
    }

}

export const getProduct = async (req, res) => {

    try {
        
        Product.findById(req.params.id)
                .populate('category')
                .exec((err, result)=>{
                    res.send(result)
                })

    } catch (error) {
        console.log(error);
    }

}

export const getProductCategoryWise = async (req, res) => {

    try {
        
        Product.find({ category: req.params.id})
                .populate('category')
                .exec((err, result)=>{
                    res.send(result)
                })

    } catch (error) {
        console.log(error);
    }

}

export const getFewProductCategoryWise = async (req, res) => {

    try {
        
        Product.find({ category: req.params.id})
                .populate('category')
                .exec((err, result)=>{
                    res.send(result.slice(0, 10))
                })

    } catch (error) {
        console.log(error);
    }

}