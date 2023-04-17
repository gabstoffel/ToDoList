# ToDo List

<br>
<div align="center">
   Projeto de uma lista de tarefas
</div>
<br>
<br>
<p align="center">
  <a href="#clipboard-sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed-book-licença">Licença</a>
</p>

## :clipboard: Sobre o Projeto:

<br>
<p text-align="justify">   

        Nova versão de um projeto já existente de uma ToDo List. Assim, foram acrescentadas diversas
        funcionalidades e integrações. O projeto agora possui integração com o banco de dados MongoDB
        e funcionalidades como login e registro de usuário, usando a tecnologia JWT. 
  
<br>
</p>
<br>

## :computer: Tecnologias utilizadas:
<br>
O projeto foi desenvolvido utilizando as seguintes tecnologias:
<br><br>

- Consumo e construção de API's;
- Métodos HTTP:
   - Usados na contrução das rotas tanto da parte de login / registro de usuários, como também na parte de adiocionar e deletar tasks na ToDo LIST;
- Middleware:
   - Usados, por exemplo, na autenticação daquilo que é passado nas requisições antes se ser gravado no banco.
- Express:
   - A tecnologia Express JS foi utilizada na construção das routes;
- JWT:
   - A tecnologia JSON WEB TOKEN foi usada na autenticação e registro dos usuários no banco de dados;
- Cookies:
   - A partir da autenticação do usuário, a aplicação faz uso do registro do token jwt do usuário nos cookies do seu navegador, para manter a sessão, com um tempo de expiração de 1 hora. 
- Mongoose:
   - O framework mongoose foi utilizado na construção dos Schemas para registro no banco, assim como na própria conexão da aplicação Node JS como Banco de Dados MongoDB;
- BCryptjs;
 

<div align="center">

# TO DO LIST
   <br>
   Register Page
   <br><br>
   <img src="https://user-images.githubusercontent.com/97189415/232350479-251ee6f4-5257-4e90-9cee-31acc6236115.png">
   <br><br>
   Login Page
   <br><br>
   <img src="https://user-images.githubusercontent.com/97189415/232350477-7ea30c83-2dfa-4412-a079-d6d03e177c09.png">
   <br><br>
   Adding Tasks
   <br><br>
   <img src="https://user-images.githubusercontent.com/97189415/232350475-a3db3d5a-5f9a-42b7-9091-215f2dfb8cd3.png">
   <br><br>
   Current Tasks
   <br><br>
   <img src="https://user-images.githubusercontent.com/97189415/232350471-59d86d83-09af-47dd-86a4-4780b83abeb7.png">
   <br><br>
   Profile
   <br><br>
   <img src="https://user-images.githubusercontent.com/97189415/232350480-f21afb9e-59e0-497e-ab01-630a913cd659.png">
   <br><br>
</div>

## :closed_book: Licença:

Esse projeto está sob a licença MIT.
