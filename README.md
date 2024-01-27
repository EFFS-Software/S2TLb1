# S2TLb1

Semana 2 Laboratorio 1.

Nombre de BD: api_vehiculo

GET todos los registros: http://localhost:5500/api/vehiculo

GET por ID: http://localhost:5500/api/vehiculo/2

POST: http://localhost:5500/api/vehiculo
BODY
{
"marca": "Kia",
"modelo": "Sephia",
"anio": 2001
}

PUT: http://localhost:5500/api/vehiculo/1
{
"marca": "Kia",
"modelo": "Sephia",
"anio": 2016
}

DELETE: http://localhost:5500/api/vehiculo/2
