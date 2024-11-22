const mongoose = require('mongoose');

const MotoSchema = new mongoose.Schema({
  nombre: String,
  fabricante_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Fabricante' },
  categoria: String,
  precio: Number,
  cilindraje: Number,
  imagen: String,
});

module.exports = mongoose.model('Moto', MotoSchema);
