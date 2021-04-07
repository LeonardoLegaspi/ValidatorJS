# JavaScript Validator

This JavaScript validator is a simple data validation system which can be used in text-input validation.
Including JavaScript Validator will provide you with a set of functions to call in order to recieve a boolean value whether the data sent to the function complies with the library validation criteria.


```javascript 
import Validator from './Validator'

let name = ""

console.log(Validator.isEmpty(name)) //true
```


## Features

* `isEmtpy()`: This function can check for empty strings, objects, arrays and `undefined` and `null` values. It returns a `true` if the data is empty, the following are the empty values considered:
    * `string =  ""`
    * `object = {}`
    * `array = []`
    * `undefined`
    * `null`
<br>
* `isPassword`: This function returns a `true` if the data passed is a `string` and if it complies with the criteria, if not returns a `false`. Password criteria is:
    * To have at least 1 uppercase letter
    * To have at least 1 lowercase letter
    * To have at leat 1 numerical value
    * To have at least 1 special character
    * To be at least 8 characters long
<br>
* `isEmail`: This function returns a `true` if the data passed is a `string` and if it complies with the criteria, if not returns a `false`. Email criteria is: 
    * To have a word before the `@`
    * To have a word after the `@`, a `.` and a word after that
<br>
* `isPhone`: This function returns a `true` if the data passed is a `string` and if it complies with the various formats, if not returns a `false`. Phone formats are:
    * (123) 456-7890
    * (123)456-7890
    * 123-456-7890
    * 123.456.7890
    * 1234567890
    * +31636363634
    * 075-63546725
<br>
* `isString`: This function returns a `true` if the data type of the data passed is `string`, and returns a `false` if it's not.