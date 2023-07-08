import { deleteProduct } from "../../helpers/ApiProductos"

export const BotonBorrar = ({id}) =>{
    const borrarProducto = () =>{
        deleteProduct(id).then(res => alert("Productio Borrado"))
    }
    return(
        <button onClick={borrarProducto}>Borrar Producto</button>
    )
}