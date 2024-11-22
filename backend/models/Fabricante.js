const mongoose = require('mongoose');

const FabricanteSchema = new mongoose.Schema({
  nombre: String,
  pais: String,
  fundacion: Number,
  web: String,
});

module.exports = mongoose.model('Fabricante', FabricanteSchema);
