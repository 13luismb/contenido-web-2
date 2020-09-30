const { Router } = require('express');
const {getTime} = require('../helpers/time');
const router = Router();

router.get('/', async (req,res) => {
    const time = await getTime();
    res.status(200).json({status:200, message:'Tienes el tiempo mi pana', time});
})

module.exports=router;