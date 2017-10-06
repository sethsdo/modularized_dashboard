
const mongoose = require("mongoose");
const Pack = mongoose.model("Pack");
const session = require('express-session');



module.exports = {
    display: function(req, res) {
        Pack.find({}, function (err, pack) {
            if (err) {
                console.log("something wen't wrong!")
            }
            const context = {
                "pack": pack,
            }
            res.render('index', context);
        });
    },
    addform: function (req, res) {
        if (!req.session.errors) {
            req.session.errors = [];
        }
        //console.log(req.session.errors)
        const context = {
            "errors": req.session.errors,
        }
        //console.log(context);
        res.render("new_dragon", context)
    },
    create: function(req, res) {
        var pack = new Pack({ name: req.body.name, about: req.body.about, species: req.body.species });
        console.log(pack)
        pack.save(function (err) {
            if (err) {
                req.session.errors = pack.errors;
                res.redirect('/add')
            }
            else { res.redirect('/'); }
        })
    },
    updateform: function (req, res) {
        if (!req.session.errors) {
            req.session.errors = [];
        }
        //console.log(req.session.errors)
        const context = {
            "errors": req.session.errors,
            "id": req.params.id,
        }
        //console.log(context);
        res.render("edit_dragon", context)
    },
    update: function (req, res) {
        Pack.findById({ _id: req.params.id }, function (err, dragon) {
            console.log(dragon);
            if (err) {
                console.log("something wen't wrong!")
            }
            else {
                dragon.name = req.body.name || dragon.name;
                dragon.about = req.body.about || dragon.about;
                dragon.species = req.body.about || dragon.species;

                dragon.save((er, dragon) => {
                    if (err) {
                        console.log("something wen't wrong!")
                    }
                    console.log("Success!")
                    res.redirect("/")
                })
            }
        })
    },
    delete: function (req, res) {
        console.log("hello")
        Pack.findByIdAndRemove({ _id: req.params.id }, function (err, dragon) {
            if (err) {
                console.log("something wen't wrong!")
            }
            const response = {
                "message": "dragon deleted",
            }
            res.redirect("/")
        })
    },
    back: function (req, res) {
        req.session.destroy();
        res.redirect('/')
    }
}