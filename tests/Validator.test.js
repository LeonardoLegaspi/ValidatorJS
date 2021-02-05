const { expect } = require('@jest/globals')

import Validator from '../Validator'

//--------------------->isEmpty<-----------------------
test('properly identifies a null or undefined Value', ()=>{
    expect(Validator.isEmpty(null)).toBe(true)
    expect(Validator.isEmpty(undefined)).toBe(true)
})

test('properly identifies a valid number', ()=>{
    expect(Validator.isEmpty(0)).toBe(false)
})

test('properly identifies an empty string', ()=>{
    expect(Validator.isEmpty("")).toBe(true)
})

test('properly identifies an empty array', ()=>{
    expect(Validator.isEmpty([])).toBe(true)
})

test('properly identifies an empty object', ()=>{
    expect(Validator.isEmpty({})).toBe(true)
})

test('properly identifies an only-spaces string', ()=>{
    expect(Validator.isEmpty("  ")).toBe(true)
})

test('properly identifies a valid string', ()=>{
    expect(Validator.isEmpty("  String")).toBe(false)
})

test('properly identifies a valid array', ()=>{
    expect(Validator.isEmpty([""])).toBe(false)
})

test('properly identifies a valid object', ()=>{
    expect(Validator.isEmpty({"": ""})).toBe(false)
})

//--------------------->isString<-----------------------
test('identifies if data is a string', ()=>{
    expect(Validator.isString("")).toBe(true)
    expect(Validator.isString("Hola!!")).toBe(true)
    expect(Validator.isString(12)).toBe(false)
    expect(Validator.isString([])).toBe(false)
    expect(Validator.isString({})).toBe(false)
})

//--------------------->isPassword<-----------------------
test('the password inputed is valid', ()=>{
    expect(Validator.isPassword("Hola")).toBe(false);
    expect(Validator.isPassword("  ")).toBe(false);
    expect(Validator.isPassword("")).toBe(false);
    expect(Validator.isPassword("!#*$aS")).toBe(false);
    expect(Validator.isPassword("!Q2w3e4r5")).toBe(true);
    expect(Validator.isPassword([])).toBe(false);
    expect(Validator.isPassword({})).toBe(false);
    expect(Validator.isPassword(["!Q2w3e4r5"])).toBe(false); 
    expect(Validator.isPassword(123456879)).toBe(false);   
})

//--------------------->isEmail<-----------------------
test('the email inputed has the right format', ()=>{
    expect(Validator.isEmail(" ")).toBe(false)
    expect(Validator.isEmail(["thisemail@gmail.com"])).toBe(false)
    expect(Validator.isEmail("thisEmail@gmail.com")).toBe(true)
    expect(Validator.isEmail("this.Email@gmail.com")).toBe(true)
    expect(Validator.isEmail("this-Email@gmail.com")).toBe(true)
    expect(Validator.isEmail("this_Email@gmail.com")).toBe(true)
    expect(Validator.isEmail("this_Email@gmail.com.mx")).toBe(true)
})

//--------------------->isPhone<-----------------------
test('the phone inputed has the right format', ()=>{
    expect(Validator.isPhone(" ")).toBe(false)
    expect(Validator.isPhone(["331761566"])).toBe(false)
    expect(Validator.isPhone("331746156")).toBe(false)
    expect(Validator.isPhone(331746156)).toBe(false)
    expect(Validator.isPhone("3317461566")).toBe(true)
})