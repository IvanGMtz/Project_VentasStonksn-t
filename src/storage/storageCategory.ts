import con from '../config/connection.js';
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';
export class storageCategory{
    @Expose({ name: 'id' })
    id: number;
    @Expose({ name: 'name' })
    @IsString( {message: ()=>{throw {status: 406, message:"El formato del parametro name no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro name es obligatorio"}}})
    nombre: string;
    @Expose({ name: 'description' })
    @Transform(({ value }) => { if(/^[a-zA-Z0-9\s]*$/.test(value)) return (value) ? value : "Sin descripción" ; else throw {status: 406, message: "El formato del parametro description no es correcto"};}, { toClassOnly: true })
    descripcion: string;

    constructor(collection:Partial<storageCategory>) {
      Object.assign(this, collection)
      this.nombre = "0";
  }

  get all(){
    const cox = con.promise();
    try {
      return (async()=>{
        const [rows, fields] = await cox.execute(/*sql*/`
        SELECT * 
        FROM categoria
        `);
        return rows;
      })();
  } catch (error) {
      throw { status: 500, message: "Error al obtener las categorías" };
  }
  }

  async create() {
    const cox = con.promise();
    try {
        const [result] = await cox.execute(/*sql*/`
            INSERT INTO categoria (nombre, descripcion)
            VALUES (?, ?)
        `, [this.nombre, this.descripcion]);
        this.id = result.insertId;
        return this;
    } catch (error) {
        throw { status: 500, message: "Error al crear la categoría" };
    }
}

async update(id: number, name: string, descripcion: string) {
  const cox = con.promise();
  try {
      const [result] = await cox.execute(/*sql*/`
          UPDATE categoria
          SET nombre = ?, descripcion = ?
          WHERE id = ?
      `, [name, descripcion, id]);
      if (result.affectedRows === 0) {
          throw { status: 404, message: "Categoría no encontrada" };
      }
      this.nombre = name;
      this.descripcion = descripcion;
      return this;
  } catch (error) {
      throw { status: 500, message: "Error al actualizar la categoría" };
  }
}

async remove(id: number) {
  const cox = con.promise();
  try {
      const [result] = await cox.execute(/*sql*/`
          DELETE FROM categoria
          WHERE id = ?
      `, [id]);
      if (result.affectedRows === 0) {
          throw { status: 404, message: "Categoría no encontrada" };
      }
      return { message: "Categoría eliminada correctamente" };
  } catch (error) {
      throw { status: 500, message: "Error al eliminar la categoría" };
  }
}
}