import { Router } from "express";
import { methods as medicosController } from "./../controllers/medicos.controller"
const router = Router();

router.get("/sm_health/servicio-al-cliente/v1/consultar-medicos", medicosController.consultarMedicos);
router.get("/sm_health/servicio-al-cliente/v1/consultar-medicos-por-id/:id", medicosController.consultarMedicosPorID);
router.get("/sm_health/servicio-al-cliente/v1/consultar-medicos-por-especialidad/:id", medicosController.consultarMedicosPorEspecialidad);

export default router;