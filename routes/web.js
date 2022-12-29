const express = require('express');
const router = express.Router()
const { sendMessagePost, getQr } = require('../controllers/web')

router.use('/qr', getQr)
router.post('/sendMessage', sendMessagePost)
router.get('/nacimiento', function (req, res) {
 
   var edad = req.body.edad || '';
   var nacimiento = '';

   console.log(req.body);
   console.log("req->",req.query);
   console.log(edad)
   if (edad != '')
       nacimiento = 2015 - edad;

   res.send('<html><body>'
           + '<p>' + nacimiento + '</p>'
           + '</html></body>'
   );

});
module.exports = router