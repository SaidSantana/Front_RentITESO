const express = require('express');


const port = process.env.PORT || 3000;
const app = express();

app.listen(port,()=>{
    console.log('App running on port '+port);
});

app.get('/',(req, res) => {
    res.send('API para RentITESO');
});

app.get('*', (req, res) => {
    res.send('Pagina no encontrada');
})

