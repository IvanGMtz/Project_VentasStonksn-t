# Ventas Stonksn't

## Descripción

Ventas stonksn't es un proyecto de seguimiento de ventas diseñado para empresas pequeñas. El objetivo principal de esta aplicación es proporcionar una solución eficiente para registrar y analizar las ventas, así como generar informes y estadísticas útiles. Este proyecto se centra en el desarrollo del backend utilizando Node.js, Express y una base de datos MySQL.

## Objetivo General

El objetivo general de stonksn't es ofrecer una plataforma fácil de usar para que las empresas puedan registrar y hacer un seguimiento de sus ventas de manera efectiva. La aplicación permitirá a los usuarios gestionar los productos, clientes, ventas, generar informes y analizar las estadísticas.

## Objetivos Específicos

- Permitir el registro de ventas, incluyendo detalles como el producto vendido, la cantidad y la fecha.
- Facilitar la gestión de clientes, productos y categorías de productos.
- Generar informes detallados sobre las ventas por periodo de tiempo específico.
- Proporcionar estadísticas y gráficos visuales para ayudar en el análisis de las ventas.

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
   - Se creará una base de datos en MySQL para almacenar la información de las ventas, clientes, productos, categorías, empleados y pedidos.

### Tablas de la Base de Datos

- Tabla "Ventas":
  - Campos:
    - venta_id (PRIMARY KEY)
    - producto_id (FOREIGN KEY)
    - cantidad
    - fecha
- Tabla "Clientes":
  - Campos:
    - cliente_id (PRIMARY KEY)
    - nombre
    - email
    - dirección
- Tabla "Productos":
  - Campos:
    - producto_id (PRIMARY KEY)
    - nombre
    - precio
    - descripción
    - categoría_id (FOREIGN KEY)
- Tabla "Categorías":
  - Campos:
    - categoría_id (PRIMARY KEY)
    - nombre
    - descripción
- Tabla "Empleados":
  - Campos:
    - empleado_id (PRIMARY KEY)
    - nombre
    - puesto
    - fechaContratación
- Tabla "Pedidos":
  - Campos:
    - pedido_id (PRIMARY KEY)
    - cliente_id (FOREIGN KEY)
    - producto_id (FOREIGN KEY)
    - cantidad
    - fechaPedido
    - estado