const express = require('express')
const cors = require('cors')
const router = express.Router()
const Alien = require('../models/alien')

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


router.get('/', cors(corsOptions), async (req, res) => {
    console.log({ ...cors(corsOptions) })
    try{
        const aliens = await Alien.find();
        console.log(aliens)
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const alien = new Alien({
        message: req.body.message,
        
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})


module.exports = router