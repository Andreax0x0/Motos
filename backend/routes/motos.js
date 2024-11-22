const express = require('express');
const Moto = require('../models/Moto');
const Fabricante = require('../models/Fabricante');
const router = express.Router();

// Obtener todas las motos
router.get('/', async (req, res) => {
  try {
    const motos = await Moto.find().populate('fabricante_id');
    res.json(motos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear una moto
router.post('/', async (req, res) => {
  try {
    const moto = new Moto(req.body);
    await moto.save();
    res.json(moto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Editar una moto
router.put('/motos/:id', async (req, res) => {
  const { id } = req.params;
  const { modelo, cilindrada, precio, fabricante } = req.body;

  try {
      const moto = await Moto.findByIdAndUpdate(id, { modelo, cilindrada, precio, fabricante }, { new: true });
      if (!moto) {
          return res.status(404).json({ mensaje: 'Moto no encontrada' });
      }
      res.json(moto);
  } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la moto' });
  }
});

// Eliminar una moto
router.delete('/motos/:id', async (req, res) => {
  const { id } = req.params;

  try {
      const moto = await Moto.findByIdAndDelete(id);
      if (!moto) {
          return res.status(404).json({ mensaje: 'Moto no encontrada' });
      }
      res.json({ mensaje: 'Moto eliminada con éxito' });
  } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la moto' });
  }
});

module.exports = router;
