import { getConnection } from "../database/database"

const registrarCitas = async (req, res) => {
    try{
        const connection = await getConnection();

        const { horarios_horario_id, medicos_medico_id, especialidades_especialidad_id, usuarios_usuario_id, fecha } = req.body;
        const sql1 = "INSERT INTO citas (horarios_horario_id, medicos_medico_id, especialidades_especialidad_id, usuarios_usuario_id, fecha) VALUES (?, ?, ?, ?, ?)";

        const result = await connection.query(sql1, [horarios_horario_id, medicos_medico_id, especialidades_especialidad_id, usuarios_usuario_id, fecha]);

        if(result.affectedRows > 0){
            const sql2 = "UPDATE medicos_has_horarios SET disponibilidad=0 WHERE horarios_horario_id=? AND medicos_medico_id=?";

            const result1 = await connection.query(sql2, [horarios_horario_id, medicos_medico_id]);
            res.send("La cita se ha registrado");
        }
        
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const consultarCitas = async (req, res) => {
    try{
        const connection = await getConnection();

        const { id } = req.params;
        const sql = "SELECT C.*, H.hora_inicio, H.hora_fin, M.nombre_completo, M.n_consultorio, E.nombre, U.nombre_completo FROM citas C,  horarios H, medicos M, especialidades E, usuarios U WHERE C.horarios_horario_id=H.horario_id AND C.medicos_medico_id=M.medico_id AND C.especialidades_especialidad_id=E.especialidad_id AND C.usuarios_usuario_id=U.usuario_id AND C.usuarios_usuario_id=?";

        const result = await connection.query(sql, [id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const cancelarCitas = async (req, res) => {
    try{
        const connection = await getConnection();

        const { id } = req.params;
        const sql = "DELETE FROM citas WHERE cita_id=?";

        const result = await connection.query(sql, [id]);
        res.send("Se eliminó la cita");
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    registrarCitas,
    consultarCitas,
    cancelarCitas
}
