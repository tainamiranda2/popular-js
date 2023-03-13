<template>
    <form >
     <h1>Adione uma tarefa lista de tarefa</h1>
     <Input type="text" 
     id="nome"
     v-model="nome" 
     placeholder="Informe o nome"
      text="Informe o nome" />

      <Input type="text" 
      
      id="descricao"
      v-model="descricao" 
      placeholder="Informe a descrição dessa lista"
      text="Informe a descrição dessa lista " />

      <button @click="SalvarLista">Enviar</button>
    </form>
  </template>
  
  <script>
  // @ is an alias to /src
  import Input from '../components/input/Input.vue';
  
  export default {
    name: 'Form',
   data(){
return{
  //adioncionaod no form de local stoge
  form:{
  nome:'',
  descricao:''
}
}

   }, 
   methods:{
    //pegar todas as tarefas no localStoge
    SalvarLista(){
      let lista=(localStorage.getItem("lista")) ? JSON.parse(localStorage.getItem("lista")) :[]
    
      //envaido para o form
      lista.push(this.form);

      localStoge.setItem("lista", lista)

      //enviado caso de tudo certo
      this.$router.push({name:'home'})
    }

   }
  }
  </script>
  