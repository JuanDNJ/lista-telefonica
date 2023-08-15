import styles from './opciones.module.css'
import { useEffect, useState } from "react";
import { useOpciones } from "../../context/opcionesContext";
import { searchContactoPorNombre, searchContactoPorTelefono } from "../../db";
const OptBuscar = () => {
  const { buscar } = useOpciones()
  const [select, setSelect] = useState({
    nombre: false,
    telefono: false
  })

  const handlerSearchChangeNombre = (eve) => {
    eve.target.checked
    searchContactoPorNombre(eve.target.value)
      .then(record => {
        console.log(record)
      })
      .catch(error => console.log(error))
  }
  const handlerSearchChangeTelefono = (eve) => {
    eve.target.checked
    searchContactoPorTelefono(eve.target.value)
      .then(record => {
        console.log(record)
      })
      .catch(error => console.log(error))
  }
  useEffect(() => {
    if (!buscar) {
      setSelect(() => {
        return { nombre: false, telefono: false }
      })
    }

  }, [buscar])

  const handlerSearchSelect = (event) => {
    const { nombre, telefono } = event.target.dataset

    setSelect(() => {
      return {
        nombre: nombre ?? false,
        telefono: telefono ?? false
      }
    })

  }

  return (
    <>
      {buscar && <form>
        <section className={styles.opcionesBusqueda} >
          <div className={styles.optionInput}><input type="radio" name="select" data-nombre id="radio-nombre" onChange={handlerSearchSelect} /> <label htmlFor="radio-nombre">Buscar por nombre</label></div>
          <div className={styles.optionInput}><input type="radio" name="select" data-telefono id="radio-telefono" onChange={handlerSearchSelect} /> <label htmlFor="radio-telefono">Buscar por telefono</label></div>
        </section>
        {select.nombre && <input type='text' minLength={1} maxLength={20} name="nombre" id="nombre" placeholder='Buscar nombre' onChange={handlerSearchChangeNombre} />}
        {select.telefono && <input type='tel'  maxLength={12} name="telefono" id="telefono" placeholder='Buscar telefono' onChange={handlerSearchChangeTelefono} />}
      </form>
      }
    </>
  );
}
export default OptBuscar;