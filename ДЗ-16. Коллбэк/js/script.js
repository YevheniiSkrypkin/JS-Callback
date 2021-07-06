function mainFunction(callback) {
    let a = +prompt('Введите число');
    let b = +prompt('Введите степень');
    return callback (a, b)
}

function exponentiation (a, b) {
    let c = a ** b
    alert (c)
    return c
    
}
mainFunction(exponentiation)



//task 2

// function multiplay (a, b) {
//     let c = a * b
//     alert (c)
//     return c
// }
// mainFunction(multiplay)



// task 3

// function division (a, b) {
//     let c = a / b
//     alert (c)
//     return c
// }
// mainFunction(division)



// task 4

// function modulo (a, b) {
//     let c = a % b
//     alert (c)
//     return c
// }
// mainFunction(modulo)
