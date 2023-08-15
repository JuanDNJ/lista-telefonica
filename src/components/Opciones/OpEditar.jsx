import styles from './opciones.module.css'
import { removeContacto } from "../../db";
import { useOpciones } from "../../context/opcionesContext";

const OpEditar = ({contacto}) => {
    const { setEditar, editar, setIdContacto } = useOpciones()
    const handlerEditar = () => {
       console.log(`Editar contacto ${contacto.idContacto}`)
       setEditar(() => true)
       setIdContacto(() => contacto.idContacto)
    }

    const handlerEliminar = () => {
        const promp = confirm(`¿Está seguro de eliminar el contacto ${contacto.nombre}?`)
        if(promp){
            removeContacto(contacto.idContacto).then(
                () => {
                    console.log(`Contacto con id = ${contacto.idContacto} eliminado`)
                    console.log(contacto)
                }
    
            ).catch(err => console.log(err))
        }
        
    }

    return (
        <div className={styles.opcionesEditar}>
            <button type='button' onClick={handlerEditar}>Edit</button> 
            <button type='button' onClick={handlerEliminar}>Delete</button>
        </div>
    );
}
export default OpEditar;
