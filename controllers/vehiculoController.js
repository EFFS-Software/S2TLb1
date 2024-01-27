import {db} from '../db/conn.js';

const getVehiculo = async (req, res)=>{
  const sql = `select *from tbl_vehiculo order by id`;
  const result = await db.query(sql);
  
  res.json(result);
};

const getIDVehiculo = async (req, res)=>{
	const params = [req.params.id];
  const sql = `select *from tbl_vehiculo where id = $1`;
  const result = await db.query(sql, params);

  res.json(result);
};

const postVehiculo = async (req, res)=>{
  const { marca, modelo, anio } = req.body;
  const params = [marca, modelo, anio];
  const sql = `insert into tbl_vehiculo ( marca, modelo, anio ) values ( $1, $2, $3 ) returning * `;
  const result = await db.query(sql , params);

  res.json(result);
};

const putVehiculo = async (req, res)=>{
	const id = req.params.id;
  const { marca, modelo, anio } = req.body;
  const params = [marca, modelo, anio, id];
	const sql = `update tbl_vehiculo set marca = $1, modelo = $2, anio = $3, date_modify = current_timestamp where id = $4 returning *`;
  const result = await db.query(sql, params)

  res.json(result);
};

const deleteVehiculo = async (req, res)=>{
	const params = [req.params.id];
  const sql = `delete from tbl_vehiculo where id = $1 returning *`;
  const result = await db.query(sql, params);

  res.json(result);
};

export { getVehiculo, getIDVehiculo, postVehiculo, putVehiculo, deleteVehiculo };