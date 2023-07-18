import { getConnection } from "./../database/database"

const consultarHorarios = async (req, res) => {
    try{
        const connection = await getConnection();

        const sql = "SELECT * FROM horarios"

        const result = await connection.query(sql);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const consultarHorariosPorMedico = async (req, res) => {
    try{
        const connection = await getConnection();
        
        const { id } = req.params;

        const sql = "SELECT * FROM medicos_has_horarios MH, horarios H	WHERE MH.horarios_horario_id=H.horario_id AND MH.disponibilidad=1 AND H.disponibilidad=1 AND MH.medicos_medico_id=?"

        const result = await connection.query(sql, [id]);
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const actualizarHorarios = async (req, res) => {
    try{
        const connection = await getConnection();
        
        const { id } = req.params;
        const { hora_inicio, hora_fin, disponibilidad } = req.body;
        const sql = "UPDATE horarios SET hora_inicio=?, hora_fin=?, disponibilidad=? WHERE horario_id=?";

        const result = await connection.query(sql, [hora_inicio, hora_fin, disponibilidad, id]);
        res.send("Horario actualizado");
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    consultarHorarios,
    consultarHorariosPorMedico,
    actualizarHorarios
}