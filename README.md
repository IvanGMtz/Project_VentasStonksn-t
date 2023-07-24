# Ventas Stonksn't

## Descripción

Ventas stonksn't es un proyecto de seguimiento de ventas diseñado para empresas pequeñas. El objetivo principal de esta aplicación es proporcionar una solución eficiente para registrar y analizar las ventas, así como generar informes y estadísticas útiles. Este proyecto se centra en el desarrollo del backend utilizando Node.js, Express y una base de datos MySQL.

## Objetivo General

El objetivo del proyecto es desarrollar un sistema de gestión de estadísticas de productos y premiación para empleados en empresas pequeñas. El sistema permitirá realizar un seguimiento de las ventas de productos, generar estadísticas individuales y por categorías, y otorgar premios a los empleados que logren grandes cantidades de ventas, fomentando la motivación y reconocimiento del personal.

## Objetivo Específico

El objetivo específico del sistema es proporcionar a las empresas pequeñas una herramienta eficiente y fácil de usar para analizar y mejorar sus ventas mediante el seguimiento y análisis de estadísticas de productos y el reconocimiento de los empleados con mejores desempeños.

## Descripción del Proyecto

El sistema se basa en el análisis estadístico de productos y la premiación a empleados destacados. El sistema consta de las siguientes entidades principales:

### Tablas de la Base de Datos

1. **Categoria:** Almacena las categorías de los productos.
   - `id` (PRIMARY KEY): Identificador único de la categoría.
   - `nombre`: Nombre de la categoría.
   - `descripcion`: Descripción de la categoría.
2. **Producto:** Contiene la información de los productos vendidos.
   - `id` (PRIMARY KEY): Identificador único del producto.
   - `nombre`: Nombre del producto.
   - `precio`: Precio del producto.
   - `descripcion`: Descripción del producto.
   - `categoria_id` (FOREIGN KEY): Clave foránea que referencia la categoría del producto.
3. **Empleado:** Guarda la información de los empleados de la empresa.
   - `id` (PRIMARY KEY): Identificador único del empleado.
   - `nombre`: Nombre del empleado.
   - `puesto`: Puesto o cargo del empleado en la empresa.
4. **Venta:** Registra las ventas realizadas.
   - `id` (PRIMARY KEY): Identificador único de la venta.
   - `fecha`: Fecha de la venta.
   - `empleado_id` (FOREIGN KEY): Clave foránea que referencia al empleado que realizó la venta.
   - `cliente_id` (FOREIGN KEY): Clave foránea que referencia al cliente relacionado con la venta.
   - `modo_pago_id` (FOREIGN KEY): Clave foránea que referencia el modo de pago utilizado.
5. **DetalleVenta:** Almacena el detalle de cada venta realizada.
   - `id` (PRIMARY KEY): Identificador único del detalle de venta.
   - `venta_id` (FOREIGN KEY): Clave foránea que referencia la venta a la que pertenece el detalle.
   - `producto_id` (FOREIGN KEY): Clave foránea que referencia el producto vendido.
   - `cantidad`: Cantidad de productos vendidos.
   - `precio_unitario`: Precio unitario del producto en la venta.
6. **Premio:** Registra los premios otorgados a los empleados.
   - `id` (PRIMARY KEY): Identificador único del premio.
   - `nombre`: Nombre del premio.
   - `descripcion`: Descripción del premio.
   - `tipo_premio_id` (FOREIGN KEY): Clave foránea que referencia el tipo de premio.
   - `categoria_premio_id` (FOREIGN KEY): Clave foránea que referencia la categoría del premio.
7. **CategoriaPremio:** Almacena las categorías de premios.
   - `id` (PRIMARY KEY): Identificador único de la categoría de premio.
   - `nombre`: Nombre de la categoría de premio.
   - `descripcion`: Descripción de la categoría de premio.
8. **TipoPremio:** Registra los tipos de premios (incentivo económico o no económico).
   - `id` (PRIMARY KEY): Identificador único del tipo de premio.
   - `nombre`: Nombre del tipo de premio.
   - `descripcion`: Descripción del tipo de premio.
9. **Cliente:** Almacena la información de los clientes relacionados con las ventas.
   - `id` (PRIMARY KEY): Identificador único del cliente.
   - `nombre`: Nombre del cliente.
   - `correo`: Correo electrónico del cliente.
   - `telefono`: Número de teléfono del cliente.
10. **ModoPago:** Registra los modos de pago utilizados en las ventas.
    - `id` (PRIMARY KEY): Identificador único del modo de pago.
    - `nombre`: Nombre del modo de pago.
    - `descripcion`: Descripción del modo de pago.
11. **EmpleadoPremio:** Tabla de relación muchos a muchos que asocia empleados con los premios que han recibido.
    - `empleado_id` (PRIMARY KEY, FOREIGN KEY): Identificador único del empleado que recibió el premio.
    - `premio_id` (PRIMARY KEY, FOREIGN KEY): Identificador único del premio otorgado al empleado.
    - `fecha`: Fecha en la que se entregó el premio al empleado.

<img src="./img/DatabaseStonksnt.png" alt="Database" style="zoom:33%;" />