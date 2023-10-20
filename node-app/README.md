## Description

Simple Node.js REST API service based on [Nest](https://github.com/nestjs/nest) framework.

## Prerequisites

- [Node.js](https://nodejs.org/en/download)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Installation

1. copy `.env.example` -> `.env` - setup env vars
2. Install dependencies and run docker containers

```
$ npm install
$ npm run docker-up
```

As a result you should have two running docker containers. One is for Mongo DB and another related to Node REST API.

Run `npm run docker-down` if you want to stop and remove containers

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```
