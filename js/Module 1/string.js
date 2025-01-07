//=================== String p1

// a sequence of characters(Alpha, Num, Special symbols and whitespace) enclosed in single (' '), double quotes(" ") or backticks(` `)

// how to check the data type of a value / variable: typeof keyword

// console.log(typeof 123);
// console.log(typeof "123");
// console.log(typeof "    ");
// console.log(typeof "helloworld@1234");
// console.log(typeof `helloworld@1234`);

// a variable does not have a data type of its own , its derived by the value stored in it
// var age = "123";
// console.log(typeof age);

// how to check the length(number of characters) of string : .length property

// var txt = "hello world this is arihant";

// var spaces = "         ";

// console.log(txt.length);
// console.log(spaces.length);

// concatenation : adding two or more strings together : addition

// console.log(2 + 2); // 4

// console.log("2" + "2"); // 22
// console.log("john" + " " + "doe"); // john doe

// var first = prompt("Enter your first name : ");
// var second = prompt("Enter your second name : ");
// var occupation = prompt("Enter your occupation :");

// console.log(typeof first, typeof second, typeof occupation);

// console.log(
//   "hello world my name is " +
//     first +
//     " " +
//     second +
//     " and i am a " +
//     occupation +
//     "."
// );

// template literal | string literal : `` backticks : insertion | injection

// console.log(
//   `hello world my name is ${first} ${second} and i am a ${occupation}.`
// );

// =============== String p2

// indexing : counting starting from 0 , used to access character | items of a string | arrays : string[index]

// var myName = "john doe";
// console.log(myName.length);

// console.log(myName[0]);
// console.log("hello"[0]);
// console.log("hello"[4]);

// ========= String methods

var txt = "hello world my name is john doe";

// return the character on the index specified, also supports negative indexing
// console.log(txt.at(6));
// console.log(txt.at(20));
console.log(txt.at(-1));

// return the character on the index specified, does not supports negative indexing
// console.log(txt.charAt(6));
console.log(txt.charAt(-1));
