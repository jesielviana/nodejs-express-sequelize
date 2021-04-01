# Projeto Node.j com Express, Sequelize, Jest e Postgres

by [@jesielviana](https://twitter.com/jesielviana)

### Estrutura do projeto 

```shell
src
  ├── app.js         app entry point
  ├── /api           controller layer: api routes
  ├── /config        config settings
  ├── /services      service layer: business logic
  ├── /models        data access layer: database models	
test       
  ├── /unit          unit test suites
  ├── /integration   test api routes
 ```

### Instalação e execução

1. Faça um clone desse repositório;
1. Entre na pasta cd nodejs-express-sequelize;
1. Rode yarn para instalar as dependências;
1. Altere as credencias dentro de /src/config/database.js;
1. Rode yarn sequelize db:create para criar o banco de dados;
1. Rode yarn dev para iniciar o servidor.
