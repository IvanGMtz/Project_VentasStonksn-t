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
    constructor(
      id:number,
      nombre: string = "1",
      precio:number=0,
      descripcion: string,
      categoria_id: number=0) {
        this.id=id;
        this.nombre = nombre;
        this.precio=precio;
        this.descripcion = descripcion;
        this.categoria_id=categoria_id
    }

    set guardar(body:object){
      con.query(/*sql*/`INSERT INTO producto SET ?`,
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
        SELECT p.id AS producto_id, p.nombre AS nombre, c.nombre AS categoria, p.descripcion AS descripcion
        FROM producto AS p
        INNER JOIN categoria AS c ON p.categoria_id = c.id; 
        `);
        return rows;
      })();
    }

    set eliminar(id: number) {
      con.query(
        /*sql*/ `DELETE FROM producto 
                  WHERE id = ?`,
        id,
      (err, data, fields)=>{
       console.log(err)
       console.log(data)
       console.log(fields)
      });
    }
}