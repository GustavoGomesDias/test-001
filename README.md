# Job test 👍

Esse é o repositório backend do teste para Dev Jr proposto pela [Devnology](https://devnology.com.br/).

Para entender mais sobre API, entre na documentação dela, que foi gerado usando o [Swagger](https://app.swaggerhub.com/search)

➡ [Documentação online](https://gustavogomesdias.github.io/test-001/) que foi gerada pelo Swagger e levemente modificada por mim (visualmente)

➡ [JSON](https://github.com/GustavoGomesDias/test-001/blob/main/documentaion.json) com a documentação

## 📕 Sumário
1. [Tecnologias usadadas](https://github.com/GustavoGomesDias/test-001#1--tecnologias-usadas)
2. [Para rodar o projeto LOCALMENTE](https://github.com/GustavoGomesDias/test-001#2--para-rodar-o-projeto-localmente)
3. [Para fazer deploy no Heroku](https://github.com/GustavoGomesDias/test-001#3--para-fazer-deploy-no-heroku)
4. [Configurar variáveis de ambiente](https://github.com/GustavoGomesDias/test-001#4-vari%C3%A1veis-de-ambiente-necess%C3%A1rio-no-heroku-tamb%C3%A9m)

## 1. 💻 Tecnologias usadas
* NodeJS;
* PostgreSQL;
* MySQL;
* Sequelize;
  * Sequelize-cli;
  * Pg
  * Pg HStore
* Swagger
* ESLint (AirBnB)
* Nodemon
* Cors e Helmet;

Existem dois bancos de dados por conta de eu ter começado usando o MySQL, mas tive que trocar para o Postgre para poder usar o Heroku;

## 2. 🎉 Para rodar o projeto LOCALMENTE
1. Clone o repositório e navegue até a pasta dele:

    ```
    git clone https://github.com/GustavoGomesDias/test-001.git 
    ```

2. Instale todas es tec's usadas junto do Node JS:

    ```
    npm install
    ```

3. Vá até a o arquivo database.cjs que se encontra em src/config/database.cjs e comente as seguintes linhas (faça isso só para rodar localmente:

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

---
A também uma forma de usar o MySQL como banco principal, basta voltar no último commit antes de eu fazer deploy no Heroke. Isso vai ter algumas diferenças, sendo a principal delas a do timezone.

O PostgreSQL tem configurações de timezone diferentes do MySQL, ele ao invés de converter para o fuso horário específicado no momento que lê as e retorna os dados, adiciona um 'Z' no final da informação, que para o Postgre é mesmo que está no fuso horário específicado. Exemplo:

O retorno do created_at dos dados da nossas tabelas ficam assim no Postgre: 2021-06-28T21:51:13.541Z, com um 'Z' no final, que significa que é exatamente 18:51:13 no fuso horário de São Paulo. No caso do MySQL, ele retornaria 18:51:13.

Por fim, infelizmente eu ainda não consegui fazer o Postgre retornar o valor exato assim como o MySQl, pois eu não nunca estudei muito o Postgre e pretendia trabalhar com MySQL, mas para fazer o deploy foi preciso mudar o banco. 😥

    ```
    git reset --hard f36ecde953c21e02a8bf6dde601722692d4e4111
    // Caso você tenha queira commitar em um repo seu, execute o comando abaixo para forçar o push
    git push -f origin main
    ```
Com esse comando o branch vai direto para um commit antes de eu começar a configurar o Postgre e o deploy no Heroku.

---

## 3. 🚀 Para fazer deploy no Heroku
Motivo pelo qual eu escolhi o Heroku: Eu escolhi o Heroku por conta dele não precisar de cartão de crédito e por disponibilizar um banco de dados grátis, motivo pelo qual eu troquei o dialéto do banco também.

#### OBS.: Não execute o passo 3 da seção [Para rodar LOCALMENTE](url)

1. Crie uma conta no [Heroku](https://signup.heroku.com/);
2. Clique em **Create new app**:
  <img src="https://drive.google.com/uc?export=view&id=1w3QrV2FKa-k-6dMr-aOZ7q1nw3j_lZqn" width="600px;" alt="Profile"/> 
3. Adicione as configurações de sua preferência:
  <img src="https://drive.google.com/uc?export=view&id=1LC6MRjHTSIkbDSuN-73s3dsXfWlz8dud" width="600px;" alt="Profile"/> 
4. Escolha como você vai fazer o depoy:

  Existem 3 opções, mas eu conheço apenas 2: Via CLI do Heroku e Github. Via Github, é preciso apenas linkar sua conta do Github com a Heroku e em seguida selecionar o repo. A opção que eu usei foi a do CLI, que também utiliza o git e acaba ficando bem fácil:
  <img src="https://drive.google.com/uc?export=view&id=1jt9-l6t-DLUdfIUoZxqcGa7B8ao4yrGr" width="800px;" alt="Profile"/> 

5. [Faça download Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli);
6. Procfile
  É preciso configurar um arquivo que o Heroku utiliza para executar comando como o de startar a aplicação (para esse repo, isso não é necessário pois já existe um Procfile configurado);
      - Na raiz, crie um arquivo chamado Procfile sem nenhuma extensão;
      - Escreva ```web: npm start``` dentro dele, para que ele saiba qual comando executar na hora de startar a aplicação.
      - [Para saber mais sobre o uso do Procfile em apps node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile)
7. No ```package.json``` também é necessário fazer algumas configurações:
    - Caso esteja usando ES Module (ou seja, import/export):
      ```json
      {
        ...
        "type": "module",
        ...
      }
      ```
    - Especificar as as versões das tecnologias como node e npm em que você gostaria que o projeto estivesse:

      ```json
      {
        ...
        "type": "module",
        "engines": {
            "node": "16.x"
          },
        ...
      }
      ```
    - Crie o script de ```start``` do app: 

      ```json
      {
        ...
        "type": "module",
        "engines": {
            "node": "16.x"
          },
        "scripts": {
          "start": "node ./path"
          ...
        }
        ...
      }
      ```
8. Pelo terminal, navegue até o projeto.
9. Inicie o git no projeto:
    ```
    git init
    ```
#### (Caso já tenha um git iniciado no repositório, faça apenas o passo 10, não é necessário realizar o passo 11, só para alterações futuras.)
10. Crie uma conexão entre o Heroku e o repositório:
    ```
    heroku git:remote -a <nome_projeto>
    ```
11. Faça o deploy (commit as alterações para o Heroku):
    ```git
    git add .
    git commit -m "Fazendo um deploy rapidão"
    git push heroku master
    ```
12. Inicializando pelo menos uma instância do app:
    ```
    heroku ps:scale web=1
    ```
      Esse comando faz com que ao rodar o ```npm start```, o app seja executado em um único web dyno, que segundo a própria Heroku, pode ser descrito como um container leve que executa o script em wem no ```Procfile```.

13. Para desligar o app, basta setar os dynos usados para 0:
    ```
    heroku ps:scale web=0
    ```
    Mas isso não é muito necessário, uma vez que o próprio Heroku verifica quando os dynos estão ociosos e os "coloca para dormir" (pelo menos é assim para os dynos gratuitos, nunca usei nada pago deles).
14. Abra o app e siga a docmuntação:
    ```
    heroku open
    ```
15. Agora, para ver os logs e ver se ocorreu algum erro, execute o comando:
    ```
    heroku logs --tail
    ```
16. Depois que você tiver certeza que o deploy ocorreu com sucesso, é hora de gerar as migrations no banco de dados do Heroku:

    - Na pasta da API, entre no Heroku CLI:
        ```
        heroku run bash
        ```
    - Agora rode as migrartions: 
        ```
        npx sequelize-cli db:migrate
        ```
    - Repare que usamos ```sequelize-cli```, pois usando apenas o sequelize, o Heroku tenta rodar o Sequelize de fato, já que o sequelize-cli está como devDependence e na hora do deploy acaba sendo desinstalado. Isso também vai fazer o Heroku baixar o sequelize-cli momentaneamente do seu cache.
    - Eu, na hora de rodar as migrations no banco de dados, acabei esbarrando em um erro de SSL, caso aconteça o mesmo con você, execute o comando:
        ```
        PGSSLMODE=no-verify npx sequelize-cli --url $DATABASE_URL db:migrate
        ```

17. Existem mais funcionalidades, consute o [guia do Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) para mais.

## 4.  Variáveis de Ambiente (necessário no Heroku também)
1. Clique no seu projeto na dashboard do Heroku e vá até Settings.
2. Em Settigns, vá até Config Vars e clique em Reveal Config Vars:
<img src="https://drive.google.com/uc?export=view&id=1bCYfm4BwPrn-wW2HkX4Ss924XSAi0Y99" width="600px;" alt="Profile"/>
3. Adione as variáveis. Para o essa API, você vai precisar das mesmas variáveis que tão no .env-example:

  - ```DATABASE``` => Nome do banco de dados (localmente, é o nome do banco que você criou, no Heroku ele irá fornecer se você usar o banco grátis que ele - disponibiliza)
  - ```DATABASE_HOST``` => Host do banco de dados (localmente é o localhost, no Heroku ele irá fornecer se você usar o banco grátis que ele disponibiliza)
  - ```DATABASE_USERNAME``` => Nome do usuário (localmente, depende do dialéto de SQL que você está usando, para o MySQL é root, para o PostgreSQL é postgres)
  - ```DATABASE_PASSWORD``` => Senha do banco de dados (localmente é você quem define, no Heroku ele irá fornecer se você usar o banco grátis que ele disponibiliza)
  - ```DATABASE_URL``` => Isso é só para uso de SSL, logo, só serve para o Heroku, localmente não pe necessário.
  - ```DATABASE_PORT``` => Cada dialéto tem uma porta específica onde ele é executado.


## Autor
<table>
  <tr>
    <td align="center"><a href="https://github.com/GustavoGomesDias"><img src="https://github.com/GustavoGomesDias.png" width="100px;" alt="Profile"/><br /><sub><b>Gustavo</b></sub></a><br /><a href="https://github.com/GustavoGomesDias" title="Code">😎</a></td>
  <tr>
</table>
