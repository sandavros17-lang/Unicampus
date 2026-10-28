
import express from "express";
import cursoRouter from "./routers/curso.router.ts";

const app = express();
const PORT = 3000;

//importante
app.use(express.json());

//rutacurso
app.use("/api/cursos", cursoRouter);

//ruta si funca
app.get("/", (_req, res) => {
    res.json({
        mensaje: "API CRUD Modular funcionando"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
