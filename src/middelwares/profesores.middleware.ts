import { NextFunction, Request, Response } from "express";

export const ValidarDatosProfesores = (req:Request, res:Response, next:NextFunction) =>{
    const {cedula, nombres, correoInstitucional, tiempoCompleto} = req.body;
    if(!cedula || !nombres || !correoInstitucional || tiempoCompleto === undefined){
        return res.status(400).json({
            ok: false,
            mensaje: "debes enviar todos los datos",
        });
    }
    next();
}       