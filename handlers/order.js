import Order from "../models/Order";
import Cart from "../models/Cart"

export const placeOrder = async (req, res) => {

    try {
        
        const { products, address } = req.body

        if(!products || !address) {
            res.send({ error: 'Each Field is Necessary' })
        } else {

            const newPlaceOrder = new Order({ products, address, user: req.user })
    
            await Cart.deleteMany({ user: req.user })
    
            await newPlaceOrder.save()
    
            res.send(newPlaceOrder)
        }


    } catch (error) {
        res.status(400).send({error:error.message});
    }

}

export const getOrders = async (req, res) => {

    try {

        Order.find()
            .populate('products')
            .populate({ 
                path: 'products',
                populate: {
                  path: 'category',
                  model: 'Category'
                } 
             })
            .populate('user')
            .exec((err, result)=>{
                res.send(result)
            })

    } catch (error) {
        res.status(400).send({error:error.message});
    }

}

export const getMyOrders = async (req, res) => {

    try {

        Order.find({ user: req.user })
            .populate('products')
            .populate({ 
                path: 'products',
                populate: {
                  path: 'category',
                  model: 'Category'
                } 
             })
            .exec((err, result)=>{
                res.send(result)
            })

    } catch (error) {
        res.status(400).send({error:error.message});
    }

}