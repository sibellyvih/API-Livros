const express = require('express')
const app = express()

const livros = [
 { id:1, titulo:"Dom Casmurro", autor:"Machado de Assis", ano:1899, genero:"Romance", nota:9 },
 { id:2, titulo:"1984", autor:"George Orwell", ano:1949, genero:"Distopia", nota:10 },
 { id:3, titulo:"O Hobbit", autor:"J.R.R Tolkien", ano:1937, genero:"Fantasia", nota:9 },
 { id:4, titulo:"Dracula", autor:"Bram Stoker", ano:1897, genero:"Terror", nota:8 },
 { id:5, titulo:"It", autor:"Stephen King", ano:1986, genero:"Terror", nota:9 },
 { id:6, titulo:"Duna", autor:"Frank Herbert", ano:1965, genero:"Ficção", nota:10 },
 { id:7, titulo:"A Revolução dos Bichos", autor:"George Orwell", ano:1945, genero:"Sátira", nota:9 },
 { id:8, titulo:"Neuromancer", autor:"William Gibson", ano:1984, genero:"Cyberpunk", nota:8 },
 { id:9, titulo:"Frankenstein", autor:"Mary Shelley", ano:1818, genero:"Terror", nota:8 },
 { id:10, titulo:"O Pequeno Príncipe", autor:"Antoine de Saint-Exupéry", ano:1943, genero:"Infantil", nota:10 }
]

app.get('/livros', (req,res)=>{

 let resultado = [...livros]

 // FILTRO POR GÊNERO
 if(req.query.genero){
  resultado = resultado.filter(l => l.genero == req.query.genero)
 }

 // ORDENAÇÃO
 if(req.query.ordenar){
  if(req.query.ordenar === "titulo"){
   resultado.sort((a,b)=>a.titulo.localeCompare(b.titulo))
  }

  if(req.query.ordenar === "nota"){
   resultado.sort((a,b)=>b.nota - a.nota)
  }
 }

 // PAGINAÇÃO
 const pagina = parseInt(req.query.pagina) || 1
 const limite = parseInt(req.query.limite) || resultado.length

 const inicio = (pagina - 1) * limite
 const fim = inicio + limite

 const paginado = resultado.slice(inicio,fim)

 res.json(paginado)

})