

const db = require('../db/db');
const mysql = require('mysql');
const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ApiPrueba'
  });
class UsersController {

    /** OBTENER TODOS LOS USUARIOS */
    getUsers(req, res) {
        
        let insertQuery = 'SELECT * FROM users WHERE deleted=0';
        let query = mysql.format(insertQuery,[req.params.id]);
        pool.query(query,(err, response) => {
            if(err) {
                console.error(err);
                return;
            }
     
            res.json({"mensaje":"Users","data":response})
  
          
           
        });
    }
/** OBTERNER LOS DATOS DE UN USUARIO POR ID  */
    showUser(req, res) {
        
        let insertQuery = 'SELECT * FROM users WHERE IdUser=? AND deleted=0';
        let query = mysql.format(insertQuery,[req.params.id]);
        pool.query(query,(err, response) => {
            if(err) {
                console.error(err);
                return;
            }
     
            res.json({"mensaje":"Usuario ","data":response})
  
          
           
        });
    }
  

  }
  
  const UsersControllers = new UsersController();


  module.exports=UsersControllers;