
const express = require('express')
const router = express.Router() //objeto de rota do express
const Job = require('../models/Job');



router.get('/test', (req,res) => {
    res.send('deu certo')
})
// add job via post
router.post('/add', (req, res) => {
    // aqui só to pegando os dados do corpo graças ao body parse
    let {
        title,
        salary,
        company,
        email,
        new_job
    } = req.body //structuring para criar varias variaveis no base do body
    Job.create({
        title,
        salary,
        company,
        email,
        new_job
    }) // como ele retorna uma promessa 
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})
// insert aqui eu to inserindo os dados q peguei do req.body
module.exports = router

//jobs routes
