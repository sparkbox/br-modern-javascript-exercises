/* Use `const` so `x` can't change
 * 
 * Consider renaming to const convention
 * */
var x = 1; 

if( true ) {
  var x = 2; // should raise a TypeError
}

console.log(x); // 1
