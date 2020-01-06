# Fuse
Fuse.js is a functional variable sequencing checker. You can pass it an array of variables and an array of string telling it what each type the
variables should be. If the number of variables and type of variables matches the method will return true, otherwise, it returns false. Fuse is also
able to check if a variable is a specific type. This can be used to create the “overloaded” function or check to make sure all your variables are the
correct type. It allows you to achieve some of the variables guarantees that are promised in java, allowing you to make sure all your variables are
the correct type and in the correct order, simply.

## Methods
Here are the methods availible for use within Fuse.

### Is Number
This method allows for the verification of whether or not a variables data type is a number.
#### Parameters
* var => variable being tested
#### Return
* Boolean stating if the datatype of var is a number.
#### Example
```javascript
console.log(fuse.isNumber(22)); //Returns true
console.log(fuse.isInt(22)); //Returns true (alternate syntax)
console.log(fuse.isNumber(true)); //Returns false
console.log(fuse.isInt(false)); //Returns false
```

### Is String
This method allows for the verification of whether or not a variables data type is a string.
#### Parameters
* var => variable being tested
#### Return
* Boolean stating if the datatype of var is a string.
#### Example
```javascript
console.log(fuse.isString("Hello World")); //Returns true
console.log(fuse.isString(22)); //Returns false
```

### Is Character
This method allows for the verification of whether or not a variables data type is a character.
#### Parameters
* var => variable being tested
#### Return
* Boolean stating if the datatype of var is a character.
#### Example
```javascript
console.log(fuse.isCharacter("C")); //Returns true
console.log(fuse.isChar("C")); //Returns true (alternate syntax)
console.log(fuse.isCharacter("Hello World")); //Returns false
console.log(fuse.isChar("Hello World")); //Returns false
```

### Is Date
This method allows for the verification of whether or not a variables data type is a date.
#### Parameters
* var => variable being tested
#### Return
* Boolean stating if the datatype of var is a date object.
#### Example
```javascript
console.log(fuse.isDate(new Date())); //Returns true
console.log(fuse.isDate(2)); //Returns false
```

### Is Boolean
This method allows for the verification of whether or not a variables data type is a boolean.
#### Parameters
* var => variable being tested
#### Return
* Boolean stating if the datatype of var is a boolean.
#### Example
```javascript
console.log(fuse.isBoolean(true)); //Returns true
console.log(fuse.isBoolean("Hello World")); //Returns false
```

### Is Element
This method allows for the verification of whether or not a variables data type is an html element.
#### Parameters
* var => variable being tested
#### Return
* Boolean stating if the datatype of var is an html element.
#### Example
```javascript
console.log(fuse.isElement(document.getElementsByTagName("p"))); //Returns true
console.log(fuse.isElement(1)); //Returns false
```

### Is Object
This method allows for the verification of whether or not a variables data type is an object.
#### Parameters
* var => variable being tested
#### Return
* Boolean stating if the datatype of var is an object.
#### Example
```javascript
console.log(fuse.isObject({value: 1})); //Returns true
console.log(fuse.isObject(1)); //Returns false
```

### Is Array
This method allows for the verification of whether or not a variables data type is an array.
#### Parameters
* var => variable being tested
#### Return
* Boolean stating if the datatype of var is an array.
#### Example
```javascript
console.log(fuse.isArray([1, 2, 3])); //Returns true
console.log(fuse.isArray("Hello World")); //Returns false
```

### Is Function
This method allows for the verification of whether or not a variables data type is a function.
#### Parameters
* var => variable being tested
#### Return
* Boolean stating if the datatype of var is a function.
#### Example
```javascript
console.log(fuse.isFunction(() => console.log("This is a function."))); //Returns true
console.log(fuse.isFunction([1, 2, 3])); //Returns false
```

### Check (single parameter)
This will determine the data type of a given variable

#### Parameters
* var => variable being tested

#### Return
* Datatype of var

#### Example
```javascript
console.log(fuse.check(1)); //returns number
console.log(fuse.check("Hello World")); //returns string
```
### Check (double parameter)
Will determine:
  * If a given variable matches a given Datatype
  * If a given array of variables corresponds to a given array of datatypes
  * If a given array of variables all match a given datatype
  * If a given array of variables all match one of two given datatypes
  * If a given array of variables only consist of variables with either of the two given datatypes.

#### Parameters
* vars => array of variables to be tested or variable being tested
* types => array of types being tested with correspoding variable or single type being tested to a corresponding variable

#### Requires
* this.isChar() => check if a variable is a character
* this.isInt() => check if a variable is a number
* this.isElement() => check if a variable is an HTML Element
* this.isDate() => check if a variable is a date object
* this.isArray() => check if a variable is an array

#### Return
* When given an array of various variables and an array of data types that correspond to those variables, the method will return a boolean stating wheter or not each variable matched their data type
* When given an array of various variables inside an array and an array with a string of a data type surrounded in brackets ("[ ]"), the method will return a boolean stating if every variable in the first array
matched the datatype of the second array.
* When given an array of various variables inside an array and an array with a string of two data types separated by an or comparison opperator ("||") and surrounded in brackets ("[]"), the method will return a boolean
stating if every variable in the first array matched one of the datatypes of the second array.
* When given an array of various variables inside an array and an array with two different strings of data types, each surrounded in it's own pair of brackets ("[]") and separated by an or comparison operatior
("||"), the method will return a boolean stating if every variable in the first array all matched one of the data types in the second array.
* When given a single variable and a single data type, the method will return a boolean stating if the given data type matches the data type of the given variable.

#### Syntax
##### Logic
* “*” - any type
* “||” - or
* “[ ]” - arrays

##### Examples with Logic
* “[*]” - array filled with anything
* “[string]” - array filled with only strings
* “[string||number]” - array filled with strings and or numbers
* “[string]||[number]” - an array that is all filled with either all strings or all numbers
* “string||number” - a variable is either
* “*” - any type of variables

#### Example
```javascript
console.log(fuse.check( ["this is a string", 24 ], [ "string", "int" ] )); // returns true
console.log(fuse.check( [ 24, 24 ], [ "string", "int" ] )); // returns false
console.log(fuse.check( [day, num], ["date", "int"] )); // returns true
console.log(fuse.check( [arr, elem], ["html", "array"])); //returns false
console.log(fuse.check( [arr, elem], ["array", "html"])); //returns true
console.log(fuse.check( [1, "2", arr], ["int", "string", "array"])); //returns true
console.log(fuse.check( [ 24, 24, 24 ], [ "int", "int" ] )); // returns false => more than expected were passed
console.log(fuse.check( [ 24 ], [ "int", "int" ] )); // returns false => less was passed than expected
console.log(fuse.check( "dude", "string" )); // return true => if there are just two parmaters convert to array so you can work with it
console.log(fuse.check( "dude", "string2" )); // return false => send warning unable to identify type
console.log(fuse.check( "dude" )); // return false => send warning only 1 parm can't do anything
console.log(fuse.check( "dude", "dude", "dude" )); //=> return false => more than two paramaters
console.log(fuse.check(["dude", 1], ["*", "string"])); //return false

console.log(fuse.check( [ [ "25", 24 ] ], [ "[*]" ] )); // returns true
console.log(fuse.check( [ [ "hi", "dude" ] ], [ "[string]" ] )); // returns true
console.log(fuse.check( [ [1, 2, 3, 3] ], [ "[int]" ] )); //returns true
console.log(fuse.check( [ [day, day] ], ["[date]"] )); //returns true
console.log(fuse.check([ [1, 2, 3, 4, 5, 6] ], [ "[string]" ])); // return false
console.log(fuse.check([ [1, 2, 3] ], ["[boolean]"])) //return false
console.log(fuse.check([ ["hi", 1] ], [ "[int]" ])) //return false
console.log(fuse.check([ ["a", 2, ["a"]] ], [ "[array]" ])) //return false
console.log(fuse.check([ [1, "hello"] ], ["[int]"])); //return false
console.log(fuse.check([ [1, true] ], [ "[int]" ]));//return false

console.log(fuse.check([ [false, true, false] ], ["[string||int]"])); //returns false
console.log(fuse.check([ [24, "a"] ], ["[string||int]"])); //returns true
console.log(fuse.check([ [[""], day, day, arr] ], ["[array||date]"])); //returns true
console.log(fuse.check([ ["a", true, 3] ], ["[string||boolean]"])); //returns false
console.log(fuse.check([ ["a", 24] ], ["[date||int]"])); //returns false
console.log(fuse.check([ [day, 24, "a", ] ], ["[date||int]"])); //returns false
console.log(fuse.check([ ["a", 2, ["a"] ] ], [ "[string||array]" ])); //returns false
console.log(fuse.check([ ["a", 1, day] ], [ "[string||int]" ])); //returns false
console.log(fuse.check( [ [ "hi", 24 ] ], [ "[string||int]" ] )); // returns true

console.log(fuse.check([["a", 1, 2, "asaa"]], ["[string]||[int]"])); //returns false
console.log(fuse.check([["a", "bb", "sdw"]], ["[int]||[string]"])); //returns true
console.log(fuse.check([[true, false]], ["[boolean]||[date]"])); //returns true
console.log(fuse.check([[24, "a", ["a"]]], ["[array]||[int]"])); //return false
console.log(fuse.check([[true, "a"]], ["[string]||[int]"])); //return false
console.log(fuse.check([[day, day]], ["[string]||[int]"])); //return false
console.log(fuse.check([[elem, elem]], ["[string]||[html]"])); //return true
console.log(fuse.check( [ [ "hi", 24 ] ], [ "[string]||[int]" ] )); // returns false
console.log(fuse.check( [ [ "hi", "24" ] ], [ "[string]||[int]" ] )); // returns true
console.log(fuse.check( [ [ 25, 24 ] ], [ "[string]||[int]" ] )); // returns true
console.log(fuse.check([ [day, day] ], [ "[date]||[int]" ])); //returns true
```
