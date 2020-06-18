// somar(3)(4)(5)

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

const soma = a => b => c => a + b + c

const multiplicar = a => b => a * b
const somar = a => b => a + b
const diminuir = a => b => a - b
const dividir = a => b => a / b

const calcular = a => b => fn => fn(a)(b)

console.log(soma(3)(4)(5))
console.log(calcular(3)(7)(multiplicar))
console.log(calcular(3)(7)(somar))
console.log(calcular(3)(7)(diminuir))
console.log(calcular(3)(7)(dividir))
