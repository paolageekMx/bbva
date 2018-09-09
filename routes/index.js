const express =   require('express');
const router  =   express.Router();
const Inegi   =   require('../models/inegi');
const Saldo   =   require('../models/saldos');
const Bie     =   require('../models/bie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/saldos', (req, res, next)=>{
  Saldo.find()
  .then(Saldo =>{
    res.render()
  })
})

router.post('/registro', (req, res, next)=>{
  Saldo.save()
  .then(Saldo=>{
    res.render
  })
})

router.get('/dashboard', (req,res, next)=>{

})

router.post('/dashboard', (req, res, next)=>{
  
})

module.exports = router;
