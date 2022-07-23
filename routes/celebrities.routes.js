const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(dbCelebsArray => {
        console.log(dbCelebsArray);
        res.render('celebrities/celebrities', { celebs: dbCelebsArray })
    })
    .catch(err => {
        console.log(err)
    })
})

router.get('/celebrities/create', (req, res) => {
    res.render('celebrities/new-celebrities.hbs')
});



router.post('/celebrities/create', (req, res) => {
    
    const { name, occupation, catchPhrase } = req.body;
    
    Celebrity.create({ 
        name, 
        occupation, 
        catchPhrase
    })
    .then(newCelebrity => {
        console.log(newCelebrity);
        res.redirect('/celebrities');
    })
    .catch(err => {
        console.log(err)
        res.render('celebrities/new-celebrity');
    })
})


module.exports = router;