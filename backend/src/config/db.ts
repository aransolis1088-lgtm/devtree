/**
 * Configuración de la conexión a la base de datos (MongoDB).
 * - Registra host y puerto cuando la conexión es exitosa.
 * - Muestra errores con formato y finaliza el proceso en caso de fallo.
 * - Exporta `connectDB` para que el servidor lo invoque al arrancar.
 */
import dns from "node:dns";
dns.setServers(["1.1.1.1"]);
import mongoose from "mongoose";
import colors from 'colors'


export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.host}:${connection.port}`;
        console.log(colors.blue.italic(`MongoDB Conectado en ${url}`));
    } catch (error) {
        console.log(colors.bgRed.white.italic(error));
        process.exit(1);
}
};
