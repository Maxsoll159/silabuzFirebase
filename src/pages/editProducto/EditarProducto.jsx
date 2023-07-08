import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editProduct, getProductId } from "../../helpers/ApiProductos";
export const EditarProducto = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    getProductId(id).then((res) => setProducto({
        name: res.name,
        description: res.description,
        price: res.price,
        category: res.category
    }));
  }, [id]);

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };
  const crearProducto = (e) => {
    e.preventDefault();
    editProduct(id, producto).then(res => alert("Producto Editado"))
  };
  return (
    <div>
      <h1>Soy el editar Producto {id}</h1>
      <form action="" onSubmit={crearProducto}>
        <div>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            id="name"
            value={producto.name}
          />
        </div>
        <div>
          <label htmlFor="">Descripcion</label>
          <textarea
            type="text"
            onChange={handleChange}
            name="description"
            id="description"
            value={producto.description}
          />
        </div>
        <div>
          <label htmlFor="">Precio</label>
          <input
            type="number"
            onChange={handleChange}
            name="price"
            id="price"
            value={producto.price}
          />
        </div>
        <div>
          <label htmlFor="">Categoria</label>
          <input
            type="text"
            onChange={handleChange}
            name="category"
            id="category"
            value={producto.category}
          />
        </div>
        <button>Editar producto</button>
      </form>
    </div>
  );
};
