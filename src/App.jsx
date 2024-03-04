import { useEffect, useState } from 'react'
import './App.css'
import { Contact, Filter, Form, ContactList } from "./components/index"

function App() {
  const [selectedContact, setSelectedContact] = useState('');
  const [contactos, setContactos] = useState([]);
  const [visible, setVisible] = useState('visible-off')
  const [filteredData, setFilteredData] = useState(contactos);

  /* traigo la data del local storage */
  const traerContactos = () => {
    let data = localStorage.getItem('contactos');
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  useEffect(() => {
    setContactos(traerContactos());
  }, []);

  /* funcion para seleccionar el contacto individualmente */
  const select = (contact) => {
    setSelectedContact(contact);
    if (visible === 'visible-off') {
      visibilidad()
    }
  };

  /* funcion para agregar contactos */
  const agregarContacto = (nuevoContacto) => {
    /* uso el prevState para guardar el estado anterior del contacto y luego en esa misma
     funcion lo guardo en el storage al mismo tiempo para no esperar la actualizacion del estado*/
    setFilteredData((prevState) => {
      nuevoContacto.id = parseInt(Math.random() * 1000);
      const prueba = [
        ...prevState, nuevoContacto
      ]
      localStorage.setItem('contactos', JSON.stringify(prueba));
      setContactos(prueba)
      console.log(prueba)
      return prueba
    });

  };

  /* funcion para eliminar contactos */
  const eliminarContacto = (contactId) => {
    const nuevosContactos = contactos.filter((contacto) => contacto.id !== contactId);
    setFilteredData(nuevosContactos);
    setContactos(nuevosContactos)
    setTimeout(() => {
      localStorage.setItem('contactos', JSON.stringify(nuevosContactos));
    }, 0);

  }

  /* funcion para que se muestre o no la tarjeta de contacto */
  const visibilidad = () => {
    if (visible === 'visible-on') {
      setVisible('visible-off')
    } else {
      setVisible('visible-on')
    }
  }

  return (
    <>
      <Form agregarContacto={agregarContacto} />
      <section className='contactos'>
        <div className='contact-list'>
          <Filter setFilteredData={setFilteredData} />
          <div className="list-box" >
            {filteredData.map((contacto) => (
              <ContactList
                key={contacto.id} props={contacto} onSelect={select} onDelete={eliminarContacto} />
            ))}
          </div>
        </div>
        <div className='contact-box'>
          {selectedContact && <Contact data={selectedContact.props} visibilidad={visibilidad} visible={visible} />}

        </div>
      </section>


    </>
  )
}

export default App
