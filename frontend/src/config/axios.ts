
/**
 * En este archivo se crea una instancia personalizada de axios con:
 * - baseURL: URL base del servidor backend (obtenida de variables de entorno)
 * 
 * Ventajas:
 * - No repetir la URL completa en cada petición
 * - Fácil mantenimiento: cambiar la URL en un solo lugar
 */

import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('AUTH_TOKEN')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api

