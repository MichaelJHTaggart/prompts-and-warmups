//Sean Duncan - Learners JS
//Ken Snyder - UtahJS

//Mob programming - One driving, every crowd sources a problem


//For ... of loops

//*loops for Arrays
/*
? why can we use const in a for ... of? 
Because 'of' is a new language construct.

!TC39 - github to check out the javascript language


*/

//*loops for Objects
/*

for ... in // with hasOwnProperty. => dont use Inherited on the prototype chain.
Object.keys()
Object.values()

_.forOwn  => for ... in // lodash with hasOwnProperty

for ... of for an object
?Is entries creating an array?
for(const [name, list] of Object.entries(object))
*/

//* Symbol.iterator
//gives a unique object with some property on it.
/*

Object.iterator = new Symbol('iterator');

[Symbol.iterator](){
 return this.#inventory.entries();
}

*PRIVATE PROPERTY
#inventory; => Private Property variable with a # sign in front of it.

*/

//* For ... of 

//!GAME
// https://alexnisnevich.gihub.io/untrusted/
