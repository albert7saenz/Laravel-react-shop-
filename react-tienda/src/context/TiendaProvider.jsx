import { createContext, useState } from "react"
import { categorias as categoriasDB} from "../data/categorias"

const TiendaContext = createContext();

const TiendaProvider = ({ children }) => {
    
    const [categorias, setCategoria] = useState(categoriasDB);
    const [categoriaActual, setCategorialActual] = useState(categorias[0])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategorialActual(categoria)
    }


    return (
        <TiendaContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
            }}
        >
        {children}   
        </TiendaContext.Provider>
    )
}

export{
    TiendaProvider
}

export default TiendaContext