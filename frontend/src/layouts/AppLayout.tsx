
// @tanstack/react-query: Librería para manejar peticiones HTTP, caching y sincronización de datos
import { useQuery } from '@tanstack/react-query'

// react-router-dom: Librería de enrutamiento para redirigir a otras rutas
import { Navigate } from 'react-router-dom'

// Función API que obtiene los datos del usuario autenticado
import { getUsers } from "../api/DevTreeAPI";

// Componente DevTree que renderiza el árbol de enlaces del usuario
import DevTree from '../components/DevTree';

/**
 * AppLayout Component
 * 
 * Layout principal de la aplicación que:
 * - Verifica si el usuario está autenticado
 * - Obtiene sus datos de la API
 * - Renderiza el DevTree o redirige al login si hay error
 */
export default function AppLayout() {

    // Hook useQuery para realizar la petición GET de datos del usuario
    // - queryFn: función que ejecuta la petición (getUsers)
    // - queryKey: clave única para cachear los datos ['user']
    // - retry: reintentar la petición 1 vez si falla
    // - refetchOnWindowFocus: false - no refrescar datos cuando regresa el foco a la ventana
    const { data, isLoading, isError } = useQuery({
        queryFn: getUsers,
        queryKey: ['user'],
        retry: 2,
        refetchOnWindowFocus: false
    })

    // Si está cargando, mostrar mensaje de carga
    if (isLoading) return 'Cargando...'

    // Si hay error en la petición, redirigir al login
    if (isError) return <Navigate to={'/auth/login'} />

    // Si hay datos, renderizar el componente DevTree y pasar los datos del usuario
    if (data) return <DevTree data={data} />
}