
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

export default api

