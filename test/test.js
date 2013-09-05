var should = require('should');
var assert = require("assert");
var http   = require('request');

describe('Get test ',function(){
    this.timeout(5000);  
    it('should be successful,and return status equal ok', function(done){  
     http.get('http://127.0.0.1:61440/', function (err,res,body) {  
      if(err) { done(err) }  
      else {  
       res.statusCode.should.be.equal(200)  
       should.exist(body)  
       var obj = JSON.parse(body)  
       obj.should.be.a('object')  
       obj.should.have.property('status','ok')  
       done()  
      }  
    })  
   })  
})  

describe('about hook',function(){  
   it('should be successful.', function(done){  
    http({method:'POST',  
     url:'http://127.0.0.1:61440/github',  
     json:true,  
     body: {"payload":{"ref":"refs/heads/master"}}},  
     function (err,res, body) { 
      res.statusCode.should.be.equal(200)  
      done()  
    })  
   })  
  })   





