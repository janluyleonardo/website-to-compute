const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('.')); // Sirve archivos estáticos desde la raíz

let comentarios = [];

app.post('/comentarios', (req, res) => {
    const { nombre, comentario } = req.body;
    comentarios.push({ nombre, comentario });
    res.status(200).send('Comentario guardado');
});

app.get('/comentarios', (req, res) => {
    res.json(comentarios);
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
