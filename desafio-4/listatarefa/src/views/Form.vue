<template>
    <div>
     <h1>Adione uma tarefa lista de tarefa</h1>
     <Input type="text" 
     id="nome"
     v-model="form.nome" 
     placeholder="Informe o nome"
      text="Informe o nome" />

      <Input type="text" 
      
      id="descricao"
      v-model="form.descricao" 
      placeholder="Informe a descrição dessa lista"
      text="Informe a descrição dessa lista " />

      <button @click="SalvarLista">Enviar</button>
    </div>
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
},
methodSave:'new'
}

},
  components:{
    Input

   }, 
   created(){
    if(this.$route.params.index===0 || this.$route.params.index!==undefined){
    this.methodSave="update"

      let lista=JSON.parse(localStorage.getItem("lista"))
    this.form=lista[this.$route.params.index];
    }
   },
   methods:{
    
    //pegar todas as tarefas no localStoge
    SalvarLista(){
      if(this.methodSave==="update"){
      let lista= JSON.parse(localStorage.getItem("lista"))      
      lista[this.$route.params.index]=this.form;
      localStorage.setItem("lista",JSON.stringify(lista))

      this.$router.push({name:'home'})
      }
      let lista=(localStorage.getItem("lista")) ? JSON.parse(localStorage.getItem("lista")) :[]

   //envaido para o form
   lista.push(this.form);
     localStorage.setItem("lista",JSON.stringify(lista))
      //enviado caso de tudo certo
     this.$router.push({name:'home'})
    }

   }
  }
  </script>
  