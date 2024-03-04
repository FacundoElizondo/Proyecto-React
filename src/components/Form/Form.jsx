import React, { useEffect } from 'react';
import "./Form.css";
import { useState } from 'react';

const Form = ({ agregarContacto }) => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mail, setMail] = useState('')
    const [direccion, setDireccion] = useState('');

    const [mensaje, setMensaje] = useState('');

    /* traigo contactos del local */
    const recuperoContactos = () => {
        let data = localStorage.getItem('contactos');
        if (data) {
            return JSON.parse(data);
        } else {
            return [];
        };
    };

    const [contactos, setContacto] = useState(recuperoContactos);

    const formulario = (event) => {

        event.preventDefault();

        if (nombre && apellido && telefono && direccion && mail) {

            let mensajeTxt = '¡Contacto registrado con éxito!';

            setMensaje(mensajeTxt);

            /* agregar contacto al usestate */
            let newContact = { nombre, apellido, telefono, mail, direccion };
            setContacto(() =>
                [...contactos, newContact]);

            /* funcion para agregar contacto en la lista */
            agregarContacto(newContact);
            
            setNombre('');
            setApellido('');
            setTelefono('');
            setMail('')
            setDireccion('');

        } else {
            alert('Por favor completa toda la información del contacto')
        };
    }



    return (
        <>
            <section className='form-section'>
                <h2 className='title'>¡Bienvenido! Esta es tu agenda de contactos ¡Intenga agregar uno!</h2>
                <form onSubmit={formulario}>
                    <input className='input-form' placeholder='Nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <input className='input-form' placeholder='Apellido' type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

                    <input className='input-form' placeholder='Teléfono' type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

                    <input className='input-form' placeholder='E-mail' type="email" value={mail} onChange={(e) => setMail(e.target.value)} />

                    <input className='input-form' placeholder='Dirección' type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />

                    <button>Agendar</button>
                </form>
                <p className='mensaje'>{mensaje}</p>
            </section>
        </>
    )
}

export { Form }