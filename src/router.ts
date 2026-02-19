import {Router} from 'express'
const router = Router()

/** Autentación y Registro*/
router.post('/auth/registro', (req, res) => {
    console.log(req.body)
})

export default router