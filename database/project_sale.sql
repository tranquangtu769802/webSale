-- create database
DROP DATABASE IF EXISTS TestingSystem;
CREATE DATABASE TestingSystem;
USE TestingSystem;

-- create table :  brand
DROP TABLE IF EXISTS Brand;
CREATE TABLE Brand(
	id					TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` 				VARCHAR(50) NOT NULL UNIQUE KEY
);
-- create table :  Type book
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type`(
	id					TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` 				VARCHAR(50) NOT NULL UNIQUE KEY
);

-- create table : Product
DROP TABLE IF EXISTS Product;
CREATE TABLE Product (
	id					INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` 				NVARCHAR(100) NOT NULL,
    `price`				INT NOT NULL,
    TypeId				TINYINT UNSIGNED NOT NULL,
    BrandId				TINYINT UNSIGNED NOT NULL,
    Star				TINYINT NOT NULL,
    image				VARCHAR(5000),
    Create_date			DATETIME DEFAULT NOW(),
    FOREIGN KEY(TypeId) 	REFERENCES `type`(id),
    FOREIGN KEY(BrandId) 	REFERENCES Brand(id)
);

-- Add data Type
INSERT INTO `type`					(`name`						)
VALUES 								('Sách kỹ năng sống'		),
									('Tiểu thuyết'				),
									('Truyện tranh'				),
									('Sách kinh tế'				),
									('Light novel'				);
                                    
-- Add data Brand
INSERT INTO Brand					(`name`				)
VALUES 								('NXB Kim Đồng'		),
									('NXB Trẻ'			),
									('NXB IPM'			);
                                    
-- Add data Product-- https://cdn0.fahasa.com/media/catalog/product/8/9/8934974135425.jpg
INSERT INTO Product		(`name`									, `price`			, TypeId		, BrandId			, Create_date, 	image				,Star)	
VALUES 					('Katsu! 1'								,	'50000'			,   3			,    3				,'2023-06-06',	'http://localhost:3000/static/media/katsu1.fc90f37b054ca89e3e13.jpg'		, 4),
						('Katsu! 2'								,	'50000'			,   3			,    3				,'2023-06-06',	'http://localhost:3000/static/media/katsu2.a2dfeda72455bb84d42a.jpg'		, 4),
                        ('Katsu! 3'								,	'50000'			,   3			,    3				,'2023-06-06',	'http://localhost:3000/static/media/katsu3.9044cddff07d3b2649a8.jpg'		, 4),
                        ('Katsu! 4'								,	'50000'			,  	3			,    3				,'2023-06-06',	'http://localhost:3000/static/media/katsu4.a41a475698346625bbac.jpg'		, 4),
                        ('Katsu! 5'								,	'50000'			,   5			,    3				,'2023-06-06',	'http://localhost:3000/static/media/katsu5.2341fdfc94cbaf5e50f3.jpg'		, 5),
                        ('Katsu! 6'								,	'65000'			,   5			,    3				,'2023-06-06',	'http://localhost:3000/static/media/katsu6.9018ce99884f9c85863f.jpg'		, 4),
                        ('Katsu! 7'								,	'65000'			,   2			,    2				,'2023-06-06',	'http://localhost:3000/static/media/katsu7.769445fd7d2d60b7e303.jpg'		, 4),
                        ('Katsu! 8'								,	'65000'			,   2			,    2				,'2023-06-06',	'http://localhost:3000/static/media/katsu8.5c30726681893b1024d2.jpg' 		, 4),
						('Ớt bảy màu 1'							,	'65000'			,   3			,  	 2				,'2020-04-06',	'http://localhost:3000/static/media/otbaymau1.0724ddf20575ab196ed6.jpg'		, 5),
                        ('Ớt bảy màu 2'							,	'65000'			,   3			,  	 2				,'2020-04-06',	'http://localhost:3000/static/media/otbaymau2.c71541a8d28d1e657ae0.jpg'		, 5),
                        ('Ớt bảy màu 3'							,	'65000'			,   3			,  	 2				,'2020-04-06',	'http://localhost:3000/static/media/otbaymau3.cc78c6f715423cfc2e12.jpg'		, 5),
                        ('Ớt bảy màu 4'							,	'65000'			,   3			,  	 2				,'2020-04-06',	'http://localhost:3000/static/media/otbaymau4.42b20efd3bc5ac9102b6.jpg'		, 5),
                        ('Ớt bảy màu 5'							,	'65000'			,   3			,  	 2				,'2020-04-06',	'http://localhost:3000/static/media/otbaymau5.b1fb63ee4b568c62ab48.jpg'		, 5),
                        ('Ớt bảy màu 6'							,	'65000'			,   3			,  	 2				,'2020-04-06',	'http://localhost:3000/static/media/otbaymau6.202b2af2523971053227.jpg'		, 5);
                        
							
									
									
									


