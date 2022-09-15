# **TODO-LIST**

## Inicialização do projeto - Scripts

<h3>Dentro da pasta "TODO-LIST" - RUN </h4>  <br>
 
> - **`npm install`** - Para instalar todas dependências da aplicação caso você clonou 
> o projeto do GitHub.
>
> - **`npm run dev`** - Para rodar o projeto que abrirá a página no navegador pela rota 
> **`http://localhost:3000`.**

O projeto tem as principais funcionalidades de um CRUD. É possivel, criar, editar, deletar tarefa e marcar tarefa como: tarefa realizada.

Essas tarefas são salvas em um banco de dados NoSQL na nuvem, usando o Mongo DB Atlas.

A página WEB foi criada com um arquivo ***`.ejs`***, isso porque nesse tipo de arquivo podemos colocar JavaScript dentro do HTML. Isso é útil para mostrar variáveis ao invés de textos estáticos, deixando o site dinâmico.

O projeto foi desenvolvido de uma forma com que os componentes fiquem separados com suas respectivas responsabilidades.

Criei um arquivo de rotas separadas para cada ação que o usuário faça na aplicação, rotas para: (Criar tarefa, Editar tarefa, Deletar tarefa, Listar todas as tarefas, Marcar tarefa como concluída).

Essas funções estão todas no **`TaksController.js`** na pasta controller, onde cada função faz referência ao modelo de tarefa que está no arquivo **`Task.js`** na pasta models. 

A conexão com o banco de dados está sendo feita no arquivo **`db.js`** na pasta database, que é feito de uma forma bem simples.

> - Importando o mongoose no arquivo.
> 
> - Criando uma arrow function e chamando o método do mongoose **`.connect`**.
> 
> - Nesse método passamos a URI do banco de dados
> 
> - Usei o **`.then`** para se for conectado ao banco de dados, retornar no console uma mensagem de confirmação
> 
> - Se não funcionar a conexão com o banco, temos um **`.catch`** para retornar o possível erro.