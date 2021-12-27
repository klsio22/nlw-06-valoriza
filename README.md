
<h1 align="center">
    NLW 6 - Valoriza
</h1>

## 🚀 Tecnologias

Node.js

Typescript

Express

Typeorm

PostgreSQL

JWT -> Autenticação com json web token



## 📜 Como executar

Clone o pojeto

```
    git clone 
```

Acesse a pasta do projeto e instale as dependências

```
    cd path-projeto

    yarn install
```

Configure as variaveis de ambiente com as crendências necessárias. Obs: O projeto conta com um arquivo de exemplo

Execute as migrations para a criação das tabelas do banco de dados

```
    yarn typeorm migration:run
```

Execute o servidor com:

```
    yarn dev
```

## 💻 Regras da aplicação

- Cadastro de usuário
  - [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail
  
  - [x] Não é permitido cadastrar usuário sem email usuário

- Cadastro da TAG
   - [x] Não é permitido cadastrar tag sem nome 
    
   - [x] Não é permitido cadastrar mais de uma tag com o mesmo nome

   - [x] Não é permitido cadastro por usuário que não sejam administradores

-  Cadastro de elogios
  
   - [ ] Não é permitido um usuário cadastrar um elogio para si
   
   - [ ] Não é permitido cadastrar elogios para usuários inválidos
    
   - [ ] o usuário precisa está autenticado na aplicação 



## License

[MIT](https://choosealicense.com/licenses/mit/)
