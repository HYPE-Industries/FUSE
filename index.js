/* FUSE
 * Copyright (C) HYPE Industries Cloud Services Division - All Rights Reserved (HYPE-CSD)
 * Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained from HYPE Industries.
 * Written by Jack Saysana, January 2019
 */

module.exports = class fuse {
  /* ============== IS NUMBER ============= (PUBLIC)
    This will determine if a given variable is a number

    PARAMATERS
    _var => variable being tested

    RETURNS
    Boolean stating if the datatype of _var is a number.
  */
  static isNumber(_var){
    return(typeof _var === "number" || _var instanceof Number);
  }

  /* ============== IS INT ============= (PUBLIC)
    This will also determine if a given variable is a number

    PARAMATERS
    _var => variable being tested

    RETURNS
    Boolean stating if the datatype of _var is a number.
  */
  static isInt(_var){
    return(this.isNumber(_var));
  }

  /* ============== IS STRING ============= (PUBLIC)
    This will determine if the given variable is a string

    PARAMATERS
    _var => variable being tested

    RETURNS
    Boolean stating if the datatype of _var is a string
  */
  static isString(_var){
    return(typeof _var === "string" || _var instanceof String);
  }

  /* ============== IS CHAR ============= (PUBLIC)
    This will determine if the given variable is a character
    PARAMATERS
    _var => variable being tested

    RETURNS
    Boolean stating if the datatype of _var is a character
  */
  static isChar(_var){
    return((typeof _var === "string" || _var instanceof String) && _var.length === 1);
  }

  /* ============== IS CHARACTER ============= (PUBLIC)
    This will also determine if the given variable is a character
    PARAMATERS
    _var => variable being tested

    RETURNS
    Boolean stating if the datatype of _var is a character
  */
  static isCharacter(_var){
    return(this.isChar(_var));
  }

  /* ============== IS DATE ============= (PUBLIC)
    This will determine if the given variable is a date

    PARAMATERS
    _var => variable being tested

    RETURNS
    Boolean stating if the datatype of _var is a date
  */
  static isDate(_var){
    return(_var instanceof Date);
  }

  /* ============== IS BOOLEAN ============= (PUBLIC)
    This will determine if the given variable is a boolean

    PARAMATERS
    _var => variable being tested

    RETURNS
    Boolean stating if the datatype of _var is a boolean
  */
  static isBoolean(_var){
    return(typeof _var === "boolean" || _var instanceof Boolean);
  }

  /* ============== IS ELEMENT ============= (PUBLIC)
    This will determine if the given variable is an html element

    PARAMATERS
    _var => variable being tested

    RETURNS
    Boolean stating if the datatype of _var is an HTML element
  */
  static isElement(_var){
    return(_var instanceof HTMLCollection);
  }

  /* ============== IS OBJECT ============= (PUBLIC)
    This will determine if the given variable is an object

    PARAMATERS
    _var => variable being tested

    RETURNS
    Boolean stating if the datatype of _var is an object
  */
  static isObject(_var){
    return(_var instanceof Object);
  }

  /* ============== IS ARRAY ============= (PUBLIC)
    This will determine if the given variable is an array

    PARAMATERS
    _var => variable being tested

    RETURNS
    Boolean stating if the datatype of _var is an array
  */
  static isArray(_var){
    return(_var instanceof Array);
  }

  /* ============== IS FUNCTION ============= (PUBLIC)
    This will determine if the given variable is a function

    PARAMATERS
    _var => variable being tested

    RETURNS
    Boolean stating if the datatype of _var is a function
  */
  static isFunction(_var){
    return(_var instanceof Function);
  }

  /* ============== CHECK ============= (PUBLIC)
    This will determine the data type of a given variable

    PARAMATERS
    _var => variable being tested

    RETURNS
    Datatype of _var
  */
  static check(_var){
    return(typeof _var);
  }

  /* ============== CHECK ============= (PUBLIC)
    Will determine:
      -If a given variable matches a given Datatype
      -If a given array of variables corresponds to a given array of datatypes
      -If a given array of variables all match a given datatype
      -If a given array of variables all match one of two given datatypes
      -If a given array of variables only consist of variables with either of the two given datatypes.

    PARAMATERS
    _vars => array of variables to be tested or variable being tested
    _types => array of types being tested with correspoding variable or single type being tested to a corresponding variable

    REQUIRES
    this.isChar() => check if a variable is a character
    this.isInt() => check if a variable is a number
    this.isDate() => check if a variable is a date object
    this.isElement() => check if a variable is an HTML Element
    this.isArray() => check if a variable is an array

    RETURNS
    -When given an array of various variables and an array of data types that correspond to those variables, the method will return a boolean stating wheter or not each variable matched their data type
    -When given an array of various variables inside an array and an array with a string of a data type surrounded in brackets ("[ ]"), the method will return a boolean stating if every variable in the first array
    matched the datatype of the second array.
    -When given an array of various variables inside an array and an array with a string of two data types separated by an or comparison opperator ("||") and surrounded in brackets ("[]"), the method will return a boolean
    stating if every variable in the first array matched one of the datatypes of the second array.
    -When given an array of various variables inside an array and an array with two different strings of data types, each surrounded in it's own pair of brackets ("[]") and separated by an or comparison operatior
    ("||"), the method will return a boolean stating if every variable in the first array all matched one of the data types in the second array.
    -When given a single variable and a single data type, the method will return a boolean stating if the given data type matches the data type of the given variable.
  */
  static check(_vars, _types){
    if(_vars instanceof Array && _types instanceof Array){ //Checks if parameters are Arrays rather than single values to determine how to compare the _vars and _types
      if(_vars.length === _types.length){ //Ensures the Arrays are the same length
        //Checks if _vars and _types are in the format to compare an array of variables to a single data type ex: _vars = [ [1, 2, 3, 4] ] _types = ["[int]"]
        //or to compare an array of variables to another array of corresponding data types ex: _vars = [1, 2, 3, 4] _types = ["int", "int", "int", "int"]
        if(_types.length === 1 && _vars[0] instanceof Array && _types[0].indexOf("[") !== -1 && _types[0].indexOf("]")){
          if(_types[0].indexOf("*") !== -1){ //Checks if any datatype symbol "*" is present in _types array and returns true if so
            return true;
            //Checks if _types is written in the format of comparing _vars to an array of a string of two datatypes,
            //each surrounded in brackets and separated by or comparison operator ex: _types = ["[int]||[string]"]
          }else if(_types[0].indexOf("]||[") !== -1){
            var type1 = _types[0].substring(1, _types[0].indexOf("]||[")); //pulls both data types from the _types string
            var type2 = _types[0].substring(_types[0].indexOf("]||["), _types[0].length - 1).replace("]||[", "");
            //Checks if each variable in the _vars array's data type is equal to one of the given datatypes and ensures this datatype is the same for every variable in the array
            for(var j = 0; j < _vars[0].length; j++){
              if(
                !(typeof _vars[0][j] === typeof _vars[0][0] &&
                (typeof _vars[0][j] === type1 || typeof _vars[0][j] === type2 ||
                (((type1 === "int" || type2 === "int" ) && this.isInt(_vars[0][j])) ||
                ((type1 === "date" || type2 === "date" ) && this.isDate(_vars[0][j])) ||
                (((type1 === "char" || type1 === "character") || (type2 !== "char" || type2 !== "character")) && this.isChar(_vars[0][j])) ||
                ((type1 === "array" || type2 === "array") && this.isArray(_vars[0][j])) ||
                ((type1 === "html" || type2 === "html") && this.isElement(_vars[0][j])))))
            ){
                return false;
              }
            }
            return true;
            //Checks if _vars and _types are in the format comparing _vars to an array of a string of two datatypes,
            //separated by an or comparison operator and surrounded in brackets. ex: _types = ["[int||string]"]
          }else if(_types[0].indexOf("||") !== -1){
            var type1 = _types[0].substring(1, _types[0].indexOf("||")); //pulls both data types from the _types string
            var type2 = _types[0].substring(_types[0].indexOf("||"), _types[0].length - 1).replace("||", "");
            //checks if each variable in the _vars array has the datatype equal to one of the given datatypes
            for(var h = 0; h < _vars[0].length; h++){
              if(
                !(typeof _vars[0][h] === type1 || typeof _vars[0][h] === type2 ||
                (((type1 === "int" || type2 === "int") && this.isInt(_vars[0][h])) ||
                ((type1 === "date" || type2 === "date") && this.isDate(_vars[0][h])) ||
                (((type1 === "char" || type1 === "character") || (type2 === "char" || type2 === "character")) && this.isChar(_vars[0][h])) ||
                ((type1 === "array" || type2 === "array") && this.isArray(_vars[0][h])) ||
                ((type1 === "html" || type2 === "html") && this.isElement(_vars[0][h]))))
              ){
                return false;
              }
            }
            return true;
          }else{
            var type = _types[0].replace("[", "").replace("]", ""); //pulls the datatype from the _types string
            //checks if each variable in the _vars array has the datatype equal to the single datatype in the _types array
            for(var k = 0; k < _vars[0].length; k++){
              if(
                !(typeof _vars[0][k] === type ||
                ((type === "int" && this.isInt(_vars[0][k])) ||
                (type === "date" && this.isDate(_vars[0][k])) ||
                ((type === "char" || type === "character") && this.isChar(_vars[0][k])) ||
                (type === "array" && this.isArray(_vars[0][k])) ||
                (type === "html" && this.isElement(_vars[0][k]))))
              ){
                return false;
              }
            }
            return true;
          }
        }else{
          //checks if each variable in the _vars array has the datatype equal to it's corresponding datatype in the _types array
          for(var i = 0; i < _vars.length; i++){
            if(
              !(_types[i] === "*" ||
              typeof _vars[i] === _types[i] ||
              ((_types[i] === "date" && this.isDate(_vars[i])) ||
              (_types[i] === "int" && this.isNumber(_vars[i])) ||
              ((_types[i] === "char" || _types[i] === "character") && this.isChar(_vars[i])) ||
              (_types[i] === "array" && this.isArray(_vars[i])) ||
              (_types[i] === "html" && this.isElement(_vars[i]))))
            ){
              return false;
            }
          }
          return true;
        }
      }else{
        return false;
      }
    }else{
      //checks if the single variable, _vars, has a datatype equal to the datatype entered in _types
      return _types === "*" || typeof _vars === _types || (_types === "date" && this.isDate(_vars)) || (_types === "string" && this.isString(_vars)) || (_types === "int" && this.isNumber(_vars)) || ((_types === "char" || _types === "character") && this.isChar(_vars));
    }
  }
}
