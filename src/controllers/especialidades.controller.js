import { getConnection } from "./../database/database"

const consultarEspecialidades = async (req, res) => {
    try{
        const connection = await getConnection();

        const sql = "SELECT * FROM especialidades";

        const result = await connection.query(sql);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const consultarEspecialidadesPorID = async (req, res) => {
    try{
        const connection = await getConnection();

        const { id } = req.params;
        const sql = "SELECT * FROM especialidades WHERE especialidad_id=?";

        const result = await connection.query(sql, [id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    consultarEspecialidades,
    consultarEspecialidadesPorID,
}