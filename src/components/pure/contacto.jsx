import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { AgendaContacto } from '../../models/agenda.class.js'
import '../../style/contacto.scss'
import { ESTADO } from '../../models/estado.contacto';

const ComponenteContacto = ({ contacto, modificar, borrar }) => {

  useEffect(() => {
    console.log("Contacto Creado")
    return () => {
      console.log(`Contacto: ${contacto.nombre} está siendo desmontado`)
    };
  }, [contacto]);

  /**
  funcion que retorna la INSIGNIA dependiendo el estado del contacto
  */
  function contactoEstadoColor() {
    switch (contacto.estado) {
      case ESTADO.CONECTADO:
        return (
          <h5 className='mb-2'>
            <span className='badge'>
            {modificarContactoIcono()}
              {/* {contacto.estado} */}
            </span>
          </h5>
        )
      case ESTADO.DESCONECTADO:
        return (
          <h5 className='mb-2'>
            <span className='badge'>
              {/* {contacto.estado} */}
              {modificarContactoIcono()}
            </span>
          </h5>
        )
      default:
        break;
    }
  }


  /**Funcion para los Iconos */
  function modificarContactoIcono() {
    if (contacto.modificado) {
      return (
        <i onClick={() => modificar(contacto)} className='bi-toggle-on puntero' style={{ color: 'green' }}>{ESTADO.CONECTADO}</i>
        
      )
    }
    else {
      return (
        <i onClick={() => modificar(contacto)} className='p-2 bi-toggle-off puntero' style={{ color: 'black' }}>{ESTADO.DESCONECTADO}</i>
      )
    }

  }



  return (
    <tr>
      <th><span className='m-2'>{contacto.nombre}</span></th>
      <td><span className='align-center'>{contacto.apellido}</span></td>
      <td><span className='align-middle'>{contacto.telefono}</span></td>
      <td className='pm-3'>{contactoEstadoColor()}</td>
      {/* <td className='pm-3'>{modificarContactoIcono()}</td> */}
      <td ><i className='bi-trash puntero' style={{ color: 'tomato' }} onClick={() => borrar(contacto)}></i></td>
    </tr>
  )
}

ComponenteContacto.propTypes = {
  contacto: PropTypes.instanceOf(AgendaContacto).isRequired,
  modificar: PropTypes.func.isRequired,
  borrar: PropTypes.func.isRequired
}

export default ComponenteContacto;
