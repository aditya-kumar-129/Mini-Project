const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Med = mongoose.model("Med")

router.post('/medData', (req,res)=>{
    const name = req.body.name;
    const type = req.body.type;
    const med = new Med({
        name,
        type
    })
    med.save()
    .then(med=>{
        res.json({message: "Saved Med"})
    })
    .catch(err => {
        console.log(err)
    })
});

router.get('/medData', async (req,res)=>{
    try {
        const meds = await Med.find();
        res.status(200).json(meds);
    } catch(err) {
        res.status(500).json(err);
    }
})
module.exports = router;
