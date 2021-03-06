<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>


## Description

A simple create-read-update-delete (CRUD) RESTful API application using the [NestJs](https://nestjs.com) framework.

## Installation

```bash
$ npm install
```
## Setup
* In `src/`, create a `config/` directory and in it, a `.ts` file, for storing your environment variables
* In the file, write 
```
export default {
  mongoURI: 'MONGO_URI',
};
```
where _MONGO_URI_ is your MongoDB atlas connection URI

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

## License

[MIT licensed](LICENSE).
