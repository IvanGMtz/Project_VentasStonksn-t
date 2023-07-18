# Ventas Stonksn't

## Descripción

Ventas stonksn't es un proyecto de seguimiento de ventas diseñado para empresas pequeñas. El objetivo principal de esta aplicación es proporcionar una solución eficiente para registrar y analizar las ventas, así como generar informes y estadísticas útiles. Este proyecto se centra en el desarrollo del backend utilizando Node.js, Express y una base de datos MySQL.

## Objetivo General

El objetivo general de ventas stonksn't es ofrecer una plataforma fácil de usar para que las empresas puedan registrar y hacer un seguimiento de sus ventas de manera efectiva. La aplicación permitirá a los usuarios gestionar los productos, clientes, ventas y generar estadísticas de ventas. Además, se premiará a los empleados con grandes cantidades de ventas y se llevará un seguimiento de aquellos con ventas bajas.

## Objetivos Específicos

- Permitir el registro de ventas, incluyendo detalles como el producto vendido, la cantidad y la fecha.
- Facilitar la gestión de productos y categorías de productos.
- Generar informes y estadísticas detallados sobre las ventas por producto y categoría.
- Premiar a los empleados con grandes cantidades de ventas.
- Llevar un seguimiento de los empleados con ventas bajas.

## Tecnologías Utilizadas

- Backend: Node.js, Express
- Base de Datos: MySQL
- Frontend: React

## Desarrollo

El desarrollo de stonksn't se llevará a cabo en varias etapas:

1. Backend:
   - Se utilizará Node.js y Express para crear el servidor y la API RESTful.
   - Se establecerá una conexión con la base de datos MySQL para almacenar y recuperar los datos necesarios.
   - Se implementarán las rutas y controladores para las operaciones CRUD en las tablas de la base de datos.
   - Se realizarán pruebas exhaustivas para garantizar la funcionalidad correcta del backend.
2. Base de datos MySQL:
   - Se creará una base de datos en MySQL para almacenar la información de los productos, categorías, ventas, empleados, premios, categoría de premio, tipo de premio y registro de ventas de empleados.

## Descripción del Proyecto

El sistema "stonksn't" se basa en el análisis estadístico de productos y la premiación a empleados destacados. El sistema consta de las siguientes entidades principales:

### Tablas de la Base de Datos

1. **Categoría:** Almacena las categorías de los productos.
   - `categoría_id` (PRIMARY KEY): Identificador único de la categoría.
   - `nombre`: Nombre de la categoría.
   - `descripción`: Descripción de la categoría.
2. **Producto:** Contiene la información de los productos vendidos.
   - `producto_id` (PRIMARY KEY): Identificador único del producto.
   - `nombre`: Nombre del producto.
   - `precio`: Precio del producto.
   - `descripción`: Descripción del producto.
   - `categoría_id` (FOREIGN KEY): Clave foránea que referencia la categoría del producto.
3. **Empleado:** Guarda la información de los empleados de la empresa.
   - `empleado_id` (PRIMARY KEY): Identificador único del empleado.
   - `nombre`: Nombre del empleado.
   - `puesto`: Puesto o cargo del empleado en la empresa.
4. **Venta:** Registra las ventas realizadas.
   - `venta_id` (PRIMARY KEY): Identificador único de la venta.
   - `producto_id` (FOREIGN KEY): Clave foránea que referencia el producto vendido.
   - `cantidad`: Cantidad de productos vendidos.
   - `fecha`: Fecha de la venta.
   - `empleado_id` (FOREIGN KEY): Clave foránea que referencia al empleado que realizó la venta.
5. **RegistroVentasEmpleado:** Almacena el total de ventas realizadas por cada empleado.
   - `registro_id` (PRIMARY KEY): Identificador único del registro.
   - `empleado_id` (FOREIGN KEY): Clave foránea que referencia al empleado.
   - `total_ventas`: Total de ventas realizadas por el empleado.
6. **Premio:** Registra los premios otorgados a los empleados.
   - `premio_id` (PRIMARY KEY): Identificador único del premio.
   - `nombre`: Nombre del premio.
   - `descripción`: Descripción del premio.
   - `tipo_premio_id` (FOREIGN KEY): Clave foránea que referencia el tipo de premio.
   - `categoría_premio_id` (FOREIGN KEY): Clave foránea que referencia la categoría del premio.
7. **CategoríaPremio:** Almacena las categorías de premios.
   - `categoría_premio_id` (PRIMARY KEY): Identificador único de la categoría de premio.
   - `nombre`: Nombre de la categoría de premio.
   - `descripción`: Descripción de la categoría de premio.
8. **TipoPremio:** Registra los tipos de premios (incentivo económico o no económico).
   - `tipo_premio_id` (PRIMARY KEY): Identificador único del tipo de premio.
   - `nombre`: Nombre del tipo de premio.
   - `descripción`: Descripción del tipo de premio.
9. **EmpleadoPremio:** Tabla de relación muchos a muchos que asocia empleados con los premios que han recibido.
   - `empleado_id` (PRIMARY KEY, FOREIGN KEY): Identificador único del empleado que recibió el premio.
   - `premio_id` (PRIMARY KEY, FOREIGN KEY): Identificador único del premio otorgado al empleado.
   - `fecha`: Fecha en la que se otorgó el premio al empleado.

<img src="./img/DatabaseStonksnt.png" alt="Database" style="zoom:33%;" />