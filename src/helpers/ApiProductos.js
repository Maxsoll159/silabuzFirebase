import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/Firebase";

export const getProducts = async () => {
  const productos = await getDocs(collection(db, "products"));
  const data = productos.docs.map((valor) => {
    return { id: valor.id, ...valor.data() };
  });
  return data;
};

export const getProductId = async (id) => {
  const product = await getDoc(doc(db, "products", id));
  return { id: product.id, ...product.data() };
};

export const getProductCategory = async (categoria) => {
  const product = await getDocs(
    query(collection(db, "products"), where("category", "==", categoria))
  );
  const data = product.docs.map((valor) => {
    return { id: valor.id, ...valor.data() };
  });
  return data;
};
