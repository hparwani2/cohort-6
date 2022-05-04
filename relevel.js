/** 
// variables
// var a = 2
// let a = 2
// const a = 2

// Difference Between var, let, const
// var ----> Declare it multiple times but behind the scenes it will be only once, and rest will just assignment.
// Global and Function Scope.
// let -----> Cannot be declared more than once
// Block Scope.
// const ----> Cannot be declared more than once and cannot be reassiagned also. 
// Block Scope.

//types of variables
// 1. Number - 2, 3, 4, 0...., NaN, +Infinity, -Infinity
// 2. String - '', "", ``
// 3. boolean - true/false
// 4. object - null, ex: let a=null
// 5. undefined - ex: let a
// 6. BigInt - ignore
// 7. symbol - ignore

// naming convention of variables
// 1. contains letter, digits, _, $
// 2. can start with _, $, letter (digits is not allowed).
// 3. keywords cannot be used as variable names.

// keywords
// words that is reserved by js, ex: var, let, const, function...

//operators
// 1. arithmetic
    // + -> addition and concatenation
    // - -> subtraction
    // / -> Division
    // * -> multiply
    // % -> modulus (remainder operator).

// 2. relational
    // < -> lesser than
    // > -> greater than
    // <= -> lesser than or equal to
    // >= -> greater than or equal to
    // NOTES: These operators will only return boolean values, and used incase of condition checking.

// 3. Increment/Decrement
    // a++ -> post-Increment -> pehle istemaal phir viswaas kro -> first use then increment
        // var b = a++
            // b = a
            // a = a+1;
    // ++a -> pre-Increment -> pehle viswaas kre phir istemaal kre -> first incement then use.
        // var b = ++a
            // a = a+1
            // b = a
    // a-- -> post-Decrement
    // --a -> pre-Decrement
// 4. Assisgment
    // =
        // var a = 2
    // += 
        // a+=2 ------> a = a+2
    // -=
    // *=
    // /=
// 5. Equality
    // ==
        // if required, first Type Coersion then check 
        // 2 == '2' --> true, because number 2 will be converted to string.
    // ===
        // checks datatype and value too, no type coercion
        // 2 === '2' --> false, because datatype of both values are different.
// 6. unary
    // + ----> converts string to number
    // ! -----> true to false , false to true
  // Flasy Values -> null, undefined, "", 0, false, 0n, NaN
// 7. ternary
    // ? and : ----> ([condition]) ? (lines to be returned or executed if condtion matches) : (lines to be returned or executed if condtion doesn't match)

// condition statements
    // 1. if/else
    // syntax:
        // if([condition1]) {
            // lines to execute if condition1 matches 
        //} else if([condition2]) {
            // lines to execute if condition2 matches
        //} else {
            // lines to execute if none of the above conditions matched.
        //}
    // 2. switch
    // syntax:
        // switch([variable to be checked with cases]) {
            case 1: {
                lines to be executed if 1st case is true
                break; ----> this needs to be applied so as to break switch statement, otherwise it will
                execute all the other cases wihout checking the case condition.
            }
            case 2: {

            }
            case 3: {

            } 
            default: {
                incase other cases condition is not met.
            }
        }

Iterative statements
    1. while --> while loop is to execute repetative block of code til the condition fail.
        syntax:
            while([condition]) {
                // lines to execute till condition matches.
            }
    2. for --> for loop is just an extension of while loop in which initilaiztion, condition and incemeent/decrement will be 
                in single line
        syntax:
            for([intialization]:[condition]:[incemeent/decrement]) {
                // lines to execute till condition matches.
            }


*/

var a = 2
var b = 3
var result = a+b
console.log(`result is ${result}`)
