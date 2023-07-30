import con from '../config/connection.js';
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, IsNumber } from 'class-validator';
export class storageEmployee{
    @Expose({ name: 'id' })
    id: number;
    @Expose({ name: 'name' })
    @IsString( {message: ()=>{throw {status: 406, message:"El formato del parametro name no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro name es obligatorio"}}})
    nombre: string;
    @Expose({ name: 'position' })
    @IsString( {message: ()=>{throw {status: 406, message:"El formato del parametro position no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro position es obligatorio"}}})
    puesto: string;

    constructor(collection:Partial<storageEmployee>) {
      Object.assign(this, collection)
      this.nombre = "0";
      this.puesto="0";
  }

  get all(){
    const cox = con.promise();
    try {
      return (async()=>{
        const [rows, fields] = await cox.execute(/*sql*/`
        SELECT * 
        FROM empleado
        `);
        return rows;
      })();
  } catch (error) {
      throw { status: 500, message: "Error al obtener los empleados" };
  }
  }

  async create() {
    const cox = con.promise();
    try {
        const [result] = await cox.execute(/*sql*/`
            INSERT INTO empleado (nombre, puesto)
            VALUES (?, ?)
        `, [this.nombre, this.puesto]);
        this.id = result.insertId;
        return this;
    } catch (error) {
        throw { status: 500, message: "Error al crear el empleado" };
    }
}

async update(id: number, name: string, position: string) {
  const cox = con.promise();
  try {
      const [result] = await cox.execute(/*sql*/`
          UPDATE empleado
          SET nombre = ?, puesto = ?
          WHERE id = ?
      `, [name, position, id]);
      if (result.affectedRows === 0) {
          throw { status: 404, message: "Empleado no encontrado" };
      }
      this.nombre = name;
      this.puesto = position;
      return this;
  } catch (error) {
      throw { status: 500, message: "Error al actualizar el empleado" };
  }
}

async remove(id: number) {
  const cox = con.promise();
  try {
      const [result] = await cox.execute(/*sql*/`
          DELETE FROM empleado
          WHERE id = ?
      `, [id]);
      if (result.affectedRows === 0) {
          throw { status: 404, message: "Empleado no encontrado" };
      }
      return { message: "Empleado eliminado correctamente" };
  } catch (error) {
      throw { status: 500, message: "Error al eliminar el empleado" };
  }
}
}