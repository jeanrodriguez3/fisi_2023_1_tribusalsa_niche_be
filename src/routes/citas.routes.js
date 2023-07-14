import { Router } from "express";
import { methods as citasController } from "../controllers/citas.controller"
const router = Router();

router.post("/sm_health/servicio-al-cliente/v1/registrar-citas", citasController.registrarCitas);
router.get("/sm_health/servicio-al-cliente/v1/consultar-citas/:id", citasController.consultarCitas);
router.delete("/sm_health/servicio-al-cliente/v1/cancelar-citas/:id", citasController.cancelarCitas);

export default router;