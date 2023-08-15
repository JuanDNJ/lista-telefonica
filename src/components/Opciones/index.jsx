import { useOpciones } from "../../context/opcionesContext";
const Opciones = () => {
    
    const { setAgregar, setBuscar, setOpen, openAgregar, buscar} = useOpciones()
    return (
        <aside className='opciones'>
            <strong>Opciónes</strong>
            <button type='button' onClick={() => {
                setAgregar(() => !openAgregar)
                setBuscar(() => false)
            }}>Add</button>
            <button type='button' onClick={() => {
                setBuscar(() => !buscar)
                setAgregar(() => false)
            }}>🔍</button>
            {/* <button type='button'>☰</button> */}
        </aside>
    );
}
export default Opciones;
