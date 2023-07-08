import { useState } from "react"

export const CrearProducto = () =>{

    const [producto, setProducto] = useState({
        name: "",
        description: "",
        price: "",
        category: ""
    })
    const handleChange = () =>{
        
    }
    return (
        <div>
            <h1>Page crear nuevo producto</h1>
            <form action="">
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="">Descripcion</label>
                    <textarea type="text" name="description" id="description" />
                </div>
                <div>
                    <label htmlFor="">Precio</label>
                    <input type="number" name="price" id="price" />
                </div>
                <div>
                    <label htmlFor="">Categoria</label>
                    <input type="text" name="category" id="category" />
                </div>
                <button>Crear producto</button>
            </form>
        </div>
    )
}