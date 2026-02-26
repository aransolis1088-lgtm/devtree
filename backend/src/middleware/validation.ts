/**
 * Middleware de validación: captura y responde errores de validación de entrada.
 * Usa `express-validator` para validar datos y retorna errores si existen.
 */
import type { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {
    //Manejar errores
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
    }
    next()
}