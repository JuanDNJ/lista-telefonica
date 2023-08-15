const getContactos = async () => {
    const contactos = await fetch(`http://localhost:5174/guia-telefonica/contactos`)
    const json = await contactos.json()
    return json
}
const getContactoId = async (id) => {
    const contacto = await fetch(`http://localhost:5174/guia-telefonica/contactos/contacto/${id}`)
    const json = await contacto.json()
    return json
}

const createContacto = async (contacto) => {

    const nuevoContacto = await fetch(`http://localhost:5174/guia-telefonica/contactos`, {
        method: 'POST',
        body: JSON.stringify(contacto),
        headers: {
            'Content-Type': 'application/json'
        }
    })  
    const json = await nuevoContacto.json()
    return json
}
const removeContacto = async (id) => {
    const contacto = await fetch(`http://localhost:5174/guia-telefonica/contactos/contacto/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await contacto.json()
    return json
}
const editContacto = async (contacto) => {
    const contactoEditado = await fetch(`http://localhost:5174/guia-telefonica/contactos/contacto/${contacto.idContacto}`, { 
        method: 'PUT',
        body: JSON.stringify(contacto),
        headers: {
            'Content-Type': 'application/json'
        }

    })
    const json = await contactoEditado.json()
    return json
}

const searchContactoPorNombre = async (nombre) => {
    const contactoBuscado = await fetch(`http://localhost:5174/guia-telefonica/contactos/search-name/${nombre}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await contactoBuscado.json()
    return json
}
const searchContactoPorTelefono = async (telefono) => {
    console.log(telefono)
    const contactoBuscado = await fetch(`http://localhost:5174/guia-telefonica/contactos/search-phone/${telefono}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await contactoBuscado.json()
    return json
}
export {
    getContactos,
    getContactoId,
    createContacto,
    removeContacto,
    editContacto,
    searchContactoPorNombre,
    searchContactoPorTelefono
}