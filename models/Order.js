import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Product',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

export default Order