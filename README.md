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

2. Inicia los contenedores con Docker Compose:

```bash
docker-compose up -d
```

La API estará disponible en: http://localhost:3000/api

# Ejemplos de solicitudes para Postman

## Crear un nuevo vuelo

```
POST http://localhost:3000/api/flights
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
      "name": "Javier Soto",
      "hasConnections": false,
      "age": 28,
      "flightCategory": "Gold",
      "reservationId": "RES002",
      "hasCheckedBaggage": true
    }
  ]
}
```

## Obtener todos los vuelos

```
GET http://localhost:3000/api/flights
```

## Obtener un vuelo por ID

```
GET http://localhost:3000/api/flights/[ID_DEL_VUELO]
```

## Obtener un vuelo por código

```
GET http://localhost:3000/api/flights/code/IB2345
```

## Actualizar un vuelo

```
PUT http://localhost:3000/api/flights/[ID_DEL_VUELO]
Content-Type: application/json

{
  "flightCode": "IB2345",
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
      "id": 2,
      "name": "María García",
      "hasConnections": false,
      "age": 28,
      "flightCategory": "Gold",
      "reservationId": "RES002",
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

## Eliminar un vuelo

```
DELETE http://localhost:3000/api/flights/[ID_DEL_VUELO]
```

## Crear un vuelo con todos los pasajeros de muestra

```
POST http://localhost:3000/api/flights
Content-Type: application/json

{
  "flightCode": "AA789",
  "passengers": [
    {
      "id": 1,
      "name": "Juan Pérez",
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
    },
    {
      "id": 3,
      "name": "Pedro Rodríguez",
      "hasConnections": true,
      "age": 42,
      "flightCategory": "Black",
      "reservationId": "RES003",
      "hasCheckedBaggage": false
    },
    {
      "id": 4,
      "name": "Ana Martínez",
      "hasConnections": false,
      "age": 31,
      "flightCategory": "Normal",
      "reservationId": "RES004",
      "hasCheckedBaggage": true
    },
    {
      "id": 5,
      "name": "Carlos López",
      "hasConnections": true,
      "age": 50,
      "flightCategory": "Gold",
      "reservationId": "RES005",
      "hasCheckedBaggage": true
    }
  ]
}
```
