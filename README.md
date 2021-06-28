# Job test

Esse é o repositório backend do teste para Dev Jr proposto pela [Devnology](https://devnology.com.br/).

## 📕 Sumário
1. [Preview](https://github.com/GustavoGomesDias/<nome_repo>t#1--preview)
2. [O que eu aprendi de novo nesse projeto](https://github.com/GustavoGomesDias/<nome_repo>#2--o-que-eu-aprendi-de-novo-nesse-projeto)
3. [Tecnologias usadas](https://github.com/GustavoGomesDias/<nome_repo>#3--tecnologias-usadas)
4. [Para rodar](https://github.com/GustavoGomesDias/<nome_repo>#4--para-rodar-o-projeto)
5. [Documentação](https://github.com/GustavoGomesDias/<nome_repo>#4--documenta%C3%A7%C3%A3o)

## 1. 💻 Tecnologias usadas
* NodeJS;
* PostgreSQL;
* MySQL;
* Sequelize;
  * Sequelize-cli;
  * Pg
  * Pg HStore
* ESLint (AirBnB)
* Nodemon
* Cors e Helmet;

Existem dois bancos de dados por conta de eu ter começado usando o MySQL, mas tive que trocar para o Postgre para poder usar o Heroku;

## 4. 🎉 Para rodar o projeto LOCALMENTE
1. Clone o repositório e navegue até a pasta dele:

```
git clone https://github.com/GustavoGomesDias/test-001.git 
```

2. Instale todas es tec's usadas junto do Node JS:

```
npm install
```

3. Vá até a o arquivo database.cjs que se encontra em src/config/database.cjs e comente as seguintes linhas:

```js
  ...
   // connectionString: process.env.DATABASE_URL,
  ...
  dialectOptions: {
  ...
    // ssl: {
    //   require: true,
    //   rejectUnauthorized: false,
    // },
  ...
```
Isso é necessário pois localmente não se´ra possível trabalhar com SSL (um tipo de de segurança que realiza comunicações criptografadas entre um site e um navegador)

4. Crie um arquivo .env na raiz do projeto, adicione as informações seguindo o arquivo .env-example, que é um exemplo de como configurar as variáveis de ambiente e, para isso, você precisará criar um banco de dados usando o Postgre, mas é só criar o banco mesmo, a criação das tabelas e as regras de cada campo ficam para as migrations criar.

5. Rode as migrations:

```
npx sequelize db:migrate
```

6. Rode o aplicativo:

```
npm start
```
7. Você precisará de uma ferramente de teste de requisições como o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

8. Digite localhost:3001 e siga a documentação para usar a api.

A também uma forma de usar o MySQL como banco principal, basta voltar no último commit antes de eu fazer deploy no Heroke. Isso vai ter algumas diferenças, sendo a principal delas a do timezone.

O PostgreSQL tem configurações de timezone diferentes do MySQL, ele ao invés de converter para o fuso horário específicado no momento que lê as e retorna os dados, adiciona um 'Z' no final da informação, que para o Postgre é mesmo que está no fuso horário específicado. Exemplo:

O retorno do created_at dos dados da nossas tabelas ficam assim no Postgre: 2021-06-28T21:51:13.541Z, com um 'Z' no final, que significa que é exatamente 18:51:13 no fuso horário de São Paulo. No caso do MySQL, ele retornaria 18:51:13.

Por fim, infelizmente eu ainda não consegui fazer o Postgre retornar o valor exato assim como o MySQl, pois eu não nunca estudei muito o Postgre e pretendia trabalhar com MySQL, mas para fazer o deploy foi preciso mudar o banco. 😥

```
git reset --hard f36ecde953c21e02a8bf6dde601722692d4e4111
```
Com esse comando o branch vai direto para um commit antes de eu começar a configurar o Postgre e o deploy no Heroku.

## 5. 🚀 Para fazer deploy no Heroku
Motivo pelo qual eu escolhi o Heroku: Eu escolhi o Heroku por conta dele não precisar de cartão de crédito e por disponibilizar um banco de dados grátis, motivo pelo qual eu troquei o dialéto do banco também.

1. Crie uma conta no [Heroku](https://signup.heroku.com/)

2. Clique em **Create new app**:
![Create new App](https://drive.google.com/uc?export=view&id=1w3QrV2FKa-k-6dMr-aOZ7q1nw3j_lZqn/view?usp=sharing)

## 5. 📖 Documentação
### De qual entidade é a rota
#### Método
#### Rota
Descrição   | Valor
--------- | ------
Autenticação | Requerido
Parâmetros | Não requerido
Status code | 200 (OK)

---
#### Exemplo

### Users
#### GET
##### /users
Descrição   | Valor
--------- | ------
Autenticação | Requerido
Parâmetros | Não requerido
Status code | 200 (OK)

##### /users/id
Descrição   | Valor
--------- | ------
Autenticação | Requerido
Parâmetros | Id do usuário
Status code | 200 (OK)

#### POST
##### /users
Descrição   | Valor
--------- | ------
Autenticação | Não Requerido
Parâmetros | Não Requerido
Status code | 200 (OK) ou 400 (Bad Request)

#### PUT
##### /users
Descrição   | Valor
--------- | ------
Autenticação | Requerido
Parâmetros | Não Requerido
Status code | 200 (OK) ou 400 (Bad Request)

#### DELETE
##### /users
Descrição   | Valor
--------- | ------
Autenticação | Requerido
Parâmetros | Não Requerido
Status code | 200 (OK) ou 400 (Bad Request)


## Autor
<table>
  <tr>
    <td align="center"><a href="https://github.com/GustavoGomesDias"><img src="https://github.com/GustavoGomesDias.png" width="100px;" alt="Profile"/><br /><sub><b>Gustavo</b></sub></a><br /><a href="https://github.com/GustavoGomesDias" title="Code">😎</a></td>
  <tr>
</table>
