//let só funciona dentro de scopo
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
    console.log('fora =', numero)
