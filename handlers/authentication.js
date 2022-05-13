import User from '../models/User'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {

    const { password, userName, firstName, lastName } = req.body;

    const user = await User.findOne({ userName: userName})

    if(user) return res.status(400).json({"error":"User Already Registered With This Email"})

    try {

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({ password: passwordHash, userName: userName, firstName: firstName, lastName: lastName})
        await newUser.save()
        res.status(201).send("User Registered Successfully")

    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (req, res) => {
    
    try {
        const { userName, password } = req.body;
        // validate
        if (!userName || !password)
            return res.status(400).json({ msg: "Not all fields have been entered." });
        const user = await User.findOne({ userName: userName });
        if (!user)
            return res.status(400).json({ msg: "Invalid credentials." });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
        const token = jwt.sign({ id: user }, process.env.JWT_SECRET);
        res.json({
            token,
            user: user,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getUser = async (req, res) => {

    try {
    
        const user = await User.findById(req.user._id)

        res.send(user)

    } catch (error) {
        console.log(error);
    }

}