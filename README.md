# HMC5883L-bytes-to-vector
Convert the raw hex bytes of HMC5883L to a 3d vector.  Note this handles the twos compliment conversion and swaps the z component into the 3rd position in the vector.

Input
X MSB  
X LSB
Z MSB  This is not a typo, the compass places the z component in the 2nd position
Z LSB
Y MSB
Y LSB

Output
X int
Y int
Z int


```javascript

var hmc5883lBytes2Vec = require("hmc5883l-bytes-to-vector");
var rawBytes = [0x00,0x31, 0xff,0x31,0x00,0x23];
var vector = hmc5883lBytes2Vec(rawBytes);
//vector = [ 49, 35 -207 ]

```
