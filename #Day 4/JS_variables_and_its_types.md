# Javascript variables 
  
 One can  declare variables to store data by using the  `var`,  `let`, or  `const`  keywords in javascript 
  
1.  **Var -**  It is an outdated keyword in Javascript. We cannot declare a variable without var in older browsers. The variable declared using var can store variable values during the program's execution and can be redeclared anytime.
2.  **Const -** It is a keyword used to declare constant variables whose value cannot be changed throughout the program.
3.  **Let -**  It is a newer keyword for declaring variables whose values can be changed. In this, a variable cannot be declared multiple times; however, they are declared once in a program.

  
 Variables should be named in a way that allows us to easily understand what’s inside them. 
  
 ## Data types 
 1-`Integer` 
 2- `String` 
 3-`Boolean` 
 4- `Char` 
 5-`Null`  
         
JavaScript is a dynamically typed language. It means that a  [variable]()  doesn’t associate with a type. In other words, a variable can hold a value of different types. For example:

`let counter = 120; // counter is a number
counter = false;   // counter is now a boolean
counter = "foo";   // counter is now a string 

To get the current type of the value that the variable stores, you use the  `[typeof] operator:

`let counter = 120;
console.log(typeof(counter)); // "number"

counter = false; 
console.log(typeof(counter)); // "boolean"

counter = "Hi";
console.log(typeof(counter)); // "string"

Output:

`"number"
"boolean"
"string"`
  
 ## JavaScript Type Conversions

In programming, type conversion is the process of converting data of one type to another. For example: converting  `String`  data to  `Number`.

There are two types of type conversion in JavaScript.

-   **Implicit Conversion**  - automatic type conversion
-   **Explicit Conversion**  - manual type conversion 
  
  

  
