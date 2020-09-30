const { Router } = require('express');

const router = Router();
const time = require('./time');

router.use('/time', time);

module.exports=router;