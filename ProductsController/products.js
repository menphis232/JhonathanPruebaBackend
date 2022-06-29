

const db = require('../db/db');
const mysql = require('mysql');
const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ApiPrueba'
  });
class ProductsController {
    /**OBTENER LOS PRODUCTOS POR ORDEN */
    showProductsOrder(req, res) {
        
        let insertQuery = 'SELECT * FROM ordersproducts WHERE idOrder=? AND deleted=0';
        let query = mysql.format(insertQuery,[req.params.id]);
        pool.query(query,(err, response) => {
            if(err) {
                console.error(err);
                return;
            }
     
            res.json({"mensaje":"Products Order ","data":response})
  
          
           
        });
    }
  /** OBTENER TODOS LOS PRODUCTOS */
    getProducts(req, res) {
       
        let insertQuery = 'SELECT * FROM ordersproducts WHERE deleted=0';
     
        pool.query(insertQuery,(err, response) => {
            if(err) {
                console.error(err);
                return;
            }
       
            res.json({"mensaje":"Products ","data":response})
        
          
           
        });
    }
  /** CREAR PRODUCTOS EN LA ORDEN*/
    createProduct(req, res) {
   
       

        req.body.products.forEach((element,index) => {
            let insertQuery = 'INSERT INTO ordersproducts (IdOrder,ValueUnit,Unit,Description,SKU,Quantity,QtyBox,Weight,Volumen,Mark) VALUES (?,?,?,?,?,?,?,?,?,?)';
            let query = mysql.format(insertQuery,[req.body.idOrder,element.ValueUnit,element.Unit,element.Description,element.SKU,element.Quantity,element.QtyBox,element.Weight,element.Volumen,element.Mark]);
            pool.query(query,(err, response) => {
                if(err) {
                    console.error(err);
                    return;
                }
            
        });
  
    

          res.json({"mensaje":"Producto añadido correctamente"})

        
         
      });
 

    }

    /**ACTUALIZAR LOS PRODUCTOS DE LA ORDEN */
  
    updateProduct(req, res) {
        req.body.products.forEach((element,index) => {

            if(element.IdOrdersProducts){
                let insertQuery = 'UPDATE ordersproducts SET ValueUnit=?,Unit=?,Description=?,Quantity=?,QtyBox=?,Weight=?,Volumen=?,Mark=? WHERE IdOrdersProducts=?';
                let query = mysql.format(insertQuery,[element.ValueUnit,element.Unit,element.Description,element.Quantity,element.QtyBox,element.Weight,element.Volumen,element.Mark,element.IdOrdersProducts]);
                pool.query(query,(err, response) => {
                    if(err) {
                        console.error(err);
                        return;
                    }
                });
            }else{
                let insertQuery = 'INSERT INTO ordersproducts (IdOrder,ValueUnit,Unit,Description,SKU,Quantity,QtyBox,Weight,Volumen,Mark) VALUES (?,?,?,?,?,?,?,?,?,?)';
                let query = mysql.format(insertQuery,[req.body.idOrder,element.ValueUnit,element.Unit,element.Description,element.SKU,element.Quantity,element.QtyBox,element.Weight,element.Volumen,element.Mark]);
                pool.query(query,(err, response) => {
                    if(err) {
                        console.error(err);
                        return;
                    }
                });
            }
   
            res.json({"mensaje":"Item actualizado correctamente"})
        
          
           
        });
    }
  /** BORRAR PRODUCTO DE LA ORDEN */
    deleteProduct(req, res) {
        let insertQuery = 'UPDATE ordersproducts SET deleted=? WHERE IdOrdersProducts=?';
        let query = mysql.format(insertQuery,[1,req.params.id]);
        pool.query(query,(err, response) => {
            if(err) {
                console.error(err);
                return;
            }
         
            res.json({"mensaje":"Item eliminado correctamente"})
         
          
           
        });
    }
  }
  
  const ProductsControllers = new ProductsController();


  module.exports=ProductsControllers;