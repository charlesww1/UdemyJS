const prod1 = {} //formato 1 de fazer um objeto
prod1.nome = 'Celular'

prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço
console.log(prod1)

    //formato 2 de fazer um objeto, melhor.
    const prod2 ={
        nome: 'Camisa Polo',
        preco: 79.90,
            obj: {
                blabla: 1,
            }
    }

    '{"nome": "Camisa Polo", "preco": 79.90}' //json

    console.log(prod2)
/*
var i
    for(i=0; i<5; i++){
        console.log(prod1)
    }
*/