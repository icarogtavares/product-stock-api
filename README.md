# Product Stock API
##### Icaro Tavares

This project is a boilerplate/setup of a Web API to be consumed by any Web Client like: Angular, React, Vue, etc... applications and can be integrated with any database.

- [Requirements](#requirements)
- [Installation](#installation)
- [Tech](#tech)
- [Features](#features)
- [Reference Links](#reference-links)

## Requirements
- [Node.js](https://nodejs.org/) >= 10.x

# Installation
Install the dependencies and devDependencies and start the server.
```sh
$ git clone https://github.com/icarotav/product-stock-api.git
$ cd product-stock-api
$ npm install
$ npm run dev
```

For production environments...
```sh
$ npm start
```

## Tech
To build this project I used most used techs, text editor and packages from [npm](https://www.npmjs.com/):

* [Node.js](https://nodejs.org/)
* [Visual Studio Code](https://code.visualstudio.com/)- Awesome text editor with this plugins installed: [DotENV](https://github.com/mikestead/vscode-dotenv), [ESLint](https://github.com/Microsoft/vscode-eslint), [GitLens](https://github.com/eamodio/vscode-gitlens), [Mocha Test Explorer](https://github.com/hbenl/vscode-mocha-test-adapter) (automatically installs [Test Explorer UI](https://github.com/hbenl/vscode-test-explorer)), [npm Intellisense](https://github.com/ChristianKohler/NpmIntellisense) and [vscode-icons](https://github.com/vscode-icons/vscode-icons).
* [Express](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for node.
* [PM2](http://pm2.keymetrics.io/) - Advanced, production process manager for Node.js
* [Sequelize](https://github.com/sequelize/sequelize) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
* [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai) - As test framework.
* [ESLint](https://github.com/eslint/eslint) - ESLint to padronize the javascript code.

## Features
- Modularized components
- Easy to create new middlewares and apply in the server.
- API handling all errors even if is not handled by developer like when omit .catch on Promises.
- Code padronized by ESLint

## Reference Links
- [Node.js Best Pratices](https://github.com/i0natan/nodebestpractices)
- [Construindo APIs Testáveis com Node.js](https://leanpub.com/construindo-apis-testaveis-com-nodejs/) by [Waldemar neto](https://github.com/waldemarnt)
- [Alura Courses](https://www.alura.com.br/)