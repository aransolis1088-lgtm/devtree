/**
 * Componente que muestra mensajes de error con estilos destacados.
 * Recibe contenido como children y lo renderiza en un párrafo rojo.
 */
export default function ErrorMessage({children} : {children: React.ReactNode}) {
  return (
    <p className="bg-red-50 text-red-600 p-3 uppercase text-sm font-bold text-center">{children}</p>
  )
}
