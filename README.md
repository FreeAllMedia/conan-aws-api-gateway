# Conan-aws-api-gateway.js [![npm version](https://img.shields.io/npm/v/conan-aws-api-gateway.svg)](https://www.npmjs.com/package/conan-aws-api-gateway) [![license type](https://img.shields.io/npm/l/conan-aws-api-gateway.svg)](https://github.com/FreeAllMedia/conan-aws-api-gateway.git/blob/master/LICENSE) [![npm downloads](https://img.shields.io/npm/dm/conan-aws-api-gateway.svg)](https://www.npmjs.com/package/conan-aws-api-gateway) ![ECMAScript 6 & 5](https://img.shields.io/badge/ECMAScript-6%20/%205-red.svg)

Conan: The Deployer plugin for the Api Gateway service of the AWS provider.

```javascript
import conan from "conan";
import ConanAwsApiGatewayPlugin from "conan-aws-api-gateway";

conan = new Conan();
conan.use(ConanAwsApiGatewayPlugin);
```

# Quality and Compatibility

[![Build Status](https://travis-ci.org/FreeAllMedia/conan-aws-api-gateway.png?branch=master)](https://travis-ci.org/FreeAllMedia/conan-aws-api-gateway) [![Coverage Status](https://coveralls.io/repos/FreeAllMedia/conan-aws-api-gateway/badge.svg)](https://coveralls.io/r/FreeAllMedia/conan-aws-api-gateway)  [![bitHound Score](https://www.bithound.io/github/FreeAllMedia/conan-aws-api-gateway/badges/score.svg)](https://www.bithound.io/github/FreeAllMedia/conan-aws-api-gateway)  [![Dependency Status](https://david-dm.org/FreeAllMedia/conan-aws-api-gateway.png?theme=shields.io)](https://david-dm.org/FreeAllMedia/conan-aws-api-gateway?theme=shields.io) [![Dev Dependency Status](https://david-dm.org/FreeAllMedia/conan-aws-api-gateway/dev-status.svg)](https://david-dm.org/FreeAllMedia/conan-aws-api-gateway?theme=shields.io#info=devDependencies)

*Every build and release is automatically tested on the following platforms:*

![node 0.12.x](https://img.shields.io/badge/node-0.12.x-brightgreen.svg) ![node 0.11.x](https://img.shields.io/badge/node-0.11.x-brightgreen.svg) ![node 0.10.x](https://img.shields.io/badge/node-0.10.x-brightgreen.svg)
![iojs 2.x.x](https://img.shields.io/badge/iojs-2.x.x-brightgreen.svg) ![iojs 1.x.x](https://img.shields.io/badge/iojs-1.x.x-brightgreen.svg)



*If your platform is not listed above, you can test your local environment for compatibility by copying and pasting the following commands into your terminal:*

```
npm install conan-aws-api-gateway
cd node_modules/conan-aws-api-gateway
gulp test
```

# Installation

Copy and paste the following command into your terminal to install conan-aws-api-gateway:

```
npm install conan-aws-api-gateway --save-dev
```

# Getting Started


# How to Contribute

See something that could use improvement? Have a great feature idea? We listen!

You can submit your ideas through our [issues system](https://github.com/FreeAllMedia/conan-aws-api-gateway/issues), or make the modifications yourself and submit them to us in the form of a [GitHub pull request](https://help.github.com/articles/using-pull-requests/).

We always aim to be friendly and helpful.

## Running Tests

It's easy to run the test suite locally, and *highly recommended* if you're using Conan-aws-api-gateway.js on a platform we aren't automatically testing for.

```
npm test
```
