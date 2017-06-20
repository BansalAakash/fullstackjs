var express = require('express');
import data from  '../src/testData';

var router = express.Router();

router.get('/contests', (req, res)=>{
	res.send({contests: data.contests});
});

module.exports = router;
