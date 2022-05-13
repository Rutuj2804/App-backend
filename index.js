import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import dotenv from 'dotenv'


// routers
import authentication from './routes/authentication'
import category from './routes/category'
import products from './routes/products'
import cart from './routes/cart'
import order from './routes/order'

dotenv.config()

const app = express();

app.use(express.json({ limit:'30mb' }));
app.use(express.urlencoded({ limit:'30mb',extended:true }));
app.use(cors({ methods: ['POST', 'GET', 'OPTIONS'], origin: '*' }));

// router
app.use('/user', authentication);
app.use('/category', category);
app.use('/products', products);
app.use('/cart', cart);
app.use('/order', order);

app.get('/', (req, res) => res.send('Hello from here'))
const PORT = process.env.PORT || 5000;

app.use(express.static('uploads'))

mongoose.connect(`mongodb+srv://rutuj:rutuj@cluster0.0xsj8.mongodb.net/AppleuteDatabase?retryWrites=true&w=majority`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
})
