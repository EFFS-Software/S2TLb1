# S2TLb1 | Eduardo Flores | T32311172

Semana 2 Laboratorio 1.

Nombre de Base de Datos: api_vehiculo
Nombre de tabla: tbl_vehiculo

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
BODY
{
"marca": "Kia",
"modelo": "Sephia",
"anio": 2016
}

DELETE: http://localhost:5500/api/vehiculo/2
