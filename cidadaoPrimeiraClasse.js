// Função em JS é First-Class Object (Citizens)
//Higher-order function

// Criar de forma literal
    function fun1(){ 
        return 'ola'
    }

// Armazenar em uma variável
    const fun2 = function(){
        /* int n1, n2, mlt
        parseInt("n1", n1)
        parseInt("n2", n2)
        mlt = n1 * n2
        return mlt */
     }

// Armazenar em uma array
    const array = [function(a, b) {return a + b}, fun1, fun2]

    console.log(array[1](3, 3))

// Armazenar em um atributo de objeto
     const obj = {}
     obj.falar = function (){return 'Opa'}

     console.log(obj.falar())

// Passar função como parametro
     function run(fun) {
        fun()
     }

     run(function(){console.log('Executando...')})

// Uma funçao pode retornar/conter uma funçao
    function soma(a, b) {
        return function(NaN) {
            console.log(a + b)
        }
    }
        soma(2, 3)(NaN)