function ArrayProduto(arrayNumero){

    let maior=arrayNumero[0]

let segundoN=arrayNumero[1]
for(let i=2; i<arrayNumero.length; i++){
    let atual=arrayNumero[i]

    if(atual>maior){

        segundoN=maior
        maior=atual
    }else if(atual>segundoN){
        segundoN=atual
    }
}
return maior*segundoN
}

let arrayNumero=[10, 3, 5, 6, 20]
console.log(ArrayProduto(arrayNumero))