import express from 'express';
const app = express();

import {vehiculo} from './routes/apiVehiculo.js';

const port = 5500;
app.use(express.json());

app.use('/api/vehiculo', vehiculo);

app.listen(port, ()=>{
  console.log(`Escuchando en el puerto ${port}.`);
});