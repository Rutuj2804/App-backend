import Cart from "../models/Cart";

export const addToCart = async (req, res) => {

    try {
        
        const item = await Cart.find({ product:req.params.id, user: req.user })

        if(item.length){
            res.send({ error: "Item already in cart" })
        } else {
            const newCartProduct = new Cart({ product: req.params.id, user: req.user })
    
            await newCartProduct.save()
    
            res.send(newCartProduct)
        }

    } catch (error) {
        console.log(error);
    }

}

export const removeFromCart = async (req, res) => {

    try {
        
        const item = await Cart.deleteMany({ product: req.params.id, user: req.user })

        res.send(item)

    } catch (error) {
        console.log(error);
    }

}

export const getCartItmes = async (req, res) => {

    try {
        
        Cart.find({ user: req.user })
            .populate('product')
            .populate({ 
                path: 'product',
                populate: {
                  path: 'category',
                  model: 'Category'
                } 
             })
            .exec((err, result)=>{
                res.send(result)
            })

    } catch (error) {
        console.log(error);
    }

}