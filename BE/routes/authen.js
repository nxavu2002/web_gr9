const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'dfjdkdhgsaudgsauhdakjhe245%#%&*#&$(*#(DSJAKDS#%(&*(';


router.post('/api/login', async (req, res) => {

    const {username, password} = req.body
    const user = await User.findOne({ username }).lean()

    if(!user)
    {
        res.status(400)
        return res.json({ status: 'error', error: 'Invalid username/password'})
    }

    if(await bcrypt.compare(password, user.password))
    {
        const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET)
        return res.json({ status: 'OK', data: token})
    }
    res.status(400)
    res.json({ status: 'error', data:'Invalid username/password'})
})
router.post('/api/register', async (req,res) => {
    
    const {username, password: plainText} = req.body
    if (!username || typeof username !== 'string'){
        res.status(400)
        return res.json({ status: 'error', error: 'Invalid username'})}
    if (!plainText || typeof plainText !== 'string'){
        res.status(400)
        return res.json({ status: 'error', error: 'Invalid password'})}
    if (plainText.length < 5) {
        res.status(400)
        return res.json({ status: 'error', error: 'Password too small. (>=5)'})
    }
    const password = await bcrypt.hash(plainText, 10)
    try{
        const response = await User.create({
            username,
            password
        })
        console.log('User created success', response)
    }catch (error){
        if(error.code === 11000){
            res.status(400);
            return res.json({status: 'error', error: 'Username already in use'})
        } 
        throw error
    }
    console.log(req.body)
    res.json({ status: 'OK'})
})
module.exports = router;