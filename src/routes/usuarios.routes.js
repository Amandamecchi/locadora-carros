import { Router } from "express";

const usuariosRoutes = Router();

let usuarios = [];
usuariosRoutes.get("/", (req, res) =>{
    return res.status(200).json({
        message: usuarios.length == 0 
        ? "Não há usuarios cadastrados"
        : `total de usuarios: ${usuarios.length}`,
        usuarios, 
    });
});

export default usuariosRoutes;
