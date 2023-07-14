import { getConnection } from "./../database/database"

const consultarMedicos = async (req, res) => {
    try{
        const connection = await getConnection();

        const sql = "SELECT * FROM medicos";

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
        const sql = "SELECT * FROM medicos WHERE medico_id=?";

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
        const sql = "SELECT * FROM medicos WHERE especialidades_especialidad_id=?";

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