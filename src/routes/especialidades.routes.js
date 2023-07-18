import { Router } from "express";
import { methods as especialidadesController } from "../controllers/especialidades.controller"
const router = Router();

router.get("/sm_health/ne-gestion-especialidades/servicio-al-cliente/v1/consultar-especialidades", especialidadesController.consultarEspecialidades);
router.get("/sm_health/ne-gestion-especialidades/servicio-al-cliente/v1/consultar-especialidades-por-id/:id", especialidadesController.consultarEspecialidadesPorID);

export default router;