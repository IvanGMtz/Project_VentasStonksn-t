import con from '../config/connection.js';
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, IsNumber } from 'class-validator';
export class storageProducts{
    @Expose({ name: 'id' })
    id: number;
    @Expose({ name: 'name' })
    @IsString( {message: ()=>{throw {status: 406, message:"El formato del parametro name no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro name es obligatorio"}}})
    nombre: string;
    @Expose({ name: 'price' })
    @IsNumber({}, {message: ()=>{throw {status:406, message:"El formato del parametro price no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro price es obligatorio"}}})
    precio: number;
    @Expose({ name: 'description' })
    @Transform(({ value }) => { if(/^[a-zA-Z0-9\s]*$/.test(value)) return (value) ? value : "Sin descripción" ; else throw {status: 406, message: "El formato del parametro description no es correcto"};}, { toClassOnly: true })
    descripcion: string;
    @Expose({ name: 'id-categoria' })
    @IsNumber({}, {message: ()=>{throw {status:406, message:"El formato del parametro id-categoria no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id-categoria es obligatorio"}}})
    categoria_id: number;
    constructor(collection:Partial<storageProducts>) {
      Object.assign(this, collection)
      this.nombre = "0";
      this.precio=1;
      this.categoria_id=1;
  }

  get all(){
    const cox = con.promise();
    try {
      return (async()=>{
        const [rows, fields] = await cox.execute(/*sql*/`
        SELECT * 
        FROM producto
        `);
        return rows;
      })();
  } catch (error) {
      throw { status: 500, message: "Error al obtener los productos" };
  }
  }

  async create() {
    const cox = con.promise();
    try {
        const [result] = await cox.execute(/*sql*/`
            INSERT INTO producto (nombre,precio, descripcion, categoria_id)
            VALUES (?, ?, ?, ?)
        `, [this.nombre,this.precio, this.descripcion, this.categoria_id]);
        this.id = result.insertId;
        return this;
    } catch (error) {
        throw { status: 500, message: "Error al crear el producto" };
    }
}

async update(id: number, name: string,price:number,descripcion: string,categoria_id:number) {
  const cox = con.promise();
  try {
      const [result] = await cox.execute(/*sql*/`
          UPDATE producto
          SET nombre = ?,precio=?, descripcion = ?, categoria_id=?  
          WHERE id = ?
      `, [name,price, descripcion, categoria_id, id]);
      if (result.affectedRows === 0) {
          throw { status: 404, message: "Producto no encontrado" };
      }
      this.nombre = name;
      this.precio=price;
      this.descripcion = descripcion;
      this.categoria_id=categoria_id;
      return this;
  } catch (error) {
      throw { status: 500, message: "Error al actualizar el producto" };
  }
}

async remove(id: number) {
  const cox = con.promise();
  try {
      const [result] = await cox.execute(/*sql*/`
          DELETE FROM producto
          WHERE id = ?
      `, [id]);
      if (result.affectedRows === 0) {
          throw { status: 404, message: "Producto no encontrado" };
      }
      return { message: "Producto eliminado correctamente" };
  } catch (error) {
      throw { status: 500, message: "Error al eliminar el producto" };
  }
}
}