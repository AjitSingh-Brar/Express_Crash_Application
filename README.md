# Express_Crash_Application

Express is a server-side or backend server, which works with a NodeJS. It is used to handle request and response objects, and creating of API/Microservices. 

# Basic installation required

### `npm init` , to setup the package.json (Skip if you have this file)

### `npm i express`, to install the express, which will install node_modules, by default.

### `npm i -D nodemon`, to install the nodmeon package, which acts as a live server

To run the server,

### `node index.js`, where index.js is the file, where the server is defined
### `npm run start`, to start the server similarly like ### `node index.js`, but the script inside package.json needs to be changed as ### `script: { "start":"node index.js", "dev":"nodemon index.js"}` 

### `npm run dev`, will run your server, but it will act as a live server. So the problem of stopping and starting the server is solved.
 
