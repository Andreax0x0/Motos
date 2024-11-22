import React, { useEffect, useState } from 'react';
import { getMotos, createMoto, updateMoto, deleteMoto, getFabricantes } from '../api';

const Motos = () => {
  const [motos, setMotos] = useState([]);
  const [fabricantes, setFabricantes] = useState([]);
  const [nuevaMoto, setNuevaMoto] = useState({ nombre: '', fabricante_id: '', categoria: '', precio: '', cilindraje: '', imagen: '' });
  const [editarMoto, setEditarMoto] = useState(null); // Moto que se está editando

  useEffect(() => {
    getMotos()
      .then(response => setMotos(response.data))
      .catch(error => console.error(error));

    getFabricantes()
      .then(response => setFabricantes(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setNuevaMoto({ ...nuevaMoto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editarMoto) {
      // Actualizar moto
      updateMoto(editarMoto._id, nuevaMoto)
        .then(() => {
          setMotos(motos.map(m => (m._id === editarMoto._id ? { ...m, ...nuevaMoto } : m)));
          setEditarMoto(null);
          setNuevaMoto({ nombre: '', fabricante_id: '', categoria: '', precio: '', cilindraje: '', imagen: '' });
        })
        .catch(error => console.error(error));
    } else {
      // Crear moto
      createMoto(nuevaMoto)
        .then(response => setMotos([...motos, response.data]))
        .catch(error => console.error(error));
    }
  };

  const handleEdit = (moto) => {
    setEditarMoto(moto);
    setNuevaMoto({
      nombre: moto.nombre,
      fabricante_id: moto.fabricante_id?._id || '',
      categoria: moto.categoria,
      precio: moto.precio,
      cilindraje: moto.cilindraje,
      imagen: moto.imagen
    });
  };

  const handleDelete = (id) => {
    deleteMoto(id)
      .then(() => setMotos(motos.filter(m => m._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h2>Motos</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="nombre" placeholder="Nombre" value={nuevaMoto.nombre} onChange={handleChange} />
        <select name="fabricante_id" value={nuevaMoto.fabricante_id} onChange={handleChange}>
          <option value="">Selecciona un fabricante</option>
          {fabricantes.map(f => (
            <option key={f._id} value={f._id}>{f.nombre}</option>
          ))}
        </select>
        <input type="text" name="categoria" placeholder="Categoría" value={nuevaMoto.categoria} onChange={handleChange} />
        <input type="number" name="precio" placeholder="Precio" value={nuevaMoto.precio} onChange={handleChange} />
        <input type="number" name="cilindraje" placeholder="Cilindraje" value={nuevaMoto.cilindraje} onChange={handleChange} />
        <input type="text" name="imagen" placeholder="URL Imagen" value={nuevaMoto.imagen} onChange={handleChange} />
        <button type="submit">{editarMoto ? 'Actualizar' : 'Agregar'}</button>
      </form>
      <ul className="list">
        {motos.map(m => (
          <li key={m._id} className="list-item">
            {m.nombre} - {m.categoria} - {m.precio} USD
            <p>Fabricante: {m.fabricante_id?.nombre || 'Sin asignar'}</p>
            <button onClick={() => handleEdit(m)}>Editar</button>
            <button onClick={() => handleDelete(m._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Motos;
