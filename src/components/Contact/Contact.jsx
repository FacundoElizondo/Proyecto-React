import React from 'react';
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faAt, faHouse } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ data, visibilidad, visible }) => {

    const { nombre, apellido, telefono, direccion, mail } = data;


    return (
        <>
            <div className={`cards-container ${visible}`}>
                <div className="contact-container">

                    <span className='nombre'>
                        <FontAwesomeIcon className='fa-user' icon={faUser} />
                        <p>{nombre}</p>
                    </span>

                    <span className='apellido'>
                        <FontAwesomeIcon className='fa-user' icon={faUser} />
                        <p>{apellido}</p>
                    </span>

                    <span className='telefono'>
                        <FontAwesomeIcon className='fa-phone' icon={faPhone} />
                        <p>{telefono}</p>
                    </span>

                    <span className='mail'>
                        <FontAwesomeIcon className='fa-at' icon={faAt} />
                        <p>{mail}</p>
                    </span>

                    <span className='direccion'>
                        <FontAwesomeIcon className='fa-house' icon={faHouse} />
                        <p>{direccion}</p>
                    </span>

                <button className='btn-contact' onClick={visibilidad}>Cerrar</button>
                </div>
            </div>
        </>
    )
}
export { Contact }