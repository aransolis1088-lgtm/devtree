import {Link} from 'react-router-dom'

export default function RegisterView() {
    return (
        <>
            <div>
                <div className="text-6xl">RegisterView</div>
            </div>
            <nav>
                <Link to='/auth/login'>
                    ¿Ya tienes cuenta? Inicia Sesión
                </Link>
            </nav>
        </>
    )
}
