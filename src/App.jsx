import './assets/css/App.css'
import { useState} from 'react'
import Opciones from './components/Opciones'
import OptBuscar from './components/Opciones/OptBuscar'
import AgregarContacto from './components/Contacto/AgregarContacto'
import ListaContactos from './components/Contacto/ListaContactos'
import EditarContacto from './components/Contacto/EditarContacto'

function App() {
  const [permitir, setPermitir] = useState(true)

  const handlerPermitir = () => {
    setPermitir(true)
  }

  // Pintamos el componente
  return (
    <>
      <section className='guia'>
        <h1>Guia Telefonica</h1>
        <Opciones  />
        <OptBuscar />
        <ListaContactos /> 
        <EditarContacto />
        <AgregarContacto />
      </section>
      {!permitir && <footer className='permiso-usuario'>
        <p>
          Estimado usuario, para mejorar tu experiencia en nuestra aplicación, nos gustaría solicitar tu permiso para utilizar la base de datos indexDb en tu dispositivo. Esto nos permitirá almacenar información localmente y mejorar el rendimiento de la aplicación. ¿Nos das tu consentimiento para utilizar esta función? Gracias por tu colaboración.
        </p>
        <button type='button' onClick={handlerPermitir}>Permitir</button>
      </footer>
      }
    </>
  )
}

export default App
