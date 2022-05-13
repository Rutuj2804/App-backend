import Category from '../models/Category'

export const createCategory = async (req, res) => {
    
    try {
        
        const { name } = req.body;

        const newCategory = new Category({ name })

        await newCategory.save()

        res.send(newCategory)

    } catch (error) {
        console.log(error);
    }

}

export const getCategory = async (req, res) => {
    
    try {

        const newCategory = await Category.findById(req.params.id)

        res.send(newCategory)

    } catch (error) {
        console.log(error);
    }

}