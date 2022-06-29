-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.33 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para apiprueba
CREATE DATABASE IF NOT EXISTS `apiprueba` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `apiprueba`;

-- Volcando estructura para tabla apiprueba.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `idOrder` int(11) NOT NULL AUTO_INCREMENT,
  `idUser` int(11) NOT NULL,
  `OrderNumber` varchar(100) NOT NULL DEFAULT '',
  `DateTime` datetime DEFAULT NULL,
  `ProviderName` varchar(191) NOT NULL DEFAULT '',
  `DateCreated` timestamp NULL DEFAULT NULL,
  `Observation` text,
  `TotalValue` decimal(20,6) DEFAULT NULL,
  `deleted` int(11) DEFAULT '0',
  `Status` int(11) DEFAULT '0',
  PRIMARY KEY (`idOrder`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla apiprueba.orders: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`idOrder`, `idUser`, `OrderNumber`, `DateTime`, `ProviderName`, `DateCreated`, `Observation`, `TotalValue`, `deleted`, `Status`) VALUES
	(1, 1, 'abc123', '2022-06-28 23:50:55', 'jhonathan rodriguez', NULL, 'hola como estas', 13.000000, 1, 0),
	(2, 1, 'abc123', '2022-06-28 23:50:55', 'jhonathan rodriguez', NULL, 'hola como estas', 13.000000, 1, 0),
	(3, 1, 'abc123', '2022-06-28 23:50:55', 'jhonathan rodriguez', NULL, 'hola como estas', 13.000000, 1, 0),
	(4, 1, 'abc123456', '2022-06-28 23:50:55', 'jhonathan rodriguezddd', NULL, 'hola como estas chao', 13.000000, 1, 0),
	(5, 2, '12435', '2022-06-28 00:00:00', 'menphis c.a', NULL, NULL, NULL, 1, 0),
	(6, 3, '567fg', '2022-06-22 00:00:00', 'proveedor 2', NULL, NULL, NULL, 1, 0),
	(7, 3, '567fg', '2022-06-22 00:00:00', 'proveedor 2', NULL, NULL, NULL, 1, 0),
	(8, 3, '567fg', '2022-06-22 00:00:00', 'proveedor 2', NULL, NULL, NULL, 1, 0),
	(9, 3, '567fg', '2022-06-22 00:00:00', 'proveedor 2', NULL, NULL, NULL, 1, 0),
	(10, 1, '235', '2022-06-28 00:00:00', 'pedrito', NULL, NULL, 5.000000, 0, 5),
	(11, 3, '3453', '2022-06-29 00:00:00', 'jhonathan', NULL, NULL, NULL, 1, 0),
	(12, 3, '3453', '2022-06-29 00:00:00', 'jhonathan', NULL, NULL, 8.000000, 0, 0),
	(13, 4, 'abc 232', '2022-06-28 00:00:00', 'Jhonathan', NULL, 'hola que tal ', NULL, 1, NULL),
	(14, 2, '3445345', '2022-06-29 00:00:00', 'hola', NULL, NULL, NULL, 1, 0);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- Volcando estructura para tabla apiprueba.ordersproducts
CREATE TABLE IF NOT EXISTS `ordersproducts` (
  `IdOrdersProducts` int(11) NOT NULL AUTO_INCREMENT,
  `IdOrder` int(11) NOT NULL,
  `ValueUnit` decimal(20,2) NOT NULL DEFAULT '0.00',
  `Unit` varchar(50) NOT NULL,
  `Description` varchar(191) NOT NULL,
  `SKU` varchar(191) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `QtyBox` int(11) DEFAULT NULL,
  `Weight` decimal(20,2) DEFAULT NULL,
  `Volumen` int(11) DEFAULT NULL,
  `Mark` varchar(50) NOT NULL,
  `Status` int(11) NOT NULL DEFAULT '0',
  `deleted` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdOrdersProducts`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla apiprueba.ordersproducts: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `ordersproducts` DISABLE KEYS */;
INSERT INTO `ordersproducts` (`IdOrdersProducts`, `IdOrder`, `ValueUnit`, `Unit`, `Description`, `SKU`, `Quantity`, `QtyBox`, `Weight`, `Volumen`, `Mark`, `Status`, `deleted`) VALUES
	(1, 1, 123.00, '12', 'esta es  una desci', 'dfsdf232', 12, 1, 12.00, 12, 'marca', 0, 0),
	(2, 1, 45.00, '2', 'dfsdfsf', '3dsf43', 3, 12, 12.00, 12, 'marcados', 0, 0),
	(3, 13, 2.00, '2', 'esta es  otra descripcion', '2', 2, 2, 2.00, 2, 'sfsdf', 0, 0),
	(4, 13, 3.00, '3', '3', '3', 3, 3, 3.00, 3, 'bdfgdfg', 0, 1),
	(5, 10, 1.00, '1', '1', '1', 1, 1, 1.00, 1, 'dsfsdfsdf', 0, 0),
	(6, 10, 2.00, '2', '2', 'dfdfg', 2, 2, 2.00, 2, 'dsfsdf', 0, 0);
/*!40000 ALTER TABLE `ordersproducts` ENABLE KEYS */;

-- Volcando estructura para tabla apiprueba.users
CREATE TABLE IF NOT EXISTS `users` (
  `IdUser` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Status` int(11) NOT NULL DEFAULT '0',
  `deleted` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdUser`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla apiprueba.users: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`IdUser`, `Name`, `Email`, `Status`, `deleted`) VALUES
	(1, 'Jhonathan', 'menphisj@gmail.com', 0, 0),
	(2, 'Pedro ', 'pedro@example.com', 0, 0),
	(3, 'Juan', 'juan@example.com', 0, 0),
	(4, 'Jhon', 'doe@example.com', 0, 0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
