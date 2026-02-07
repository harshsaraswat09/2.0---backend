const express = require('express')
const userModel = require("../models/user.model")
const JWT = require("jsonwebtoken")
const authRouter = express.Router()

authRouter.post("/register", async(req,res)=>{
    const { email, name, password} = req.body

    const isuseralreadyExists = await userModel.findOne({ email})

    if (isuseralreadyExists) {
        return res.status(400).json({
            message: " user already exists"
        })
    }

    const user = await userModel.create({
        email, password, name
    })

    const token = JWT.sign(
        {
        id:user._id,
        email: user.email
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt_token", token)

    res.status(201).json({
        message: "user registered",
        user,
        token
    })
})




module.exports = authRouter