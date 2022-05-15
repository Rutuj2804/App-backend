import Category from '../models/Category'

export const createCategory = async (req, res) => {
    
    try {
        
        const { name } = req.body;

        if(!name) res.send({ error: "Each Field is necesaary" })

        const newCategory = new Category({ name })

        await newCategory.save()

        res.send(newCategory)

    } catch (error) {
        res.status(400).send({error:error.message});
    }

}

export const getCategory = async (req, res) => {
    
    try {

        const newCategory = await Category.findById(req.params.id)

        res.send(newCategory)

    } catch (error) {
        res.status(400).send({error:error.message});
    }

}

export const getCategories = async (req, res) => {
    
    try {

        const newCategory = await Category.find()

        res.send(newCategory)

    } catch (error) {
        res.status(400).send({error:error.message});
    }

}