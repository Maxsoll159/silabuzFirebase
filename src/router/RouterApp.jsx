import { Routes, Route } from "react-router-dom";
import { Principal } from "../pages/Principal/Principal";
import { ProductoId } from "../pages/products/ProductId";
import { Categoria } from "../pages/Categeorias/Categorias";
import { Navbar } from "../components/Navbar/Navbar";
import { CrearProducto } from "../pages/CrearProduct/CrearProducto";

export const RouterApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/:id" element={<ProductoId />} />
        <Route path="/categoria/:categoria" element={<Categoria />} />
        <Route path="/producto/newproduct" element={<CrearProducto />} />
      </Routes>
    </>
  );
};
