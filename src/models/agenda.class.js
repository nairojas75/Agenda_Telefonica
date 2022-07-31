import { ESTADO } from "./estado.contacto";

//Class
export class AgendaContacto {
    nombre = '';
    apellido = '';
    telefono = '';
    modificado = false;
    estado = ESTADO.CONECTADO

    //Constructor
    constructor(nombre, apellido, telefono, modificado, estado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.modificado = modificado;
        this.estado = estado;
    }
}
