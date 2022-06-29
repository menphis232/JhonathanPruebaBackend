
const express = require("express");

const OrdersController = require('../OrdersController/orders');
const ProductsController = require('../ProductsController/products');
const UsersController = require('../UsersController/users');
const router = express.Router();


/**RUTAS DE ORDERS **/
router.get('/api/v1/orders', OrdersController.getOrders);
router.get('/api/v1/orders/:id', OrdersController.showOrder);
router.post('/api/v1/orders', OrdersController.createOrder);
router.put('/api/v1/orders/:id', OrdersController.updateOrder);
router.delete('/api/v1/orders/:id', OrdersController.deleteOrder);
router.get('/api/v1/ordersByUser/:id', OrdersController.getOrdersByUser);


/**RUTAS DE PRODUCTS **/
router.get('/api/v1/products', ProductsController.showProductsOrder);
router.get('/api/v1/products/:id', ProductsController.showProductsOrder);
router.post('/api/v1/products', ProductsController.createProduct);
router.put('/api/v1/products', ProductsController.updateProduct);
router.delete('/api/v1/products/:id', ProductsController.deleteProduct);

/**RUTAS DE USERS **/
router.get('/api/v1/users', UsersController.getUsers);
router.get('/api/v1/users/:id', UsersController.showUser);



module.exports=router;