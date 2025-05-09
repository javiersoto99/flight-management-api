# Flight Management API

Este proyecto es una API REST para la gestión de vuelos (NestJS, TypeScript y MongoDB).

## Estructura de datos

La API maneja una colección de vuelos (Flights) con la siguiente estructura:

```typescript
{
  "flightCode": string,
  "passengers": Array
}
```

## Requisitos previos

- Docker y Docker Compose
- Node.js (para desarrollo local)
- Postman u otra herramienta similar para probar la API

## Configuración y ejecución

### Utilizando Docker

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/flight-management-api.git
cd flight-management-api
```

Variables de entorno:

```
# API Config
API_PORT=3000

# MongoDB Config
MONGODB_PORT=27017
MONGODB_ROOT_USERNAME=admin
MONGODB_ROOT_PASSWORD=password
MONGODB_DATABASE=flights
```

2. Inicia los contenedores con Docker Compose:

```bash
docker-compose up -d
```

La API estará disponible en: http://localhost:3000/api

# Ejemplos de solicitudes para Postman

Base URL: http://localhost:3000/api/flights

## Vuelos

### Obtener todos los vuelos

```bash
GET http://localhost:3000/api/flights
```

### Obtener un vuelo por ID

```bash
GET http://localhost:3000/api/flights/{flightId}
```

### Obtener un vuelo por código

```bash
GET http://localhost:3000/api/flights/code/{flightCode}
```

### Crear un nuevo vuelo

```bash
POST http://localhost:3000/api/flights
```

```bash
Content-Type: application/json
{
  "flightCode": "IB2345",
  "passengers": [
    {
      "id": 1,
      "name": "Javier Pérez",
      "hasConnections": true,
      "age": 35,
      "flightCategory": "Platinum",
      "reservationId": "RES001",
      "hasCheckedBaggage": true
    },
    {
      "id": 2,
      "name": "María García",
      "hasConnections": false,
      "age": 28,
      "flightCategory": "Gold",
      "reservationId": "RES002",
      "hasCheckedBaggage": true
    }
  ]
}
```

### Actualizar un vuelo (reemplazo parcial)

```bash
¨PATCH http://localhost:3000/api/flights/{flightId}
```

```bash
Content-Type: application/json
{
  "flightCode": "IB2345",
  "passengers": [
    "passengers": [
    {
      "id": 1,
      "name": "Juan Pérez Actualizado",
      "hasConnections": true,
      "age": 36,
      "flightCategory": "Platinum",
      "reservationId": "RES001",
      "hasCheckedBaggage": true
    },
    {
      "id": 3,
      "name": "Pedro Rodríguez",
      "hasConnections": true,
      "age": 42,
      "flightCategory": "Black",
      "reservationId": "RES003",
      "hasCheckedBaggage": false
    }
  ]
}
```

### Eliminar un vuelo

```bash
DELETE http://localhost:3000/api/flights/{flightId}
```

## Pasajeros (dentro de un vuelo)

### Añadir un pasajero a un vuelo

```bash
POST http://localhost:3000/api/flights/{flightId}/passengers

Content-Type: application/json
{
  "id": 3,
  "name": "Pedro Rodríguez",
  "hasConnections": true,
  "age": 42,
  "flightCategory": "Black",
  "reservationId": "RES003",
  "hasCheckedBaggage": false
}
```

### Actualizar un pasajero existente

```bash
PATCH http://localhost:3000/api/flights/{flightId}/passengers/{passengerId}
Content-Type: application/json
{
"name": "Pedro R. Actualizado",
"age": 43,
"hasCheckedBaggage": true
}
```

### Eliminar un pasajero de un vuelo

```bash
DELETE http://localhost:3000/api/flights/{flightId}/passengers/{passengerId}

```

**Nota:**

- `{flightId}` debe ser el \_id generado por Mongo (p. ej. 60c72b2f9b1d8e1f4c8a9f0e).
- `{flightCode}` es el código único de vuelo (p. ej. IB2345).
- `{passengerId}` es el campo id que asignas manualmente a cada pasajero (p. ej. 3).

# Posibles mejoras

- Configurar mejor timestamp para que por default no sea UTC, si no que America/Santiago
- Configurar hotreload para cambios en la api por Docker
- (Posiblemente) Separar Passenger a otro recurso, con sus propios métodos CRUD y validaciones
