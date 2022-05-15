import Product from '../models/Product'

export const createProduct = async (req, res) => {

    try {
        
        const { name, description, category, price, discountedPrice, discountPercent } = req.body;

        if(!name || !description || !category || !price || !discountedPrice || !discountPercent) {
            res.send({ error: 'Each field is mandatory' })
        } else {

            const newProduct = new Product({ name, description, image: req.file.filename, category, price, discountedPrice, discountPercent })
    
            await newProduct.save()
    
            res.send(newProduct)
        }


    } catch (error) {
        res.status(400).send({error:error.message});
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
        res.status(400).send({error:error.message});
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
        res.status(400).send({error:error.message});
    }

}


export const getAllProducts = async (req, res) => {

    try {
        
        Product.find()
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