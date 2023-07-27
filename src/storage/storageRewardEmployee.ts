import con from '../config/connection.js';
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsNumber } from 'class-validator';
export class storageRewardEmployee{
    @Expose({ name: 'id' })
    id: number;
    @Expose({ name: 'id-employee' })
    @IsNumber({}, {message: ()=>{throw {status:406, message:"El formato del parametro id-employee no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id-employee es obligatorio"}}})
    empleado_id: number;
    @Expose({ name: 'id-reward' })
    @IsNumber({}, {message: ()=>{throw {status:406, message:"El formato del parametro id-reward no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id-reward es obligatorio"}}})
    premio_id: number;
    @Expose({ name: 'date' })
    @Transform(({value})=>{
        let data= /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[01])$/.test(value)
        if(data && typeof value =="string"){
            return String(value);
        }else if(value == null){
            throw {status:422, message: "El parametro date es obligatorio"}
        }else{
            throw {status:406, message:"Mira bien el tipo de dato o la sintaxis(YYYY-MM-DD), error en date"}
        }
    })
    fecha: string;
    
    constructor(
      id:number,
      empleado_id: number = 0,
      premio_id:number=0,
      fecha: string="1999-12-24") {
        this.id=id;
        this.empleado_id=empleado_id;
        this.premio_id=premio_id;
        this.fecha=fecha;
    }

    set guardar(body:object){
      con.query(/*sql*/`INSERT INTO empleadopremio SET ?`,
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
        SELECT  ep.id as id,e.nombre AS empleado_nombre,p.nombre AS premio, ep.fecha as fecha
        FROM empleadopremio AS ep
        INNER JOIN premio AS p ON ep.premio_id = p.id
        INNER JOIN empleado AS e ON ep.empleado_id = e.id
        ORDER BY empleado_nombre;
        `);
        return rows;
      })();
    }

    set eliminar(id: number) {
      con.query(
        /*sql*/ `DELETE FROM empleadopremio 
                  WHERE id = ?`,
        id,
      (err, data, fields)=>{
       console.log(err)
       console.log(data)
       console.log(fields)
      });
    }
}