# API de países

Este proyecto es una API RESTful que permite obtener, crear, modificar y eliminar información de países almacenada en una base de datos MongoDB. La API se desarrolló utilizando Node.js, Express y Mongoose.

## Requisitos

- Node.js (v14 o superior)
- Docker y Docker Compose
- (Opcional) Un cliente de MongoDB (p. ej., MongoDB Compass)

## Instalación

1. Clone el repositorio:
  - https://github.com/Andy2299/BootcampActividad
2. Instale las dependencias del proyecto:
  - npm install
3. Construya y ejecute los contenedores de Docker:
  - docker-compose up --build


La aplicación estará disponible en `http://localhost:3000` y la base de datos MongoDB se ejecutará en el puerto predeterminado (27017).

## Uso

### Rutas y métodos

- `GET /api/countries`: Devuelve todos los países.
- `GET /api/countries?query`: Devuelve los países que coinciden con el query.
- `PUT /api/countries`: Modifica los campos de un país que coincida con el query. Si no se encuentra el país, crea uno nuevo.
- `DELETE /api/countries?query`: Elimina el (los) país(es) que coincidan con el query.

### Ejemplos de consultas

- Obtener todos los países: `GET http://localhost:3000/api/countries`
- Buscar países por nombre: `GET http://localhost:3000/api/countries?name=France`
- Modificar la población de un país: `PUT http://localhost:3000/api/countries` con un cuerpo JSON que incluya el query y los campos a modificar, por ejemplo:

```json
{
  "query": {
    "name": "France"
  },
  "update": {
    "population": 67000000
  }
}

