const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'canela123',
    database: 'apirest',
    port: '5432'
});


const getUsers = async(req, res) => {
   const response = await pool.query('SELECT * FROM users');
   res.status(200).json(response.rows);
}

const getUsersById = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id= $1',[id]);
    res.json(response.rows);
}

// Creacion de usuario
const createUser = async (req, res) =>{
    const{ci,name,paterno,materno,email } = req.body;

    const response = await pool.query('INSERT INTO users(ci,name,paterno,materno,email) VALUES ($1, $2, $3, $4, $5)', [ci,name,paterno,materno,email]);
    console.log(response);
    res.json({
        message: 'usuario creado correctamente',
        body:{
            user: {ci,name,paterno,materno,email}
        }
    });
    
};

//eliminar usuario
const deleteUser = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id])
    console.log(response);
    res.json(`User ${id} elminiado correctamente`)
}

// actulizar usuario
const updateUser = async (req, res) =>{
    const id = req.params.id;
    const{ci,name,paterno,materno,email } = req.body;
    const response = await pool.query('UPDATE users SET ci = $1,name = $2 ,paterno = $3 ,materno = $4 ,email = $5 WHERE id = $6', [
        ci,
        name,
        paterno,
        materno,
        email,
        id
    ]);
    console.log(response);
    res.json('Usuario actualizado correctamente');

}


module.exports = {
    getUsers,
    getUsersById,
    createUser,
    deleteUser,
    updateUser
}