

const db = require('../db/db');
const mysql = require('mysql');
const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ApiPrueba'
  });
class OrdersController {

    /**CONSULTAR ORDER POR ID */
    showOrder(req, res) {
        
        let insertQuery = 'SELECT * FROM orders WHERE idOrder=?';
        let query = mysql.format(insertQuery,[req.params.id]);
        pool.query(query,(err, response) => {
            if(err) {
                console.error(err);
                return;
            }
     
            res.json({"mensaje":"Orden ","data":response})
  
          
           
        });
    }
  /**OBTENER  LAS ORDENES EN GENERAL */
    getOrders(req, res) {
       
        let insertQuery = 'SELECT orders.*,users.Name as nameUser FROM orders  LEFT JOIN users ON users.IdUser = orders.idUser WHERE orders.deleted=0';
     
        pool.query(insertQuery,(err, response) => {
            if(err) {
                console.error(err);
                return;
            }
       
            res.json({"mensaje":"Ordenes ","data":response})
        
          
           
        });
    }

    /** OBTENER LAS ORDENES POR ID DE USUARIO */

    getOrdersByUser(req, res) {
        
        let insertQuery = 'SELECT * FROM orders WHERE idUser=? AND deleted=0';
        let query = mysql.format(insertQuery,[req.params.id]);
        pool.query(query,(err, response) => {
            if(err) {
                console.error(err);
                return;
            }
     
            res.json({"mensaje":"Ordenes ","data":response})
  
          
           
        });
    }
  /** CREAR  UNA ORDEN */
    createOrder(req, res) {
   
  
      let insertQuery = 'INSERT INTO orders (idUser,OrderNumber,DateTime,ProviderName,Observation,TotalValue) VALUES (?,?,?,?,?,?)';
      let query = mysql.format(insertQuery,[req.body.idUser,req.body.OrderNumber,req.body.DateTime,req.body.ProviderName,req.body.Observation,req.body.TotalValue]);
      pool.query(query,(err, response) => {
          if(err) {
              console.error(err);
              return;
          }
        
        const  id  = response.insertId;

          res.json({"mensaje":"Orden añadido correctamente","data":id})

        
         
      });
 

    }
  /** ACTUALIZAR UNA ORDEN */
    updateOrder(req, res) {
      
        let insertQuery = 'UPDATE orders SET idUser=?,OrderNumber=?,DateTime=?,ProviderName=?,Observation=?,TotalValue=? WHERE idOrder=?';
        let query = mysql.format(insertQuery,[req.body.idUser,req.body.OrderNumber,req.body.DateTime,req.body.ProviderName,req.body.Observation,req.body.TotalValue,req.params.id]);
        pool.query(query,(err, response) => {
            if(err) {
                console.error(err);
                return;
            }
   
            res.json({"mensaje":"Orden actualizado correctamente"})
        
          
           
        });
    }

    /**BORRAR UNA ORDEN */
  
    deleteOrder(req, res) {
        let insertQuery = 'UPDATE orders SET deleted=? WHERE idOrder=?';
        let query = mysql.format(insertQuery,[1,req.params.id]);

        pool.query(query,(err, response) => {
            if(err) {
                console.error(err);
                return;
            }
         
            res.json({"mensaje":"Orden eliminado correctamente"})
         
          
           
        });
    }
  }
  
  const OrdersControllers = new OrdersController();


  module.exports=OrdersControllers;