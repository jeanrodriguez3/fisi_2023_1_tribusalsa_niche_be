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
        const sql = "SELECT * FROM medicos_has_horarios WHERE medicos_medico_id=? AND disponibilidad=1";

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
        const { hora_inicio, hora_fin } = req.body;
        const sql = "UPDATE horarios SET hora_inicio=?, hora_fin=? WHERE horario_id=?";

        const result = await connection.query(sql, [hora_inicio, hora_fin, id]);
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