import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductCategory } from "../../helpers/ApiProductos";
export const Categoria = () => {
  const { categoria } = useParams();
  const [productCategori, setProductCategori] = useState([]);
  useEffect(() => {
    getProductCategory(categoria).then((res) => setProductCategori(res));
  }, [categoria]);
  return (
    <div>
      <h1>Soy la page Categoria {categoria}</h1>
      {productCategori.map((cate) => (
        <div key={cate.id}>
          <h2> {cate.name}</h2>
          <p>{cate.category}</p>
          <p>S/. {cate.price}</p>
        </div>
      ))}
    </div>
  );
};
