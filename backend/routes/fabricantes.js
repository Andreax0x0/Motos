const express = require('express');
const Fabricante = require('../models/Fabricante');
const router = express.Router();

// Obtener todos los fabricantes
router.get('/', async (req, res) => {
  try {
    const fabricantes = await Fabricante.find();
    res.json(fabricantes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un fabricante
router.post('/', async (req, res) => {
  try {
    const fabricante = new Fabricante(req.body);
    await fabricante.save();
    res.json(fabricante);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Editar un fabricante
router.put('/fabricantes/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, pais, fundacion, sitioWeb } = req.body;

  try {
      const fabricante = await Fabricante.findByIdAndUpdate(id, { nombre, pais, fundacion, sitioWeb }, { new: true });
      if (!fabricante) {
          return res.status(404).json({ mensaje: 'Fabricante no encontrado' });
      }
      res.json(fabricante);
  } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el fabricante' });
  }
});

// Eliminar un fabricante
router.delete('/fabricantes/:id', async (req, res) => {
  const { id } = req.params;

  try {
      const fabricante = await Fabricante.findByIdAndDelete(id);
      if (!fabricante) {
          return res.status(404).json({ mensaje: 'Fabricante no encontrado' });
      }
      res.json({ mensaje: 'Fabricante eliminado con éxito' });
  } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el fabricante' });
  }
});

module.exports = router;
