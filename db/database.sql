CREATE DATABASE databaseStonksnt;

USE databaseStonksnt;

CREATE TABLE Categorías (
    categoría_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripción VARCHAR(255)
);


CREATE TABLE Productos (
    producto_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripción VARCHAR(255),
    categoría_id INT NOT NULL,
    FOREIGN KEY (categoría_id) REFERENCES Categorías (categoría_id)
);


CREATE TABLE Empleados (
    empleado_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    puesto VARCHAR(100) NOT NULL
);


CREATE TABLE Ventas (
    venta_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    fecha DATE NOT NULL,
    empleado_id INT NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES Productos (producto_id),
    FOREIGN KEY (empleado_id) REFERENCES Empleados (empleado_id)
);


CREATE TABLE RegistroVentasEmpleado (
    registro_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    empleado_id INT NOT NULL,
    total_ventas INT NOT NULL,
    FOREIGN KEY (empleado_id) REFERENCES Empleados (empleado_id)
);


CREATE TABLE CategoríasPremios (
    categoría_premio_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripción VARCHAR(255)
);


CREATE TABLE TipoPremios (
    tipo_premio_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripción VARCHAR(255)
);

CREATE TABLE Premios (
    premio_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripción VARCHAR(255),
    tipo_premio_id INT NOT NULL,
    categoría_premio_id INT NOT NULL,
    FOREIGN KEY (tipo_premio_id) REFERENCES TipoPremios (tipo_premio_id),
    FOREIGN KEY (categoría_premio_id) REFERENCES CategoríasPremios (categoría_premio_id)
);


-- Crear la tabla "EmpleadosPremios" (tabla de relación muchos a muchos)
CREATE TABLE EmpleadosPremios (
    empleado_id INT NOT NULL,
    premio_id INT NOT NULL,
    fecha DATE NOT NULL,
    FOREIGN KEY (empleado_id) REFERENCES Empleados (empleado_id),
    FOREIGN KEY (premio_id) REFERENCES Premios (premio_id),
    PRIMARY KEY (empleado_id, premio_id) -- Clave primaria compuesta por ambos campos
);

