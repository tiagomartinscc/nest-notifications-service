<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Description

Microserviço de notificações em Nest.js com uso do Prisma e Jest para testes integrados.

## Installation

```bash
$ npm install
```

## Installation Dev

CLI do prisma para executar migrations etc...
```bash
$ npm i -D prisma
```

Prisma client - conexão com o banco de dados
```bash
$ npm i -@prisma/client
```

Configuração do prisma
```bash
$ npx prisma init --datasource-provider SQLite
```

Criando a migrate do prisma
```bash
$ npx prisma migrate dev
```

Visualizar base de dados
```bash
$ npx prisma studio
```
Validadores e transformadores para validação e transformação de dados
```bash
$ npm i class-validator class-transformer
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
