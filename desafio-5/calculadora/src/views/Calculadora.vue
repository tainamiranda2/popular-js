<template>
  <div class="calculadora">
   <div class="resultado">
    <p>{{getOperacao}}</p>
    <p>{{getResultado}}</p>
  </div>

    <div>
     <button @click=" dadosDel()">Del</button> 
     <button @click=" dadosAC()">AC</button>
     <button  @click=" dados('/')" class="operacao">/</button>

    </div>

    <div class="button-organizacao">
      <button @click=" dados('7')">7</button>
      <button  @click=" dados('8')">8</button>
      <button  @click=" dados('9')">9</button>
      <button @click=" dados('X')" class="operacao">x</button>
    </div>
    <div class="button-organizacao">
      <button @click=" dados('6')">6</button>
      <button @click=" dados('5')">5</button>
      <button @click=" dados('4')">4</button>
      <button @click=" dados('+')" class="operacao">+</button>
    </div>
    <div class="button-organizacao">
      <button @click=" dados('3')">3</button>
      <button @click=" dados('2')">2</button>
      <button @click=" dados('1')">1</button>
      <button @click=" dados('-')" class="operacao">-</button>
    </div>
    <div>
      <button @click=" dados('0')" >0</button>
       <button @click=" dados('.')" class="operacao">.</button>
       <button @click="   dadosResultado()" class="operacaoMaior">=</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default{
name:'Calculadora',
data(){
return{
  getOperacao:"",
  getResultado:"0",
}
},
methods:{
  dadosAC(){
    this.getResultado="0"
  },

  dadosDel(){
    if(this.getResultado.length>1){
      this.getResultado=this.getResultado.substring(0, this.getResultado.length-1)
    }else{
      this.getResultado="0"
    }
  },

  dados(valor){
    if(this.getResultado=='0'){
    this.getResultado=valor
    }else{
      this.getResultado+=valor
    }

  },
  dadosResultado(){
    let operacao=this.getResultado
this.getOperacao=operacao
operacao=operation.replace('X','+')
operacao=operation.replace('/','-')

this.getResultado=eval(operacao)
  }
}
}
</script>