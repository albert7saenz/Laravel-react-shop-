import { createContext, useState, useEffect } from "react"
import { toast } from 'react-toastify'
import { categorias as categoriasDB} from "../data/categorias"

const TiendaContext = createContext();

const TiendaProvider = ({ children }) => {
    
    const [categorias, setCategoria] = useState(categoriasDB);
    const [categoriaActual, setCategorialActual] = useState(categorias[0])
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)

     
    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => ( producto.precio * producto.cantidad) + total, 0) 
        setTotal(nuevoTotal);
    }, [pedido])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategorialActual(categoria)
    }

    const handleClickModal = () => setModal(!modal)

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleAgregarPedido = ({categoria_id, ...producto}) => {

        if(pedido.some( pedidoState => pedidoState.id === producto.id)){
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState )
            setPedido(pedidoActualizado)
            toast.success('Guardado correctamente')

        }else{
            setPedido([...pedido,producto])
            toast.success('Agregado al pedido')
        }
    }

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id  !== id )
        setPedido(pedidoActualizado)
        toast.success('Eliminado del pedido')
        }

    
    return (
        <TiendaContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total
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