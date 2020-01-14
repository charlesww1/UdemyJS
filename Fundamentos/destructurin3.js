function rand({ min = 0, max = 1000}){
    var valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 100}))
console.log(rand())
