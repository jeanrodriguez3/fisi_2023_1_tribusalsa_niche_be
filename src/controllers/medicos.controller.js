import { getConnection } from "./../database/database"

const consultarMedicos = async (req, res) => {
    try{
        const connection = await getConnection();

        const sql = "SELECT M.*, E.nombre FROM medicos M, especialidades E WHERE M.especialidades_especialidad_id=E.especialidad_id ORDER BY M.medico_id ASC";

        const result = await connection.query(sql);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const consultarMedicosPorID = async (req, res) => {
    try{
        const connection = await getConnection();

        const { id } = req.params;
        const sql = "SELECT M.*, E.nombre FROM medicos M, especialidades E WHERE M.especialidades_especialidad_id=E.especialidad_id AND medico_id=?";


        const result = await connection.query(sql, [id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const consultarMedicosPorEspecialidad = async (req, res) => {
    try{
        const connection = await getConnection();

        const { id } = req.params;
        const sql = "SELECT M.*, E.nombre FROM medicos M, especialidades E WHERE M.especialidades_especialidad_id=E.especialidad_id AND especialidades_especialidad_id=? ORDER BY M.medico_id ASC";

        const result = await connection.query(sql, [id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    consultarMedicos,
    consultarMedicosPorID,
    consultarMedicosPorEspecialidad
}