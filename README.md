# Ventas Stonksn't

## Descripción

Ventas stonksn't es un proyecto de seguimiento de ventas diseñado para empresas pequeñas. El objetivo principal de esta aplicación es proporcionar una solución eficiente para registrar y analizar las ventas, así como generar informes y estadísticas útiles. Este proyecto se centra en el desarrollo del backend utilizando Node.js, Express y una base de datos MySQL.

## Objetivo General

El objetivo del proyecto es desarrollar un sistema de gestión de estadísticas de productos y premiación para empleados en empresas pequeñas. El sistema permitirá realizar un seguimiento de las ventas de productos, generar estadísticas individuales y por categorías, y otorgar premios a los empleados que logren grandes cantidades de ventas, fomentando la motivación y reconocimiento del personal.

## Objetivo Específico

El objetivo específico del sistema es proporcionar a las empresas pequeñas una herramienta eficiente y fácil de usar para analizar y mejorar sus ventas mediante el seguimiento y análisis de estadísticas de productos y el reconocimiento de los empleados con mejores desempeños.

## Descripción del Proyecto

El sistema se basa en el análisis estadístico de productos y la premiación a empleados destacados. El sistema consta de las siguientes entidades principales:

<img src="./img/DatabaseStonksnt.png" alt="Database" style="zoom:33%;" />

## Requerimientos

El proyecto está desarrollado utilizando Node.js y MySQL, por lo que necesitarás lo siguiente para ejecutarlo:

- Node.js ([https://nodejs.org](https://nodejs.org/)) - Verificar que la versión instalada sea compatible con las dependencias del proyecto, se trabajó sobre la versión 18.16.0 de node.js.
- MySQL ([https://www.mysql.com](https://www.mysql.com/)) - Se requiere una base de datos MySQL para almacenar la información del proyecto.

## Instalación de la Base de Datos

1. Descarga el proyecto desde GitHub y navega a la carpeta "db".

2. Abre el archivo "database.sql" en tu cliente de MySQL para ejecutar el script y crear la base de datos "databaseStonksnt" junto con todas las tablas necesarias. (CTRL + A, seleccionar todo y CTRL + ENTER para correr el codigo)

3. A continuación, puedes cargar datos de ejemplo en la base de datos ejecutando el archivo "data.sql" en tu cliente de MySQL. Esto te proporcionará datos de muestra para trabajar con el sistema.

   ## Configuración del archivo .env

4. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias, como la conexión a la base de datos. Un ejemplo de cómo configurar el archivo `.env` se proporciona en el archivo `.env.example`:

   ```
   DB_HOST="nombre_del_host_de_la_base_de_datos"
   DB_USER="nombre_de_usuario_de_mysql"
   DB_PASSWORD="contraseña_de_usuario_de_mysql"
   DB_NAME="databaseStonksnt"
   MY_SERVER={"hostname":"127.0.0.1", "port":3000} 
   JWT_PRIVATE_KEY="Clave_privada_para_la_creación_del_token"
   ```


Ejecuta el siguiente comando en la terminal para instalar las dependencias necesarias:

```
npm install
```

Ejecuta el siguiente comando para generar los DTO (Data Transfer Objects) necesarios:

```
npm run tsc
```

Una vez cargada la carperta controler dentro de la carpeta src puedes frenar en la terminal el codigo con el comando CTRL + C.

## Montar el Servidor

Una vez configuradas las variables de entorno y generado los DTO, puedes iniciar el servidor con el siguiente comando:

```
npm run dev
```

## Generación del Token

Antes de interactuar con los endpoints protegidos, debes generar un token de autenticación JWT para acceder a las funcionalidades protegidas. Puedes hacerlo mediante la siguiente petición GET:

```
GET http://127.0.0.1:3000/token?tabla=<nombre_tabla>
```

Sustituye `<nombre_tabla>` por el nombre de la tabla para la cual deseas generar el token (por ejemplo, "producto").

**Se debe crear un token por cada tabla a utilizar**
Los token deben ser ingresados como HTTP Headers de tipo Authorization.

Imagen de ejemplo de como generar el token:

<img src="./img/Example_GETToken.png" alt="Database" style="zoom:50%;" />

## Endpoints Disponibles

### `GET /categoria`

Obtiene todas las categorías de productos.

Ejemplo de respuesta:

```json
[
  {
    "id": 1,
    "nombre": "Electrónica",
    "descripcion": "Productos electrónicos"
  },
  {
    "id": 2,
    "nombre": "Ropa"
  },
  // Más categorías...
]
```

### `POST /categoria`

Crea una nueva categoría de productos. Campos obligatorios: `nombre`.

Ejemplo de uso:

```
POST http://127.0.0.1:3000/categoria
```

Cuerpo de la solicitud:

```json
{
  "name": "Hogar"
}
```

Respuesta de éxito:

```json
{
  "nombre": "Hogar",
  "id": 12,
  "descripcion": "Sin descripción"
}
```

### `PUT/categoria`

Crea una nueva categoría de productos. Campos obligatorios: `nombre`.

Ejemplo de uso:

```
PUT http://127.0.0.1:3000/categoria/12
```

Cuerpo de la solicitud:

```json
{
  "name": "Hogar"
}
```

Respuesta de éxito:

```json
{
  "nombre": "Alimentos",
  "descripcion": "Sin descripción"
}
```

### `DELETE /categoria/:id`

Elimina una categoría existente por su ID.

Ejemplo de uso:

```
DELETE http://127.0.0.1:3000/categoria/12
```

Respuesta de éxito:

```json
{
  "message": "Categoría eliminada correctamente"
}
```

### `GET /producto`

Obtiene todos los productos junto con sus categorías.

Ejemplo de respuesta:

```json
[
  {
    "id": 1,
    "nombre": "Televisor",
    "precio": "499.99",
    "descripcion": "Smart TV LED 50 pulgadas",
    "categoria_id": 1
  },
  {
    "id": 2,
    "nombre": "Laptop",
    "precio": "899.00",
    "descripcion": "Laptop Intel Core i5, 8GB RAM, 512GB SSD",
    "categoria_id": 1
  },
  // Más productos...
]
```

### `POST /producto`

Crea un nuevo producto. Campos obligatorios: `nombre`, `precio`, `descripcion`, `categoria_id`.

Ejemplo de uso:

```
POST http://127.0.0.1:3000/producto
```

Cuerpo de la solicitud:

```json
{
  "name": "Pantalla LED",
  "price": 199.99,
  "descripcion": "Una pantalla LED de alta definición.",
  "id-categoria": 1
}
```

Respuesta de éxito:

```json
{
  "nombre": "Pantalla LED",
  "precio": 199.99,
  "categoria_id": 1,
  "id": 10,
  "descripcion": "Sin descripción"
}
```

### `PUT/producto`

Crea un nuevo producto. Campos obligatorios: `nombre`, `precio`, `descripcion`, `categoria_id`.

Ejemplo de uso:

```
PUT http://127.0.0.1:3000/producto/10
```

Cuerpo de la solicitud:

```json
{
  "name": "Pantalla LED",
  "price": 199.99,
  "descripcion": "Una pantalla LED de alta definición.",
  "id-categoria": 1,
  "description":"Smart TV LED 40 pulgadas"
}
```

Respuesta de éxito:

```json
{
  "nombre": "Pantalla LED",
  "precio": 199.99,
  "categoria_id": 1,
  "descripcion": "Smart TV LED 40 pulgadas"
}
```

### `DELETE /producto/:id`

Elimina un producto existente por su ID.

Ejemplo de uso:

```
DELETE http://127.0.0.1:3000/producto/10
```

Respuesta de éxito:

```json
{
  "message": "Producto eliminado correctamente"
}
```

### `GET /metodopago`

Obtiene todos los métodos de pago.

Ejemplo de respuesta:

```json
[
  {
    "id": 1,
    "nombre": "Tarjeta de Crédito",
    "descripcion": "Pago con tarjeta de crédito"
  },
  {
    "id": 2,
    "nombre": "Efectivo",
    "descripcion": "Pago en efectivo"
  },
  // Más métodos de pago...
]
```

### `POST /metodopago`

Crea un nuevo método de pago. Campos obligatorios: `nombre`.

Ejemplo de uso:

```
POST http://127.0.0.1:3000/metodopago
```

Cuerpo de la solicitud:

```json
{
  "name": "Efectivo"
}
```

Respuesta de éxito:

```json
{
  "nombre": "Efectivo",
  "id": 5,
  "descripcion": "Sin descripción"
}
```

### `PUT/metodopago`

Crea un nuevo método de pago. Campos obligatorios: `nombre`.

Ejemplo de uso:

```
PUT http://127.0.0.1:3000/metodopago/5
```

Cuerpo de la solicitud:

```json
{
  "name": "Efectivo",
  "description": "Pago en efectivo"
}
```

Respuesta de éxito:

```json
{
  "nombre": "Efectivo",
  "descripcion": "Pago en efectivo"
}
```

### 

### `DELETE /metodopago/:id`

Elimina un método de pago existente por su ID.

Ejemplo de uso:

```
DELETE http://127.0.0.1:3000/metodopago/5
```

Respuesta de éxito:

```json
{
  "message": "Metodo de pago eliminado correctamente"
}
```

### `GET /tipopremio`

Obtiene todos los tipos de premios.

Ejemplo de respuesta:

```json
[
  {
    "id": 1,
    "nombre": "Económico",
    "descripcion": "Premios con incentivos económicos"
  },
  {
    "id": 2,
    "nombre": "No Económico",
    "descripcion": "Premios sin incentivos económicos"
  },
  // Más tipos de premios...
]
```

### `POST /tipopremio`

Crea un nuevo tipo de premio. Campos obligatorios: `nombre`, `descripcion`.

Ejemplo de uso:

```
POST http://127.0.0.1:3000/tipopremio
```

Cuerpo de la solicitud:

```json
{
  "name": "Mejor Proyecto del Mes",
  "description": "Sin descripción"
}
```

Respuesta de éxito:

```json
{
  "nombre": "Mejor Proyecto del Mes",
  "id": 4,
  "descripcion": "Sin descripción"
}
```

### `PUT/tipopremio`

Crea un nuevo tipo de premio. Campos obligatorios: `nombre`, `descripcion`.

Ejemplo de uso:

```
PUT http://127.0.0.1:3000/tipopremio/4
```

Cuerpo de la solicitud:

```json
{
  "name": "Mejor Proyecto del Mes",
  "description": "Reconocimiento al mejor proyecto del mes"
}
```

Respuesta de éxito:

```json
{
  "nombre": "Mejor Proyecto del Mes",
  "descripcion": "Reconocimiento al mejor proyecto del mes"
}
```

### `DELETE /tipopremio/:id`

Elimina un tipo de premio existente por su ID.

Ejemplo de uso:

```
DELETE http://127.0.0.1:3000/tipopremio/4
```

Respuesta de éxito:

```json
{
  "message": "Tipo de premio eliminado correctamente"
}
```

### `GET /categoriapremio`

Obtiene todas las categorías de premios.

Ejemplo de respuesta:

```json
[
  {
    "id": 1,
    "nombre": "Empleado del Mes",
    "descripcion": "Premios otorgados al empleado del mes"
  },
  {
    "id": 2,
    "nombre": "Aniversario Laboral",
    "descripcion": "Premios otorgados en aniversarios laborales"
  },
  // Más categorías de premios...
]
```

### `POST /categoriapremio`

Crea una nueva categoría de premios. Campos obligatorios: `nombre`, `descripcion`.

Ejemplo de uso:

```
POST http://127.0.0.1:3000/categoriapremio
```

Cuerpo de la solicitud:

```json
{
  "name": "Mejor Desarrollador"
}
```

Respuesta de éxito:

```json
{
  "nombre": "Mejor Desarrollador",
  "id": 5,
  "descripcion": "Sin descripción"
}
```

### `PUT/categoriapremio`

Crea una nueva categoría de premios. Campos obligatorios: `nombre`, `descripcion`.

Ejemplo de uso:

```
PUT http://127.0.0.1:3000/categoriapremio/5
```

Cuerpo de la solicitud:

```json
{
  "name": "Mejor Desarrollador",
  "description": "Reconocimiento al desarrollador mas destacado del proyecto"
}
```

Respuesta de éxito:

```json
{
  "nombre": "Mejor Desarrollador",
  "descripcion": "Reconocimiento al desarrollador mas destacado del proyecto"
}
```

### `DELETE /categoriapremio/:id`

Elimina una categoría de premio existente por su ID.

Ejemplo de uso:

```
DELETE http://127.0.0.1:3000/categoriapremio/3
```

Respuesta de éxito:

```json
{
  "message": "Categoría-premio eliminada correctamente"
}
```

### `GET /premio`

Obtiene todos los premios junto con sus tipos y categorías asociados.

Ejemplo de respuesta:

```json
[
  {
    "premio_id": 1,
    "premio_nombre": "Bono de Ventas",
    "premio_descripcion": "Bono adicional por ventas",
    "tipo_premio": "Económico",
    "categoria_premio": "Empleado del Mes"
  },
  {
    "premio_id": 2,
    "premio_nombre": "Día Libre Adicional",
    "premio_descripcion": "Día libre adicional por logros",
    "tipo_premio": "No Económico",
    "categoria_premio": "Empleado del Mes"
  },
  // Más premios...
]
```

### `POST /premio`

Crea un nuevo premio. Campos obligatorios: `nombre`, `descripcion`, `tipo_premio_id`, `categoria_premio_id`.

Ejemplo de uso:

```
POST http://127.0.0.1:3000/premio
```

Cuerpo de la solicitud:

```json
{
  "name": "Bono Mensual",
  "id-reward-type": 1,
  "id-reward-category": 1
}
```

Respuesta de éxito:

```json
{
  "nombre": "Bono Mensual",
  "tipo_premio_id": 1,
  "categoria_premio_id": 1,
  "id": 6,
  "descripcion": "Sin descripción"
}
```

### `PUT/premio`

Crea un nuevo premio. Campos obligatorios: `nombre`, `descripcion`, `tipo_premio_id`, `categoria_premio_id`.

Ejemplo de uso:

```
PUT http://127.0.0.1:3000/premio/6
```

Cuerpo de la solicitud:

```json
{
  "name": "Bono Mensual",
  "description": "Bono economico mensual para el empleado destacado",
  "id-reward-type": 1,
  "id-reward-category": 1
}
```

Respuesta de éxito:

```json
{
  "nombre": "Bono Mensual",
  "tipo_premio_id": 1,
  "categoria_premio_id": 1,
  "descripcion": "Bono economico mensual para el empleado destacado"
}
```

### `DELETE /premio/:id`

Elimina un premio existente por su ID.

Ejemplo de uso:

```
DELETE http://127.0.0.1:3000/premio/6
```

Respuesta de éxito:

```json
{
  "message": "Premio eliminado correctamente"
}
```

### `GET /empleado`

Obtiene todos los empleados.

Ejemplo de respuesta:

```json
[
  {
    "id": 1,
    "nombre": "Juan Pérez",
    "puesto": "Vendedor"
  },
  {
    "id": 2,
    "nombre": "Ana López",
    "puesto": "Gerente de Ventas"
  },
  // Más empleados...
]
```

### `POST /empleado`

Crea un nuevo empleado. Campos obligatorios: `nombre`, `edad`, `puesto`, `fecha_ingreso`.

Ejemplo de uso:

```
POST http://127.0.0.1:3000/empleado
```

Cuerpo de la solicitud:

```json
{
  "name": "Ivan Garces",
  "position": "Analista"
}
```

Respuesta de éxito:

```json
{
  "nombre": "Ivan Garces",
  "puesto": "Analista",
  "id": 6
}
```

### `PUT/empleado`

Crea un nuevo empleado. Campos obligatorios: `nombre`, `edad`, `puesto`, `fecha_ingreso`.

Ejemplo de uso:

```
PUT http://127.0.0.1:3000/empleado/6
```

Cuerpo de la solicitud:

```json
{
  "name": "Ivan Garces",
  "position": "Desarrollador"
}
```

Respuesta de éxito:

```json
{
  "nombre": "Ivan Garces",
  "puesto": "Desarrollador"
}
```

### 

### `DELETE /empleado/:id`

Elimina un empleado existente por su ID.

Ejemplo de uso:

```
DELETE http://127.0.0.1:3000/empleado/6
```

Respuesta de éxito:

```json
{
  "message": "Empleado eliminado correctamente"
}
```

### `GET /empleadopremio`

Obtiene todos los registros de premios otorgados a los empleados en orden alfabético.

Ejemplo de respuesta:

```json
[
  {
    "id": 2,
    "empleado_nombre": "Ana López",
    "premio": "Día Libre Adicional",
    "fecha": "2023-07-11T05:00:00.000Z"
  },
  {
    "id": 1,
    "empleado_nombre": "Juan Pérez",
    "premio": "Bono de Ventas",
    "fecha": "2023-07-10T05:00:00.000Z"
  },
  // Más registros de premios...
]
```

### `POST /empleadopremio`

Asigna un premio a un empleado. Campos obligatorios: `empleado_id`, `premio_id`, `fecha`.

Ejemplo de uso:

```
POST http://localhost:5015/empleadopremio
```

Cuerpo de la solicitud:

```json
{
  "id-employee": 1,
  "id-reward": 1,
  "date": "2023-07-20"
}
```

Respuesta de éxito:

```json
{
  "empleado_id": 1,
  "premio_id": 1,
  "fecha": "2023-07-20",
  "id": 6
}
```

### `PUT/empleadopremio`

Asigna un premio a un empleado. Campos obligatorios: `empleado_id`, `premio_id`, `fecha`.

Ejemplo de uso:

```
PUT http://localhost:5015/empleadopremio/6
```

Cuerpo de la solicitud:

```json
{
  "id-employee": 1,
  "id-reward": 2,
  "date": "2023-08-01"
}
```

Respuesta de éxito:

```json
{
  "empleado_id": 1,
  "premio_id": 2,
  "fecha": "2023-08-01"
}
```

### `DELETE /empleadopremio/:id`

Elimina un registro de premio otorgado a un empleado existente por su ID.

Ejemplo de uso:

```
DELETE http://localhost:5015/empleadopremio/3
```

Respuesta de éxito:

```json
{
  "message": "Empleado-premio eliminado correctamente"
}
```

## Agradecimientos

Este proyecto ha sido posible gracias a las siguientes dependencias:

- class-transformer
- class-validator
- dotenv
- express
- mysql2
- jose
- nodemon
- reflect-metadata
- typescript
