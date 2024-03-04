import React from 'react';
import "./ContactList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrash } from '@fortawesome/free-solid-svg-icons';

const ContactList = ({ props, onSelect, onDelete }) => {

  const { id, nombre, apellido } = props;

  
  const mostrarContacto = () => {
    onSelect({ props })
  }



  return (
    <>
      <li className='contact-card'>
        <FontAwesomeIcon className='fa-user' icon={faUser} />
        <span onClick={() => mostrarContacto()}>{nombre} {apellido}</span>
        <FontAwesomeIcon className='fa-trash' icon={faTrash} onClick={() => onDelete(id)} />
      </li>
    </>
  )
}

export { ContactList }