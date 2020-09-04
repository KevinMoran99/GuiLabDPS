CREATE DATABASE bd1;

CREATE TABLE articulos (
    codigo int AUTO_INCREMENT,
    descripcion varchar(50),
    precio float,
    proveedor varchar(50),
    fabricante varchar(50),
    PRIMARY KEY (codigo)
);