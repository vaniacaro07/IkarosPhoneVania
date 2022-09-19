CREATE DATABASE  IF NOT EXISTS `db_ikaros_phone` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_ikaros_phone`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_ikaros_phone
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Samsung'),(2,'iPhone'),(3,'Xiaomi'),(4,'Huawei'),(5,'ZTE'),(6,'Motorola');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phones`
--

DROP TABLE IF EXISTS `phones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idBrand` int(11) DEFAULT NULL,
  `model` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `idSystem` int(11) DEFAULT NULL,
  `description` text NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `video` varchar(100) DEFAULT NULL,
  `price` decimal(8,2) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `idSpecification` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_system_idx` (`idSystem`),
  KEY `idBrand_idx` (`idBrand`),
  KEY `idSpecification_idx` (`idSpecification`),
  CONSTRAINT `idBrand` FOREIGN KEY (`idBrand`) REFERENCES `brands` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idSpecification` FOREIGN KEY (`idSpecification`) REFERENCES `specifications` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idSystem` FOREIGN KEY (`idSystem`) REFERENCES `systems` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phones`
--

LOCK TABLES `phones` WRITE;
/*!40000 ALTER TABLE `phones` DISABLE KEYS */;
INSERT INTO `phones` VALUES (1,5,'Blade A51','smartphone',2,'Preparate para abrir un mundo nuevo. Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','ZTE-BladeA51.png','https://www.youtube.com/embed/JfnOi-PFlTA',120.00,0,1),(2,3,'Redmi 9A','smartphone',2,'Preparate para abrir un mundo nuevo. Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','XiaomiRedmi9A.png','https://www.youtube.com/embed/JfnOi-PFlTA',120.00,10,2),(3,3,'11 lite','inSale',2,'Preparate para abrir un mundo nuevo. Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','Xiaomi11Lite.png','https://www.youtube.com/embed/JfnOi-PFlTA',120.00,NULL,3),(4,2,'X','inSale',4,'Preparate para abrir un mundo nuevo. Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','iPhoneX.png','https://www.youtube.com/embed/JfnOi-PFlTA',120.00,15,4),(5,6,'Moto G22','inSale',3,'Preparate para abrir un mundo nuevo. Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','MotoG22.png','https://www.youtube.com/embed/JfnOi-PFlTA',120.00,15,5),(6,6,'G200','smartphone',2,'Preparate para abrir un mundo nuevo. Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','MotorolaG200.png','https://www.youtube.com/embed/JfnOi-PFlTA',120.00,NULL,6),(7,2,'13','smartphone',7,'Preparate para abrir un mundo nuevo. Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','iPhone13Pro.png','https://www.youtube.com/embed/JfnOi-PFlTA',120.00,NULL,7),(8,2,'12','inSale',6,'Preparate para abrir un mundo nuevo. Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','iPhone12.png','https://www.youtube.com/embed/JfnOi-PFlTA',120.00,10,8),(9,1,'Galaxy Z Fold3','smartphone',2,'Preparate para abrir un mundo nuevo. Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','SamsungGalaxyZ-Fold3.png','https://www.youtube.com/embed/JfnOi-PFlTA',120.00,NULL,9),(10,1,'Galaxy A33','inSale',3,'Preparate para abrir un mundo nuevo. Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','SamsungGalaxyA33.png','https://www.youtube.com/embed/JfnOi-PFlTA',120.00,15,10),(11,1,'Galaxy S22+','smartphone',3,'Preparate para abrir un mundo nuevo. Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','SamsungGalaxyS22+.png','https://www.youtube.com/embed/JfnOi-PFlTA',120.00,NULL,11),(12,4,'Nova y60','smartphone',1,'Preparate para abrir un mundo nuevo. Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','1655851366957.png','https://www.youtube.com/embed/JfnOi-PFlTA',120.00,10,12);
/*!40000 ALTER TABLE `phones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specifications`
--

DROP TABLE IF EXISTS `specifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `internalMemory` int(11) DEFAULT NULL,
  `externalMemory` int(11) DEFAULT NULL,
  `ram` int(11) DEFAULT NULL,
  `camera` varchar(45) DEFAULT NULL,
  `frontalCamera` int(11) DEFAULT NULL,
  `recorder` int(11) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  `resolution` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specifications`
--

LOCK TABLES `specifications` WRITE;
/*!40000 ALTER TABLE `specifications` DISABLE KEYS */;
INSERT INTO `specifications` VALUES (1,32,512,2,'13MP + 2MP',5,1080,'1600x720','6.5'),(2,32,512,2,'13 MP + 5 MP',5,1080,'1600x720','6.53'),(3,128,256,6,'64 MP + 20 MP',5,1080,'1600x720','6.5'),(4,64,256,3,'12 MP + 7MP',5,1080,'1600x720','6.5'),(5,128,256,4,'50 MP + 8MP + 2MP + 2 MP',16,1080,'1080x2400','6.5'),(6,128,256,8,'108 MP + 13 MP + 2 MP',16,1080,'1080x2400','6.8'),(7,128,512,4,'63 MP + 12 MP',10,1080,'2532x1170','6.1'),(8,64,256,4,'63 MP + 12 MP',10,1080,'2532x1170','6.1'),(9,215,256,12,'12 MP + 12 MP +  4 MP + 10 MP',10,1080,'2208x1768','6.2'),(10,128,512,6,'64 MP + 12 MP + 5 MP + 5 MP',32,1080,'2400x1080','6.5'),(11,128,256,8,'50 MP + 10 MP + 12 MP',10,1080,'2340x1080','6.6'),(12,64,512,4,'13 MP + 5 MP + 2 MP',8,1080,'1600x720','6.6');
/*!40000 ALTER TABLE `specifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `systems`
--

DROP TABLE IF EXISTS `systems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `systems` (
  `id` int(11) NOT NULL,
  `system` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `systems`
--

LOCK TABLES `systems` WRITE;
/*!40000 ALTER TABLE `systems` DISABLE KEYS */;
INSERT INTO `systems` VALUES (1,'Android 10'),(2,'Android 11'),(3,'Android 12'),(4,'iOS 11'),(5,'iOS 12'),(6,'iOS 14'),(7,'iOs 15');
/*!40000 ALTER TABLE `systems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `admin` tinyint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Vania Caballero','vaniacaballero5@gmail.com','$2a$10$E/UZY9EKSID2PH9B7bolNeq0Y6mUPMvMi.LxEPEM6V1v8GNxDYK1i','1659899184553.jpg',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-08 17:50:46
