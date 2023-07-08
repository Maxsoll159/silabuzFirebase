import { Routes, Route } from "react-router-dom";
import { Principal } from "../pages/Principal/Principal";
import { ProductoId } from "../pages/products/ProductId";
import { Categoria } from "../pages/Categeorias/Categorias";
import { Navbar } from "../components/Navbar/Navbar";
import { CrearProducto } from "../pages/CrearProduct/CrearProducto";
import { EditarProducto } from "../pages/editProducto/EditarProducto";
import { Login } from "../pages/Login/Login";

export const RouterApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/:id" element={<ProductoId />} />
        <Route path="/categoria/:categoria" element={<Categoria />} />
        <Route path="/producto/newproduct" element={<CrearProducto />} />
        <Route path="/producto/editproduct/:id" element={<EditarProducto />} />
        <Route path="/tiendita/Login" element={<Login />} />
      </Routes>
    </>
  );
};
