//est função vai receber algo
function ConteCaratere(string){
    //var receber um objeto
    let dado={}

 //mapeando
 for (let i=0; i<string.length; i++){
    let caratere=string[i]

    if(dado[caratere]){
        dado[caratere]++
    }else{
        dado[caratere]=1;
    }
 }
 return dado;
}
console.log(ConteCaratere("hello world"));