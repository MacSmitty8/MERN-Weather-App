const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//This will be responsible for handling the register of new users.
const registerUser = asyncHandler(async(req, res) =>{
    const {name, email, password, zipcode} = req.body
    if(!name || !email || !password || !zipcode) {
        res.status(400)
        throw new Error('Please add all fields.')
    }
    //This will check to see if a user already exists
    const existingUser = await User.findOne({email})
    if (existingUser){
        res.status(400)
        throw new Error('This user already exists.')
    }
    //Hashing the password.
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create a user.
    const user = await User.create({
        name, 
        email,
        password: hashedPassword,
        zipcode: zipcode,
    })
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            zipcode: user.zipcode,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
}) 

const loginUser = asyncHandler(async(req, res) =>{
    const {email, password} = req.body

    //Check for the users email
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            zipcode: user.zipcode,
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

const getMe = asyncHandler(async (req, res) =>{
   const {_id, name, email, zipcode} = await User.findById(req.user.id)

   res.status(200).json({
    id: _id,
    name,
    email,
    zipcode,
   })
})

//Generate the JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,
        {expiresIn: '30d'
    })
}

module.exports ={
    registerUser,
    loginUser,
    getMe,
}