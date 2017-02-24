<h1>Node-API-Boilerplate</h1>
<p>A Node REST API Boilerplate for <b>small to medium</b> sized projects.</p>
<p>Perfect for hackathons to small business projects </p>

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/CHRISTOPHERDIEHL/node-api-boilerplate">
    <img src="https://david-dm.org/CHRISTOPHERDIEHL/node-api-boilerplate.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/CHRISTOPHERDIEHL/node-api-boilerplate#info=devDependencies">
    <img src="https://david-dm.org/CHRISTOPHERDIEHL/node-api-boilerplate/dev-status.svg" alt="devDependency Status" />
  </a>
  <!--Build Status -->
  <a href="https://travis-ci.org/christopherdiehl/node-api-boilerplate/branches">
    <img src="https://travis-ci.org/christopherdiehl/node-api-boilerplate.svg?branch=master" alt="travis build status" />
  </a>
  <!--Test Coverage -->
  <a href='https://coveralls.io/github/christopherdiehl/node-api-boilerplate?branch=master'><img src='https://coveralls.io/repos/github/christopherdiehl/node-api-boilerplate/badge.svg?branch=master' alt='Coverage Status' /></a>

</div>

<h3>Setup</h3>
1. `git clone git@github.com:christopherdiehl/node-api-boilerplate.git`
1. `npm install`
1. `Install PostgreSQL and update config.json accordingly`
1. `Install sequelize-cli and run sequelize db:migrate`
1. `npm run start`
1. *navigate to localhost:8080/api to confirm that the boilerplate is running*

<p> Authentication done with JWT <br /> Please update the config file located in <b>config/config.json</b> </p>
<p> By default this boilerplate uses nodemailer to send the reset token </p>
<p>To test authenticated routes in postman: set Header Key = Authorization and Header value = "Bearer $[key]"</p>
<h4>This repo is not finished and is subject to major change. Please do not use until v1 is released</h4>
