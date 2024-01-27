import pg from 'pg-promise';
const pgp = pg();
const pass="Conexion2023#$";
const Pass = encodeURIComponent(pass);
const cnstr = `postgresql://postgres:${Pass}@localhost:5432/api_vehiculo`;
const db = pgp(cnstr);

db.connect()
  .then( ()=>{
    console.log(`Conexión exitosa`);
  })
  .catch( (err)=>{
    console.log(`Error de conexion: ${err}`);
  })
export {db};