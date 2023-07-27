import con from '../config/connection.js';
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';
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
    @Transform(({value})=>{
        let data= /^[0-9]+$/g.test(value)
        if(data && typeof value =="number"){
            return Number(value);
        }else if(value == null){
            throw {status:422, message: "El parametro id-reward-type es obligatorio"}
        }else{
            throw {status:406, message:"Mira bien el tipo de dato o la sintaxis, error en id-reward-type"}
        }
    })
    tipo_premio_id: number; 
    @Expose({ name: 'id-reward-category' })
    @Transform(({value})=>{
        let data= /^[0-9]+$/g.test(value)
        if(data && typeof value =="number"){
            return Number(value);
        }else if(value == null){
            throw {status:422, message: "El parametro id-reward-category es obligatorio"}
        }else{
            throw {status:406, message:"Mira bien el tipo de dato o la sintaxis, error en id-reward-category"}
        }
    })
    categoria_premio_id: number; 
    constructor(
      id:number,
      nombre: string = "1",
      descripcion: string,
      tipo_premio_id:number,
      categoria_premio_id:number) {
        this.id=id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tipo_premio_id=tipo_premio_id;
        this.categoria_premio_id=categoria_premio_id;
    }

    set guardar(body:object){
      con.query(/*sql*/`INSERT INTO premio SET ?`,
      body,
      (err, data, fields)=>{
       console.log(err)
       console.log(data)
       console.log(fields)
      });
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

    set eliminar(id: number) {
      con.query(
        /*sql*/ `DELETE FROM premio 
                  WHERE id = ?`,
        id,
      (err, data, fields)=>{
       console.log(err)
       console.log(data)
       console.log(fields)
      });
    }
}