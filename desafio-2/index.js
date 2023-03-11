
function filmesOrcamento(filmes){
    //iniciando com zero
    let totalOrcamento=0;
for(let i=0; i<filmes.length; i++){

let filme =filmes[i];
    if(filme.classificacao>=7.0){
        totalOrcamento+=filme.orcamento
    }
}
return totalOrcamento;
}

const filmes = [
    
  { 
    titulo: 'The Godfather', 
    classificacao: 9.2, 
    orcamento: 6000000 
  },
  { 
    titulo: 'The Shawshank Redemption', 
    classificacao: 9.3, 
    orcamento: 25000000 
  },
  { 
    titulo: 'The Dark Knight', 
    classificacao: 9.0, 
    orcamento: 185000000 
  },
  { 
    titulo: 'Pulp Fiction', 
    classificacao: 8.9, 
    orcamento: 8000000 
  },
  { 
    titulo: 'The Lord of the Rings: The Return of the King', 
    classificacao: 8.9, 
    orcamento: 94000000 
  },
  { 
    titulo: 'The Good, the Bad and the Ugly', 
    classificacao: 8.8, 
    orcamento: 1200000 
  }
  ];

let total=filmesOrcamento(filmes)
 console.log(total)