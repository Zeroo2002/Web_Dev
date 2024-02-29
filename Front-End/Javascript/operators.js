console.log("Operators")

// Data declaration: let | var and const


// Arithmetic operator: ++ -- * / + - % **
var a = 12;
var b = 34;
// console.log(a++);
// console.log(a)

console.log(a++ + ++a + --b)
//    (12 + 13 + 33)+1 = 59

//Assignment Operator: = += -= *= /= %=
var d = 24;
d += 2;
// d = d + 2
console.log(d);

//Conditional operator: true | false

// > < >= <= == === != !==

console.log( 12 == '12');  //checks the value
console.log( 12 === "12"); //checks both value and the type

// logical operators: && || !

console.log(true && false)

//truly and falsy
//falsy: 0 null [] ""

//ternary operator
//condition ? true : false




true ? console.log("Car") : console.log("Bike")  // here if condition is true output is Car else Bike

5>0 ? console.log("Car") : console.log("Bike")  // here if condition is true output is Car else Bike

var a = 1;
--a + a++ ? console.log(true) : console.log(false);


"0" ? console.log(true) : console.log(false);
"0"-0 ? console.log(true) : console.log(false); //prints 0