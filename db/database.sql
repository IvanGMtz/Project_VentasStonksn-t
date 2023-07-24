CREATE DATABASE databaseStonksnt;
USE databaseStonksnt;

CREATE TABLE Categoria (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT
);

CREATE TABLE Producto (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  descripcion TEXT,
  categoria_id INT NOT NULL,
  FOREIGN KEY (categoria_id) REFERENCES Categoria(id)
);

CREATE TABLE Empleado (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  puesto VARCHAR(100) NOT NULL
);

CREATE TABLE CategoriaPremio (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT
);

CREATE TABLE TipoPremio (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT
);

CREATE TABLE Cliente (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  telefono VARCHAR(15)
);

CREATE TABLE ModoPago (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT
);

CREATE TABLE Venta (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fecha DATE NOT NULL,
  empleado_id INT NOT NULL,
  cliente_id INT NOT NULL,
  modo_pago_id INT NOT NULL,
  FOREIGN KEY (empleado_id) REFERENCES Empleado(id),
  FOREIGN KEY (cliente_id) REFERENCES Cliente(id),
  FOREIGN KEY (modo_pago_id) REFERENCES ModoPago(id)
);

CREATE TABLE DetalleVenta (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  venta_id INT NOT NULL,
  producto_id INT NOT NULL,
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (venta_id) REFERENCES Venta(id),
  FOREIGN KEY (producto_id) REFERENCES Producto(id)
);

CREATE TABLE Premio (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  tipo_premio_id INT NOT NULL,
  categoria_premio_id INT NOT NULL,
  FOREIGN KEY (tipo_premio_id) REFERENCES TipoPremio(id),
  FOREIGN KEY (categoria_premio_id) REFERENCES CategoriaPremio(id)
);

CREATE TABLE EmpleadoPremio (
  empleado_id INT NOT NULL,
  premio_id INT NOT NULL,
  fecha DATE NOT NULL,
  PRIMARY KEY (empleado_id, premio_id),
  FOREIGN KEY (empleado_id) REFERENCES Empleado(id),
  FOREIGN KEY (premio_id) REFERENCES Premio(id)
);
