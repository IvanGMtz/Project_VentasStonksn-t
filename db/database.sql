CREATE DATABASE databaseStonksnt;
USE databaseStonksnt;

CREATE TABLE categoria (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT
);

CREATE TABLE producto (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  descripcion TEXT,
  categoria_id INT NOT NULL,
  FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);

CREATE TABLE empleado (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  puesto VARCHAR(100) NOT NULL
);

CREATE TABLE categoriapremio (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT
);

CREATE TABLE tipopremio (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT
);

CREATE TABLE cliente (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  telefono VARCHAR(15)
);

CREATE TABLE modopago (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT
);

CREATE TABLE venta (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fecha DATE NOT NULL,
  empleado_id INT NOT NULL,
  cliente_id INT NOT NULL,
  modo_pago_id INT NOT NULL,
  FOREIGN KEY (empleado_id) REFERENCES empleado(id),
  FOREIGN KEY (cliente_id) REFERENCES cliente(id),
  FOREIGN KEY (modo_pago_id) REFERENCES modopago(id)
);

CREATE TABLE detalleventa (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  venta_id INT NOT NULL,
  producto_id INT NOT NULL,
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (venta_id) REFERENCES venta(id),
  FOREIGN KEY (producto_id) REFERENCES producto(id)
);

CREATE TABLE premio (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  tipo_premio_id INT NOT NULL,
  categoria_premio_id INT NOT NULL,
  FOREIGN KEY (tipo_premio_id) REFERENCES tipopremio(id),
  FOREIGN KEY (categoria_premio_id) REFERENCES categoriapremio(id)
);

CREATE TABLE empleadopremio (
  empleado_id INT NOT NULL,
  premio_id INT NOT NULL,
  fecha DATE NOT NULL,
  PRIMARY KEY (empleado_id, premio_id),
  FOREIGN KEY (empleado_id) REFERENCES empleado(id),
  FOREIGN KEY (premio_id) REFERENCES premio(id)
);
