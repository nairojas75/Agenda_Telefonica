import React, { useState, useEffect } from 'react';
import { ESTADO } from '../../models/estado.contacto';
import { AgendaContacto } from '../../models/agenda.class';
import ComponenteContacto from '../pure/contacto';
import FormularioContacto from './forms/formularioContacto';

const ListaContactos = () => {

    //creamos un nuevo contacto y llenamos la info del constructor
    const Contacto1 = new AgendaContacto('Nairo', 'Rojas', '23456789', true, ESTADO.CONECTADO);
    const Contacto2 = new AgendaContacto('Mery', 'Grimaldos', '87654543', false, ESTADO.DESCONECTADO);

    //estado del componente
    const [contactos, setContactos] = useState([Contacto1, Contacto2]);

    //Control del ciclo de vida
    useEffect(() => {
        console.log('El estado del contacto ha sido modificado')
        return () => {
            console.log('El contacto de la lista esta siendo desmontado')
        };
    }, [contactos]);

    //Aqui vamos a modificar el contacto
    function modificadoContacto(contacto) {
        console.log('Modifique este contacto:', contacto);
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos[index].modificado = !tempContactos[index].modificado;
        setContactos(tempContactos);
    }
    //función para borrar un contacto
    function borradoContacto(contacto) {
        console.log('Borrar este contacto:', contacto)
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos.splice(index, 1);
        setContactos(tempContactos);
    }

    //función para borrar un contacto
    function agregadoContacto(contacto) {
        console.log('Agregar este contacto:', contacto)
        const tempContactos = [...contactos];
        tempContactos.push(contacto);
        setContactos(tempContactos);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/**titulo */}
                    <div className='card-header p-2'>
                        <h2>
                            Lista de Contactos
                        </h2>
                    </div>
                    {/**cuerpo-contenido*/}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        {/**la tabla*/}
                        <table className='table p-2 table-hover'>
                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Apellido</th>
                                    <th scope='col'>Número</th>
                                    <th scope='col'>Estado</th>
                                    {/* <th scope='col'>Opción</th> */}
                                    <th scope='col'>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/**Iteracción de tareas usando .map y la clave del indice de la tarea para que se muesten en las filas de la tabla */}
                                {contactos.map((contacto, index) => {
                                    return (
                                        <ComponenteContacto
                                            key={index}
                                            contacto={contacto}
                                            modificar={modificadoContacto}
                                            borrar={borradoContacto}>
                                        </ComponenteContacto>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {<FormularioContacto agregar={agregadoContacto}></FormularioContacto>}
        </div>
    );
}

export default ListaContactos;
