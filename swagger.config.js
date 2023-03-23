const port = process.env.PORT || 3000;

module.exports = {
    swaggerDefinition: {
        swagger: '2.0',
        info: {
            title: 'API de rentITESO',
            description: 'API para el control de entidades en rentITESO',
            version: '1.0.0',
            server: [ 'http://localhost:' + port]
        }
    },
    apis: ['src/routes/**/*.js']
}