

const dragons = require('../controllers/dragons.js');

module.exports = function (app) {

    app.get('/', function (req, res) {
        dragons.display(req, res)
    })
    app.get('/add', function (req, res) {
        dragons.addform(req, res)
    })
    app.post('/addDragon', function (req, res) {
        dragons.create(req, res)
    })
    app.get('/pack/edit/:id', function (req, res) {
        dragons.updateform(req, res)
    })
    app.post('/edit/:id', function (req, res) {
        dragons.update(req, res)
    })
    app.get('/delete/:id', function (req, res) {
        dragons.delete(req, res)
    })
    app.get('/back', function (req, res) {
        dragons.back(req, res)
    })
}