// importar express
const express = require('express');

//instancia o express na variavel app
const app = express();

//definir porta do servidor
const PORT = 3004

app.get('/api/teste', (request, response) => {
    response.send('txtinho');
})

//test servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`))