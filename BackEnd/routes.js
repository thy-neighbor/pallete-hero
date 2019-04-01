const {PALETTE} = require('./models/palette.js');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



module.exports = function(app,passport){
    /* Palette Hero Launch Page */
    app.get('/', function(req,res){
        //retrieve a default color palette from the colormind api

        console.log("PALETTTEEE!!",palette);
        res.status(200).json(palette);
    });

    /*Login Page */
    app.post('/login', function(req,res){
        //retrieve login data from form and verify
    });

    /*Signup Page */
    app.post('/signup', function(req,res){
        //retrieve signup data from form and verify
    });

    /*Home Page(Login Required)*/
    app.get('/home', function(req,res){
        //retrieve a default color palette from the colormind api
        //load 5 most recent palettes added to public database
    });

    app.post('/home',function(req,res){
        //save a palette to the database under the users name
    });

    /*My Palettes page(Login Required) */
    app.get('/my-palettes', function(req,res){
        //load all of the palettes that the user has saved
    });



}