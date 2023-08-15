import styles from './styles.module.css';
import { useOpciones } from '../../context/opcionesContext';
const Contacto = ({ contacto, children }) => {
    const { editar } = useOpciones()
    return (
        <li className={styles.itemList}>
            <strong className={styles.icono}>
                {contacto.nombre.charAt(0).toUpperCase()}
            </strong>
            <div className={styles.infoContacto}>
                <strong>{contacto.nombre}</strong>
                <span>{contacto.telefono}</span>
            </div>
            {children}
        </li>
    );
}

export default Contacto;