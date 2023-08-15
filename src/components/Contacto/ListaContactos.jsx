import Contacto from '../Contacto'
import OpEditar from '../Opciones/OpEditar'

import { useEffect, useState } from 'react';
import { useOpciones } from '../../context/opcionesContext';

import { getContactos } from '../../db';

const ListaContactos = () => {
 
    const [lista, setLista] = useState([])
    const { openAgregar } = useOpciones()
    const {editar} = useOpciones()
    const render = lista.map((contacto, index) => (
      <Contacto key={index} contacto={contacto}>
        <OpEditar contacto={contacto}/>
      </Contacto>
    ))

    useEffect(() => {
      getContactos().then(
        (contactos) => {
          setLista(() => contactos)
        }
      ).catch()
    }, [lista, editar])
  
  return (
    <>
      {!openAgregar && !editar && <ol>
        {render}
      </ol>}
    </>
  );
}
export default ListaContactos;