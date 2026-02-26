/**
 * Punto de entrada del servidor.
 * Importa la app configurada de server.ts e inicia el servidor en un puerto.
 */
import colors from 'colors'
import server from './server'

const port = process.env.PORT || 4000;

server.listen(port, () =>{
    console.log(colors.magenta.italic(`Servidor Funcionando en el puerto: ${port}`))
})