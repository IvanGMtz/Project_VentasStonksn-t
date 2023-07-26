USE databaseStonksnt;

INSERT INTO Categoria (nombre, descripcion)
VALUES
  ('Electrónica', 'Productos electrónicos'),
  ('Ropa', 'Prendas de vestir'),
  ('Alimentos', 'Productos comestibles'),
  ('Hogar', 'Artículos para el hogar');

INSERT INTO Producto (nombre, precio, descripcion, categoria_id)
VALUES
  ('Televisor', 499.99, 'Smart TV LED 50 pulgadas', 1),
  ('Laptop', 899.00, 'Laptop Intel Core i5, 8GB RAM, 512GB SSD', 1),
  ('Camiseta', 19.99, 'Camiseta de algodón con estampado', 2),
  ('Pantalón', 39.99, 'Pantalón de mezclilla', 2),
  ('Arroz', 3.49, 'Arroz de grano largo', 3),
  ('Aceite de Oliva', 8.99, 'Aceite de oliva virgen extra', 3),
  ('Cuchillo de Cocina', 12.50, 'Cuchillo de acero inoxidable', 4),
  ('Lámpara de Mesa', 29.99, 'Lámpara de mesa con base de madera', 4);

INSERT INTO Empleado (nombre, puesto)
VALUES
  ('Juan Pérez', 'Vendedor'),
  ('Ana López', 'Gerente de Ventas'),
  ('Pedro Gómez', 'Asistente de Tienda'),
  ('María Ruiz', 'Vendedor');

INSERT INTO Cliente (nombre, correo, telefono)
VALUES
  ('Roberto Pérez', 'roberto@example.com', '+1234567890'),
  ('Laura Ramírez', 'laura.r@example.com', '+0987654321'),
  ('Carlos González', 'carlos.g@example.com', '+2345678901'),
  ('Sofía Martínez', 'sofia.m@example.com', '+3456789012');

INSERT INTO ModoPago (nombre, descripcion)
VALUES
  ('Tarjeta de Crédito', 'Pago con tarjeta de crédito'),
  ('Efectivo', 'Pago en efectivo'),
  ('Transferencia', 'Pago mediante transferencia bancaria');

INSERT INTO Venta (fecha, empleado_id, cliente_id, modo_pago_id)
VALUES
  ('2023-07-10', 1, 1, 1),
  ('2023-07-11', 2, 2, 2),
  ('2023-07-12', 3, 3, 1),
  ('2023-07-12', 1, 4, 3);

INSERT INTO DetalleVenta (venta_id, producto_id, cantidad, precio_unitario)
VALUES
  (1, 1, 2, 499.99),
  (2, 2, 1, 899.00),
  (3, 3, 3, 19.99),
  (4, 4, 1, 39.99);

INSERT INTO TipoPremio (nombre, descripcion)
VALUES
  ('Económico', 'Premios con incentivos económicos'),
  ('No Económico', 'Premios sin incentivos económicos');

INSERT INTO CategoriaPremio (nombre, descripcion)
VALUES
  ('Empleado del Mes', 'Premios otorgados al empleado del mes'),
  ('Aniversario Laboral', 'Premios otorgados en aniversarios laborales'),
  ('Trabajo en Equipo', 'Premios por destacado trabajo en equipo');

INSERT INTO Premio (nombre, descripcion, tipo_premio_id, categoria_premio_id)
VALUES
  ('Bono de Ventas', 'Bono adicional por ventas', 1, 1),
  ('Día Libre Adicional', 'Día libre adicional por logros', 2, 1),
  ('Gift Card', 'Tarjeta regalo como reconocimiento', 1, 2),
  ('Reconocimiento Especial', 'Reconocimiento especial por desempeño', 2, 3);

INSERT INTO EmpleadoPremio (empleado_id, premio_id, fecha)
VALUES
  (1, 1, '2023-07-10'),
  (2, 2, '2023-07-11'),
  (3, 3, '2023-07-12'),
  (4, 4, '2023-07-12');
