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

    constructor(
      id:number,
      nombre: string = "1",
      puesto:string="0") {
        this.id=id;
        this.nombre = nombre;
        this.puesto=puesto;
    }

    set guardar(body:object){
      con.query(/*sql*/`INSERT INTO empleado SET ?`,
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
        SELECT * FROM empleado; 
        `);
        return rows;
      })();
    }

    set eliminar(id: number) {
      con.query(
        /*sql*/ `DELETE FROM empleado 
                  WHERE id = ?`,
        id,
      (err, data, fields)=>{
       console.log(err)
       console.log(data)
       console.log(fields)
      });
    }
}