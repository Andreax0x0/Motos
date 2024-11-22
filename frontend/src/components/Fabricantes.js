import React, { useEffect, useState } from 'react';
import { getFabricantes, createFabricante, updateFabricante, deleteFabricante } from '../api';

const Fabricantes = () => {
  const [fabricantes, setFabricantes] = useState([]);
  const [nuevoFabricante, setNuevoFabricante] = useState({ nombre: '', pais: '', fundacion: '', web: '' });
  const [editarFabricante, setEditarFabricante] = useState(null); // Fabricante que se está editando

  useEffect(() => {
    getFabricantes()
      .then(response => setFabricantes(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setNuevoFabricante({ ...nuevoFabricante, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editarFabricante) {
      // Actualizar fabricante
      updateFabricante(editarFabricante._id, nuevoFabricante)
        .then(() => {
          setFabricantes(fabricantes.map(f => (f._id === editarFabricante._id ? { ...f, ...nuevoFabricante } : f)));
          setEditarFabricante(null);
          setNuevoFabricante({ nombre: '', pais: '', fundacion: '', web: '' });
        })
        .catch(error => console.error(error));
    } else {
      // Crear fabricante
      createFabricante(nuevoFabricante)
        .then(response => setFabricantes([...fabricantes, response.data]))
        .catch(error => console.error(error));
    }
  };

  const handleEdit = (fabricante) => {
    setEditarFabricante(fabricante);
    setNuevoFabricante({ nombre: fabricante.nombre, pais: fabricante.pais, fundacion: fabricante.fundacion, web: fabricante.web });
  };

  const handleDelete = (id) => {
    deleteFabricante(id)
      .then(() => setFabricantes(fabricantes.filter(f => f._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h2>Fabricantes</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="nombre" placeholder="Nombre" value={nuevoFabricante.nombre} onChange={handleChange} />
        <input type="text" name="pais" placeholder="País" value={nuevoFabricante.pais} onChange={handleChange} />
        <input type="number" name="fundacion" placeholder="Año de fundación" value={nuevoFabricante.fundacion} onChange={handleChange} />
        <input type="text" name="web" placeholder="Web" value={nuevoFabricante.web} onChange={handleChange} />
        <button type="submit">{editarFabricante ? 'Actualizar' : 'Agregar'}</button>
      </form>
      <ul className="list">
        {fabricantes.map(f => (
          <li key={f._id} className="list-item">
            {f.nombre} ({f.pais}) - {f.web}
            <button onClick={() => handleEdit(f)}>Editar</button>
            <button onClick={() => handleDelete(f._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fabricantes;
