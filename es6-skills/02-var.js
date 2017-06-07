/* Use `let` to keep x from 'leaking' out of our conditional block.
 * */
var x = 1;

if( x === 1 ) {
  var x = 2;
}

console.log(x); // should output 1
