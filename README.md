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

### API 

- Cadastro de usuário: `http://localhost:3000/api/auth/signup`
- Login: `http://localhost:3000/api/auth/signin`
- Cursos (consulta e cadastro): `http://localhost:3000/api/courses`
- Usuários (consulta): `http://localhost:3000/api/users`
- Estudantes (consulta e cadastro): `http://localhost:3000/api/students`


### Referências utilizadas para construção do projeto

* [https://leanpub.com/construindo-apis-testaveis-com-nodejs](https://leanpub.com/construindo-apis-testaveis-com-nodejs/)
* [http://expressjs.com/pt-br/](http://expressjs.com/pt-br/)
* [Introduction to Express, a practical tutorial](https://flaviocopes.com/express/)
* [Bulletproof node.js project architecture](https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf)
* [Node.js Architecture and 12 Best Practices for Node.js Development | Scout APM Blog](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development)
* [Melhores Práticas em Node.js](https://github.com/goldbergyoni/nodebestpractices/blob/master/README.brazilian-portuguese.md)
* [https://jestjs.io/pt-BR/](https://jestjs.io/pt-BR/)

---
**Link do repositório de um exemplo de front-end que integra com esta API:** [https://github.com/jesielviana/frontend-ifpi-curso-nodejs](https://github.com/jesielviana/frontend-ifpi-curso-nodejs)
