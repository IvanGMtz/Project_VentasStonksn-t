import con from '../config/connection.js';
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, IsNumber } from 'class-validator';
export class storageReward{
    @Expose({ name: 'id' })
    id: number;
    @Expose({ name: 'name' })
    @IsString( {message: ()=>{throw {status: 406, message:"El formato del parametro name no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro name es obligatorio"}}})
    nombre: string;
    @Expose({ name: 'description' })
    @Transform(({ value }) => { if(/^[a-zA-Z0-9\s]*$/.test(value)) return (value) ? value : "Sin descripción" ; else throw {status: 406, message: "El formato del parametro description no es correcto"};}, { toClassOnly: true })
    descripcion: string;
    @Expose({ name: 'id-reward-type' })
    @IsNumber({}, {message: ()=>{throw {status:406, message:"El formato del parametro id-reward-type no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id-reward-type es obligatorio"}}})
    tipo_premio_id: number; 
    @Expose({ name: 'id-reward-category' })
    @IsNumber({}, {message: ()=>{throw {status:406, message:"El formato del parametro id-reward-category no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id-reward-category es obligatorio"}}})
    categoria_premio_id: number;
    constructor(collection:Partial<storageReward>) {
          Object.assign(this, collection)
          this.nombre = "0";
          this.tipo_premio_id=1;
          this.categoria_premio_id=1;
      }
    
      async create() {
        const cox = con.promise();
        try {
            const [result] = await cox.execute(/*sql*/`
                INSERT INTO premio (nombre, descripcion, tipo_premio_id, categoria_premio_id)
                VALUES (?, ?, ?, ?)
            `, [this.nombre, this.descripcion, this.tipo_premio_id, this.categoria_premio_id]);
            this.id = result.insertId;
            return this;
        } catch (error) {
            throw { status: 500, message: "Error al crear premio" };
        }
    }
    
    async update(id: number, name: string, descripcion: string, id_reward_type:number, id_reward_category:number) {
      const cox = con.promise();
      try {
          const [result] = await cox.execute(/*sql*/`
              UPDATE premio
              SET nombre = ?, descripcion = ?, tipo_premio_id = ?, categoria_premio_id = ?  
              WHERE id = ?
          `, [name, descripcion, id_reward_type, id_reward_category, id]);
          if (result.affectedRows === 0) {
              throw { status: 404, message: "Premio no encontrado" };
          }
          this.nombre = name;
          this.descripcion = descripcion;
          this.tipo_premio_id=id_reward_type;
          this.categoria_premio_id=id_reward_category;
          return this;
      } catch (error) {
          throw { status: 500, message: "Error al actualizar el premio" };
      }
    }
    
    async remove(id: number) {
      const cox = con.promise();
      try {
          const [result] = await cox.execute(/*sql*/`
              DELETE FROM premio
              WHERE id = ?
          `, [id]);
          if (result.affectedRows === 0) {
              throw { status: 404, message: "Premio no encontrado" };
          }
          return { message: "Premio eliminado correctamente" };
      } catch (error) {
          throw { status: 500, message: "Error al eliminar el premio" };
      }
    }

    get all(){
      const cox = con.promise();
      return (async()=>{
        const [rows, fields] = await cox.execute(/*sql*/`
        SELECT
        p.id AS premio_id,
        p.nombre AS premio_nombre,
        p.descripcion AS premio_descripcion,
        tp.nombre AS tipo_premio,
        cp.nombre AS categoria_premio
        FROM premio AS p
        INNER JOIN tipopremio AS tp ON p.tipo_premio_id = tp.id
        INNER JOIN categoriapremio AS cp ON p.categoria_premio_id = cp.id;
                `);
        return rows;
      })();
    }
}