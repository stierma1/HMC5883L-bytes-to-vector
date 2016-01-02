var chai = require("chai");
chai.should();
var hmc5883lBytes2Vec = require("../index");

describe("hmc5883l-bytes-to-vector", function(){
  it("should convert bytes to 3d vector", function(){
    var expected = [ 49, 35, -207]
    var rawBytes = [0x00,0x31, 0xff,0x31, 0x00,0x23];

    var vector = hmc5883lBytes2Vec(rawBytes);

    vector[0].should.equal(expected[0]);
    vector[1].should.equal(expected[1]);
    vector[2].should.equal(expected[2]);
  });

  it("should throw error if Array is not passed in as input", function(){
    var rawBytes = {};

    try{
      var vector = hmc5883lBytes2Vec(rawBytes);
    } catch(err){
      return;
    }

    throw new Error("should have errored before getting here")
  });

  it("should throw error if Array is not lenght 6", function(){
    var rawBytes = [];

    try{
      var vector = hmc5883lBytes2Vec(rawBytes);
    } catch(err){
      return;
    }

    throw new Error("should have errored before getting here")
  });

})
