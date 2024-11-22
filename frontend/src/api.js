import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Fabricantes
export const getFabricantes = () => axios.get(`${API_URL}/fabricantes`);
export const createFabricante = (data) => axios.post(`${API_URL}/fabricantes`, data);
export const updateFabricante = (id, data) => axios.put(`${API_URL}/fabricantes/${id}`, data);
export const deleteFabricante = (id) => axios.delete(`${API_URL}/fabricantes/${id}`);

// Motos
export const getMotos = () => axios.get(`${API_URL}/motos`);
export const createMoto = (data) => axios.post(`${API_URL}/motos`, data);
export const updateMoto = (id, data) => axios.put(`${API_URL}/motos/${id}`, data);
export const deleteMoto = (id) => axios.delete(`${API_URL}/motos/${id}`);