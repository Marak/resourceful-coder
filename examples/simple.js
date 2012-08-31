//
// Require the resource
//
var Creature = require('./resource').Creature;

//
// Now turn it back into code
//
var coder = require('../lib/resourceful-coder');
var str = coder.code(Creature);
console.log(str)