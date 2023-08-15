import { useEffect, useState } from "react"
import { useOpciones } from "../../context/opcionesContext"
import { getContactoId, editContacto } from "../../db"
const EditarContacto = () => {


    const {idContacto, editar, setEditar} = useOpciones()

    const [contacto, setContacto] = useState({ nombre: '', telefono: '' })



    const handlerInputName = (eve) => {
        setContacto({ ...contacto, nombre: eve.target.value })
    }
    const handlerInputTelefono = (eve) => {
        setContacto({ ...contacto, telefono: eve.target.value })
    }
    useEffect(() => {
        if (!idContacto) return
        getContactoId(idContacto).then(cont => {
            setContacto(() => cont[0])
        })
       
    }, [idContacto])

    const onSubmit = (event) => {
        event.preventDefault()
        editContacto(contacto).then(
            (cont) => {
                console.log(cont)
                setEditar(() => false)
            }
           
        ).catch(error => console.log(error))
    }
    return (
        <>
            {editar && <form onSubmit={onSubmit} >
            <code>{JSON.stringify(contacto)}</code>
            {contacto && <input type="text" minLength={3} name="nombre" placeholder="Nombre"  value={contacto.nombre} onChange={handlerInputName}  required />}
            {contacto &&<input type="tel" minLength={9} maxLength={9} name="telefono" placeholder="Telefono" onChange={handlerInputTelefono} value={contacto.telefono} required /> }
            <button type="submit">Agregar</button>
        </form>}
        </>
    );
}
export default EditarContacto;