<template>
  <div class="home">
   <h1>App de lsita de tarefa</h1>
   <div v-if="lista.length===0">
    <h2>Não há nenhum serviço cadastrado</h2>
</div>
   <div v-for="(tarefa, index) in lista" :key="index">
   <h2>{{tarefa.nome}}</h2>
   <p>{{tarefa.descricao}}</p>
   <button class="apagar">Apagar</button>
   <button @click="editar(index)">Enviar</button>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
/*
 <RouterLink class="enviar" 
   :to="{name: 'edit',params:{id: tarefa.id} }" > 
   Editar</RouterLink>
*/

export default {
  name: 'Home',
  data(){
return{
lista:[]
}
  },
  created(){
    this.lista=(localStorage.getItem("lista")) ? JSON.parse(localStorage.getItem("lista")) :[]

  },
  methods:{
    editar(index){
      this.$router.push({name:'form', params:{index}})
    }
  }
}
</script>
