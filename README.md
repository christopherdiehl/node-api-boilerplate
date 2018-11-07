<h1>DEPRECATED</h1>

<h1>Node-API-Boilerplate</h1>
<p>A Node REST API Boilerplate for <b>small to medium</b> sized projects.</p>

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

</div>

<h3>Setup</h3>
1. `git clone git@github.com:christopherdiehl/node-api-boilerplate.git`
1. `npm install`
1. `Install PostgreSQL and update config.json accordingly`
1. `Install sequelize-cli and run sequelize db:migrate`
1. `npm run start`
1. *navigate to localhost:8080/api to confirm that the boilerplate is running*

<p> Authentication done with JWT <br /> Nodemailer used to send reset token </p>
<p>To test authenticated routes in postman: set Header Key = Authorization and Header value = "Bearer $[key]"</p>
