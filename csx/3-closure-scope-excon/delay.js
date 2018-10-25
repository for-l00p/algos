/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
Challenge: delay
https://csx.codesmith.io/units/closures-scope-execution-context/challenge-7

Write a function delay that accepts two arguments: a callback, and the wait time in milliseconds. 
Delay should return a function that, when invoked waits for the specified amount of time before executing. 
HINT - research setTimeout();
*/

/* =================================================================  
  CODE
================================================================= */

function delay(cb, time) {
    return function() {
        setTimeout(cb, time);
    }
}

/* =================================================================  
  TESTS
================================================================= */

// delay should create and return a function
// The function returned from delay should only execute the callback after the specified wait time

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 					    // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

/* =================================================================  
  NOTES
================================================================= */ 

/* 
Code rundown: 

We write a function `delay` that takes two arguments, a callback function and a time.
We call the `delay` function with two arguments. 
All the callback function does is increment the global `count` variable. 
The `delay` function returns a function that will execute setTimeout with the arguments of the callback function and time. 
We call `delayedFunc`, and that executes the setTimeout function. 
The setTimeout function waits 1 second, then it increments `count`. 
We call setTimeout again, but this time, the callback function console logs `count`. 
Since 1 second has passed, `count` will have been incremented.

--------------------------------------------------------------------
Notes:

We can use setTimeout() without `window`.

--------------------------------------------------------------------
SCOPE CHAIN

Lexical scope = set of rules that determines where and how variables can be looked up (getting/setting)
scope = where you can access a variable
Syntax parser

Function is invoked
- Creates and enters a new execution context.
- Execution context gets pushed onto execution stack
- Declared variables inside that context get put into execution context's VariableEnvironment.
- The OuterLexicalEnvironmentReference (outerLex) property points to the function's [[scope]] property.

When an execution context encounters a function definition, a new function object is created with the [[scope]] property, which references the *current* VariableEnvironment.
When the function is invoked, the function's *new* VariableEnvironment's outerLex property is assigned the [[scope]] property's value (aka the *previous* VariableEnvironment).

Outer VariableEnvironment
{
  variables
}

Inner VariableEnvironment
{ 
  variables, 
  outerLex: [[scope]] aka "Outer VariableEnvironment"
}

Lexical Environment
1. the environment record - the actual place where the variable and function declarations are stored
2. a reference to the outer environment - this means it has access to its outer lexical environment.

The JavaScript engine creates an `outer environment` reference to the lexical environment. 
The `outer reference` is the execution context in which the function was created.

Execution Context 
1. ThisBinding
2. LexicalEnvironment 
3. VariableEnvironment 

function 
- [[scope]] property
- definition

[[scope]] = current VariableEnvironment

--------------------------------------------------------------------
CLOSURE

I think Kyle Simpson would consider this more a demonstration of scope, rather than closure.

Technically, every function forms a closure on creation. 
When a function is created, it is given a [[scope]] property that references the variables of the outer lexical scope. 
The [[scope]] property enables closures. 
Because the [[scope]] property prevents outer function variables from being garbage collected once the outer function is executed.

Source: https://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/

*/

/* =================================================================  
  TO DO
================================================================= */ 

/* 
Solve this without using a global variable.
*/

/*
--------------------------------------------------------------------
*/