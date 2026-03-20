# API REST de Livros
## Atividades 1 e 2
### API REST desenvolvida em Node.js utilizando Express, com o objetivo de gerenciar uma coleção de livros.
#### Aluna: Sibelly Vitória Antonio
---

#  Funcionalidades

- Listar todos os livros  
- Buscar livro por ID  
- Filtrar por gênero  
- Ordenar por título e nota  
- Paginação dos resultados  
- Criar novos livros (POST)  

---

# Como executar o projeto

```bash
npm install
node server.js

---

# Endpoints da API

## 1️. Listar todos os livros

**Método:** GET  
**URL:** `/livros`

Resultado:

![GET livros](Imagens atividade api/1.Listar todos.png)
![GET livros](Imagens atividade api/1.1 Listar todos.png)
![GET livros](Imagens atividade api/1.2 Listar todos.png)

---

## 2️. Buscar livro por ID

**Método:** GET  
**URL:** `/livros/:id`

Exemplo: /livros/1

Resultado:

![GET por ID](Imagens atividade api/2.ID.png)

---

## 3️. Filtrar por gênero

**Método:** GET  
**URL:** `/livros?genero=Fantasia`

Resultado:

![Filtro por gênero](Imagens atividade api/3.Gênero.png)

---

## 4. Ordenação

### 🔹 Por título

**Método:** GET  
**URL:** `/livros?ordenar=titulo`

Resultado:

![Ordenação por título](Imagens atividade api/4.Título.png)

---

### 🔹 Por nota

**Método:** GET  
**URL:** `/livros?ordenar=nota`

Resultado:

![Ordenação por nota](Imagens atividade api/5.Nota.png)

---

## 5️. Paginação

**Método:** GET  
**URL:** `/livros?pagina=1&limite=3`

Resultado:

![Paginação](Imagens atividade api/6.Paginação.png)

---

## 6️. Criar novo livro

**Método:** POST  
**URL:** `/livros`

### Body da requisição

```json
{
 "titulo": "Harry Potter",
 "autor": "J.K Rowling",
 "ano": 1997,
 "genero": "Fantasia",
 "nota": 9
}

Resultado: 

![Criação de livro usando Post](Imagens atividade api/7. Post.png)

---

## 7. Lista atualizada após POST

**Método:** GET
**URL:** `/livros`

Resultado: 

![Lista atualizada](Imagens atividade api/8. Listar todos atualizado.png)

