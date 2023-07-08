import { useState } from "react"
import { postProduct } from "../../helpers/ApiProductos"

export const CrearProducto = () =>{

    const [producto, setProducto] = useState({
        name: "",
        description: "",
        price: "",
        category: ""
    })
    const handleChange = (e) =>{
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }
    const crearProducto = (e) =>{
        e.preventDefault()
        postProduct(producto).then((res)=>{
            res ? alert("Producto creado") : alert("Error al crear producto")
        })
    }
    return (
        <div>
            <h1>Page crear nuevo producto</h1>
            <form action="" onSubmit={crearProducto}>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={handleChange} name="name" id="name" value={producto.name} />
                </div>
                <div>
                    <label htmlFor="">Descripcion</label>
                    <textarea type="text" onChange={handleChange} name="description" id="description" value={producto.description}  />
                </div>
                <div>
                    <label htmlFor="">Precio</label>
                    <input type="number" onChange={handleChange} name="price" id="price" value={producto.price} />
                </div>
                <div>
                    <label htmlFor="">Categoria</label>
                    <input type="text" onChange={handleChange} name="category" id="category" value={producto.category} />
                </div>
                <button>Crear producto</button>
            </form>
        </div>
    )
}