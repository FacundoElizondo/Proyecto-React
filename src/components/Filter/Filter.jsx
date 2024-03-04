import React from 'react';
import './Filter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Filter = ({ setFilteredData }) => {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);


  /* traigo la data del local */
  useEffect(() => {
    const localStorageData = localStorage.getItem('contactos')
    if (localStorageData) {
      setData(JSON.parse(localStorageData));
    }
  }, [search]);

  /* la filtro */
  useEffect(() => {
    const filtered = data.filter(item => {
      return item.nombre.toLowerCase().startsWith(search.toLowerCase())
    });

    /* le doy el valor del filtro */
    setFilteredData(filtered);
  }, [data, search]);


  return (
    <>
      <div className="search-container">
        <input className='input-search' type="text" value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder='Busca un contacto por su nombre' />
      </div >
    </>
  )
}

export { Filter }