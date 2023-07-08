import { useEffect, useState } from "react";
import { getProducts } from "../../helpers/ApiProductos";
import { Link } from "react-router-dom";
import { BotonBorrar } from "../../components/botones/BotonBorrar";
export const Principal = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <div>
    <Link to="/producto/newproduct">Crear Producto</Link>
      {products.map((prod) => (
        <div key={prod.id}>
          <h1>{prod.name}</h1>
          <p>{prod.description}</p>
          <p>S/. {prod.price}</p>
          <p>{prod.category}</p>
          <Link to={prod.id}>Ver Detaelles</Link>
          <BotonBorrar id={prod.id} />
          <Link to={`/producto/editproduct/${prod.id}`}>Editar</Link>
        </div>
      ))}
    </div>
  );
};
