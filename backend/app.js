const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const fabricantesRoutes = require('./routes/fabricantes');
const motosRoutes = require('./routes/motos');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/fabricantes', fabricantesRoutes);
app.use('/api/motos', motosRoutes);

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch((err) => console.log('Error de conexión a MongoDB: ', err));

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
