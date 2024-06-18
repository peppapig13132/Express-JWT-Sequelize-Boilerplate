# Express.js Backend Boilerplate

![Node.js](https://img.shields.io/badge/node.js-20.12.2-blue)
![npm](https://img.shields.io/badge/npm-10.6.0-blue)
![Express.js](https://img.shields.io/badge/express.js-4.19.2-blue)
![Sequelize](https://img.shields.io/badge/sequelize-6.37.3-blue)

## Features

- [x] TypeScript configured
- [x] JWT based authentication and middleware
- [x] User signup and login
- [x] [Sequelize ORM](https://sequelize.org/) for database interaction


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server in development mode.
Open http://localhost:8000 to in your browser, you will see `Express.js server is running!`.

### `npm run start:dev`

Runs the server in development mode with hotload. Hotload configured by [`nodemon`](https://nodemon.io/)

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run serve:dev`, `npm run serve:prod`

After build the project, Runs the development/production server. Entry file is `dist/index.js`.


### Project Structure

```
root
|
|- dist/
|
|- node_modules/
|
|- src/
|  |- config/
|  |  |- database.ts
|  |
|  |- controller/
|  |  |- auth.controller.ts
|  |
|  |- interfaces/
|  |  |- interfaces.ts
|  |
|  |- middleware/
|  |  |- auth.middleware.ts
|  |
|  |- model/
|  |  |- user.model.ts
|  |
|  |- routes/
|  |  |- auth.route.ts
|  |  |- index.ts
|  |
|  |- types/
|  |
|  |- index.ts
|
|- static/
|
|- .env
|- .env.example
|- .gitignore
|- nodemon.json
|- package-lock.json
|- package.json
|- README.md
|- tsconfig.json
```


## Frontend

If you use SPA for your frontend, copy compiled result into `static` folder.


## Database

Set environment variable `DB_SYNC=true` to synchronize models and database. Otherwise, set it as `false`. Learn more about model synchronization [here](https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization). Since Sequelize has various versions, you can check Sequelize official site [here](https://sequelize.org/).
