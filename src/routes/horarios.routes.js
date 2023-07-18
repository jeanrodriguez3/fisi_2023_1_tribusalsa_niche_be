import { Router } from "express";
import { methods as horariosController } from "./../controllers/horarios.controller"
const router = Router();

router.get("/sm_health/ne-gestion-horarios/servicio-al-cliente/v1/consultar-horarios", horariosController.consultarHorarios);
router.get("/sm_health/ne-gestion-horarios/servicio-al-cliente/v1/consultar-horarios-por-medico/:id", horariosController.consultarHorariosPorMedico);
router.put("/sm_health/ne-gestion-horarios/servicio-al-cliente/v1/actualizar-horarios/:id", horariosController.actualizarHorarios);


export default router;