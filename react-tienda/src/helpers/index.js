export const formateraDinero = cantidad => {
    return cantidad.toLocaleString('es-US',{
        style: 'currency',
        currency:'USD'
    })
}