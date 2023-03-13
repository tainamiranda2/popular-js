<template>
    <div class="editar">
     <h1>Edite a tarefa tarefa</h1>
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

      <button @click="editLista">Enviar</button>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Input from '../components/input/Input.vue';
  
  export default {
    name: 'Edit',
    data(){
return{
  form:{
  nome:'',
  descricao:''
}
}
    
    },
    components:{
    Input

   }, 
   created(){
    
    let lista=JSON.parse(localStorage.getItem("lista"))
    this.form=lista[this.$route.params.index]

   },
   methods:{
    editLista(){
      let lista=JSON.parse(localStorage.getItem("lista"))
   lista[this.$route.params.index]= this.form

   this.$router.push({name:'home'})
    }
   }
  }
  
  </script>
  