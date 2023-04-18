const express = require('express');
const router = require('./src/routes')

//Database connection with mongoose
const mongoose = require('mongoose');

require('dotenv').config(); //Requires de .env file

//SwaggerConfig
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./swagger.config');

const port = process.env.PORT || 3000;
const app = express();

const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl, {useUnifiedTopology: true}).then(() => {
    console.log('Successfully connected to DataBase')
    app.listen(port, () => {
        console.log('app is running in port '+port);
    });
}).catch(err => console.log("Couldn't connect to Database"));

const swaggerDocs = swaggerJsdoc(swaggerConfig);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('',router);

app.get('/',(req, res) => {
    res.send('API para RentITESO');
});

app.get('*', (req, res) => {
    res.send('Pagina no encontrada');
})

