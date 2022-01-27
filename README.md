# Node.js project with Express, Sequelize, Jest and Postgres

by [@jesielviana](https://twitter.com/jesielviana)

### Directory structure

```shell
src
  ├── app.js         app entry point
  ├── /routes        controller layer: api routes
  ├── /config        config settings
  ├── /services      service layer: business logic
  ├── /models        data access layer: database models	
test       
  ├── /unit          unit test suites
  ├── /integration   test api routes
 ```

### Installation and execution

1. Clone of this repository: `git clone https://github.com/jesielviana/nodejs-express-sequelize.git`;
1. Enter the nodejs-express-sequelize folder: `cd nodejs-express-sequelize`;
1. Run yarn to install dependencies: `yarn`;
1. Config database credentials inside `/src/config/database.js`;
1. Create database, run `yarn sequelize db:create to create the database`;
1. Run `yarn dev` to start the server.

### API 

- Sign-up: `http://localhost:3000/api/auth/signup`
- Login: `http://localhost:3000/api/auth/signin`
- Courses: `http://localhost:3000/api/courses`
- Users: `http://localhost:3000/api/users`
- Students: `http://localhost:3000/api/students`


### References

* [https://leanpub.com/construindo-apis-testaveis-com-nodejs](https://leanpub.com/construindo-apis-testaveis-com-nodejs/)
* [http://expressjs.com/pt-br/](http://expressjs.com/pt-br/)
* [Introduction to Express, a practical tutorial](https://flaviocopes.com/express/)
* [Bulletproof node.js project architecture](https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf)
* [Node.js Architecture and 12 Best Practices for Node.js Development | Scout APM Blog](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development)
* [Melhores Práticas em Node.js](https://github.com/goldbergyoni/nodebestpractices/blob/master/README.brazilian-portuguese.md)
* [https://jestjs.io/pt-BR/](https://jestjs.io/pt-BR/)

---
**Repository link of a frontend example that integrates with this API:** [https://github.com/jesielviana/frontend-ifpi-curso-nodejs](https://github.com/jesielviana/frontend-ifpi-curso-nodejs)
