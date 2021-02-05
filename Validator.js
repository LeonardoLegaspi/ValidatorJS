let PHONE = Symbol('phone');
let EMAIL = Symbol('email');
let PASSWORD = Symbol('password');

const isEmpty = (data) => {
    if(typeof(data) === "string"){
        if(data.trim().length === 0) return true;
    }

    if(typeof(data) === "number") return false;

    if(data === undefined || data === null) return true;

    else if(data.length === 0) return true;
    
    else if(Object.keys(data).length === 0) return true;
    
    else return false;
}

const isString = (data) => {
    return typeof(data) === "string"
}

const isPassword = (data) => {
    return Regex(PASSWORD, data)
}

const isEmail = (data) => {
    return Regex(EMAIL, data)
}

const isPhone = (data) => {
    return Regex(PHONE, data)
}

const Regex = (type, data) => {
    if(!isString(data)) return false;

    let regex;

    switch(type){
        case PHONE:
            regex = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")
            break;
        case EMAIL:
            regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
            break;
        case PASSWORD:
            regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            break;
        default: 
            return false; 
    }
    
    return regex.test(data);
}

const Validator = {
    isEmpty,
    isString,
    isPassword,
    isEmail,
    isPhone
}

export default Validator;