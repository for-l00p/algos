/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
firstNotRepeatingCharacter
https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC

Note: Write a solution that only iterates over the string once, 
and uses O(1) additional memory.

Given a string `s`, find and return the first instance of a non-repeating character in it. 
If there is no such character, return '_'.

Category: Arrays
*/

/* =================================================================  
  CODE
================================================================= */

function firstNotRepeatingCharacter(s) {
    // Split string into array of characters
    const arr = s.split('');
    console.log({ arr });

    // Store count for each character in object
    const obj = {};

    // If object has key (character), increment its value
    // If object doesn't have key, add key and set its value to 1
    arr.forEach(element => {
        if (obj.hasOwnProperty(element)) {
            obj[element] = obj[element] + 1;
        } else {
            obj[element] = 1;
        }
    });

    console.log(obj);

    // Convert object into an array
    // Object.entries() creates an array of arrays. 
    // The inner array has two values. The first is the key, the second is the value.
    const objToArray = Object.entries(obj);
    console.log({ objToArray });

    // Iterate through array, if a "key" has a "value" of 1, then that key is a unique character.
    // Return the first unique character. 
    for (let i = 0; i < objToArray.length; i++) {
        if (objToArray[i][1] === 1) {
            return objToArray[i][0];
        }
    }

    // If there are no unique characters, return '_' string
    return '_';
}

/* =================================================================  
  TESTS
================================================================= */

console.log(firstNotRepeatingCharacter("abacabad"));
// Expected Output: "c"

// Input: "abacabaabacaba"
// Output: "_"

// Input: "z"
// Output: "z"

// Input: "bcb"
// Output: "c"

/* =================================================================  
  NOTES
================================================================= */ 

/* 
for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

A for...in loop iterates over the properties of an object in an arbitrary order

The traversal order of object properties in ES6
http://2ality.com/2015/10/property-traversal-order-es6.html

Out Of Order Keys in ES6 Objects
https://hackernoon.com/out-of-order-keys-in-es6-objects-d5cede7dc92e

Expecting keys to be in the same order they were added was a long-time bad assumption to make in JavaScript before ES6.
ES6 introduced property key order, putting into the specification an expectation of how keys will be ordered.

*/