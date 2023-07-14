import { getConnection } from "../database/database"

const registrarCitas = async (req, res) => {
    try{
        const connection = await getConnection();

        const { horarios_horario_id, medicos_medico_id, especialidades_especialidad_id, usuarios_usuario_id, fecha } = req.body;
        const sql = "INSERT INTO citas (horarios_horario_id, medicos_medico_id, especialidades_especialidad_id, usuarios_usuario_id, fecha) VALUES (?, ?, ?, ?, ?)";

        const result = await connection.query(sql, [horarios_horario_id, medicos_medico_id, especialidades_especialidad_id, usuarios_usuario_id, fecha]);
        res.send("La cita se ha registrado");
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const consultarCitas = async (req, res) => {
    try{
        const connection = await getConnection();

        const { id } = req.params;
        const sql = "SELECT * FROM citas WHERE usuarios_usuario_id=?";

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
