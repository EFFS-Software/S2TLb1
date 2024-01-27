-- Active: 1706044690405@@localhost@5432@api_vehiculo
CREATE DATABASE api_vehiculo

create table tbl_vehiculo (
    id SERIAL PRIMARY KEY, marca VARCHAR(100), modelo VARCHAR(10), anio int, date_create TIMESTAMP DEFAULT current_timestamp, date_modify TIMESTAMP
);