# Project Overview

Dashboard with side menu and content section, has two routes `/dashboard` and `/route`, and using an api call to get user deatils<br />
The Dashboard use react and typescript with scss as preprocessor css

# Demo link

access the project  <a href="https://task-dashboard-ddc40.web.app/">here</a>
# Packages
<ul>
<li><b>Redux-toolkit:</b> includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic and has built in RTK query</li>
<li><b>Redux-persist:</b> persist the store data to the localstorage</li>
<li><b>Ant:</b> styling framework</li>
<li><b>sass:</b> preprocessor css</li>
<li><b>env-cmd:</b> manage environmental variables</li>
<li><b>react-router-dom</b></li>
</ul>

# Code styling

The solution use eslint to make sure to follow the best practice across the app, with <code>eslint-config-airbnb</code> and extra custom rules in <code>.eslintrc.json</code>

# Installation and Setup Instructions

Clone down this repository. You will need `node` and `yarn` installed globally on your machine.  

Installation:

`yarn install`

To Run Test Suite:  

`yarn test` 

To Start Server:

`yarn start` 

To Visit App:

`localhost:3000`  
# Available Scripts

In the project directory, you can run:

### `yarn start` - start the app with .env file
### `yarn run test` - run unit testing

### `yarn run start:test` - start the app with .env.test file
### `yarn run start:prod` - start the app with .env.production file
### `yarn run build` - build the project with .env.production file
### `yarn run build:test` - the build the project with .env.test file

## Author
Sherif Mounir

# License
MIT license @<a href="www.find-sherif.com">author</a>

