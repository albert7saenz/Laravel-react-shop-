import { createContext, useState } from "react"
import { categorias as categoriasDB} from "../data/categorias"

const TiendaContext = createContext();

const TiendaProvider = ({ children }) => {
    
    const [categorias, setCategoria] = useState(categoriasDB);
    console.log(categorias)
    return (
        <TiendaContext.Provider
            value={{
                categorias
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