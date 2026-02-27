/**
 * Configuración de CORS (Cross-Origin Resource Sharing).
 * Valida que las solicitudes provengan del URL del frontend definido en `FRONTEND_URL`.
 */
import { CorsOptions } from 'cors'

export const corsConfig: CorsOptions = {
    origin: function (origin, callback) {
        const whiteList = [process.env.FRONTEND_URL];
        if(process.argv[2] === '--api'){
            whiteList.push(undefined)
        }
        if (whiteList.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Error de CORS'))
        }

    }
}