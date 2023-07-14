import express from "express";
import morgan from "morgan";
//Importar rutas
import citasRoutes from "./routes/citas.routes"
import medicosRoutes from "./routes/medicos.routes"
import especialidadesRoutes from "./routes/especialidades.routes"
import horariosRoutes from "./routes/horarios.routes"

const app = express();

//Configuración
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Rutas
app.use(citasRoutes);
app.use(medicosRoutes);
app.use(especialidadesRoutes);
app.use(horariosRoutes);

export default app;

