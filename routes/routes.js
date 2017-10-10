let $ = require('../util/util.js');
let dummy = require('../assets/json/dummyCards.json');
let sets = [];
let bP = require('body-parser');
let cards;

module.exports = (app) => {

    app.use(bP.urlencoded({extended: true}));
    app.use(bP.json());

    app.get('/', (req, res) => {
        sets = $.getAllSets();
        res.render('index.ejs', {sets: sets, cards: dummy});
    });

    app.post('/', (req, res) => {
        cards = $.findCards(req.body);
        // console.log(cards);
        res.render('index.ejs', {sets: sets, cards: cards});
    });
};