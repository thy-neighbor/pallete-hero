 const chai = require('chai');
 const chaiHttp = require('chai-http');

 const {app} = require('../server.js');

 const should = chai.should();
 chai.use(chaiHttp);

 describe('API', function() {

   it('should 200 on GET requests', function() {
     return chai.request(app)
       .get('/api/fooooo')
       .then(function(res) {
         res.should.have.status(200);
         res.should.be.json;
       });
   });

   it('should have status 200 on Colormind Api Request', function(){
     return chai.request(app)
     .get('/')
     .then(function(res){
       //console.log(res);
       res.should.have.status(200);
       res.should.be.json;

     });
   });
 });