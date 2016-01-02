
module.exports = function(byteArr){
  if(!(byteArr instanceof Array)){
    throw new Error("Expected input of type array");
  }
  if(byteArr.length !== 6){
    throw new Error("Expected 6 bytes input array only found " + byteArr.length);
  }

  return [int16TwosComp(byteArr[0],byteArr[1]),int16TwosComp(byteArr[4],byteArr[5]),int16TwosComp(byteArr[2],byteArr[3])];
};

function int16TwosComp(highByte, lowByte){
  var val = (highByte << 8) + lowByte;
  if(val >> 15){
    return ((val ^ 0xffff) + 1) * -1;
  }
  return val;
}
