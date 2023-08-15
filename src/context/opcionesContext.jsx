import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState
} from 'react'

const ContextStore = createContext();

export const OpcionesProvider = ({ children }) => {

    const [openAgregar, setAgregar] = useState(false)
    const [buscar, setBuscar] = useState(false)
    const [editar, setEditar] = useState(false)
    const [open, setOpen] = useState(false)
    const [idContacto, setIdContacto] = useState()

    const value = useMemo(() => ({
        openAgregar, setAgregar, buscar, setBuscar,  editar, setEditar , idContacto, setIdContacto, open, setOpen
    }),
        [openAgregar, setAgregar, buscar, setBuscar, editar, setEditar, idContacto, setIdContacto, open, setOpen]
    )

    return (
        <ContextStore.Provider value={value}>
            {children}
        </ContextStore.Provider>
    )
}

export const useOpciones = () => {
    const context = useContext(ContextStore)
    if (context === void 0) {
        throw new Error('El contexto no esta definido')
    }
    return context
}