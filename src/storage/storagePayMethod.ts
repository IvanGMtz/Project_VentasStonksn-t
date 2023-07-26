import con from '../config/connection.js';
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';
export class storagePayMethod{
    @Expose({ name: 'id' })
    id: number;
    @Expose({ name: 'name' })
    @IsString( {message: ()=>{throw {status: 406, message:"El formato del parametro name no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro name es obligatorio"}}})
    nombre: string;
    @Expose({ name: 'description' })
    @Transform(({ value }) => { if(/^[a-zA-Z0-9\s]*$/.test(value)) return (value) ? value : "Sin descripción" ; else throw {status: 406, message: "El formato del parametro description no es correcto"};}, { toClassOnly: true })
    descripcion: string;

    constructor(
      id:number,
      nombre: string = "1",
      descripcion: string) {
        this.id=id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    set guardar(body:object){
      con.query(/*sql*/`INSERT INTO modopago SET ?`,
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
        SELECT * 
        FROM modopago
        `);
        return rows;
      })();
    }

    set eliminar(id: number) {
      con.query(
        /*sql*/ `DELETE FROM modopago 
                  WHERE id = ?`,
        id,
      (err, data, fields)=>{
       console.log(err)
       console.log(data)
       console.log(fields)
      });
    }
}