import { useState } from "react";

import { useOpciones } from "../../context/opcionesContext";
import { createContacto } from "../../db"

const CONTACTO = {
    nombre: '',
    telefono: ''
}

const AgregarContacto = () => {

    const { setAgregar, openAgregar } = useOpciones()
    const [contacto, setContacto] = useState(CONTACTO)

    const onSubmit = (event) => {
        event.preventDefault()
        createContacto(contacto).then(
            () => {
                setAgregar(() => false)
            }
           
        ).catch(error => console.log(error))
    }

    return (
        <>
            {openAgregar && <form onSubmit={onSubmit} >
                <code>{JSON.stringify(contacto)}</code>
                <input type="text" minLength={3} name="nombre" placeholder="Nombre" onInput={(eve) => setContacto({ ...contacto, nombre: eve.target.value })} required />
                <input type="tel" minLength={9} maxLength={9} name="telefono" placeholder="Telefono" onInput={(eve) => setContacto({ ...contacto, telefono: eve.target.value })} required />
                <button type="submit">Agregar</button>
            </form>}
        </>
    );
}
export default AgregarContacto;