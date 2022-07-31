import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ESTADO } from '../../../models/estado.contacto';
import ComponenteContacto from '../../pure/contacto';
import { AgendaContacto } from '../../../models/agenda.class';


const FormularioContacto = ({ agregar }) => {

    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const telefonoRef = useRef('');

    const estadoRef = useRef(ESTADO.CONECTADO);

    function agregarContacto(e) {
        e.preventDefault();
        const nuevoContacto = new AgendaContacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            telefonoRef.current.value,
            false,
            estadoRef.current.value
        )
        agregar(nuevoContacto);
    }

    return (
        <form onSubmit={agregarContacto} className='d-flex justify-content align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nombreRef} id='inputNombre' type='text' className='form-control-lg' required autofocus placeholder='Nombre del contacto'></input>
                <input ref={apellidoRef} id='inputApellido' type='text' className='form-control-lg' required placeholder='Apellido del contacto'></input>
                <input ref={telefonoRef} id='inputTelefono' type='text' className='form-control-lg' required placeholder='Teléfono del contacto'></input>
                <label htmlFor='selectEstado' className='sr-only'>Estado</label>
                <select ref={estadoRef} defaultValue={ESTADO.CONECTADO} id='selectEstado'>
                    <option value={ESTADO.CONECTADO}>Conectado</option>
                    <option value={ESTADO.DESCONECTADO}>Desconectado</option>
                </select>
            </div>
            <button type='Submit' className='btn btn-success btn.lg ms-3'>
                Agregar
            </button>
        </form>
    );
};


FormularioContacto.propTypes = {
    agregar: PropTypes.func.isRequired
};


export default FormularioContacto;
