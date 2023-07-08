import { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { getProductId } from '../../helpers/ApiProductos';
export const ProductoId = () =>{
    const {id} = useParams()
    const [productId, setProductId] = useState({})
    useEffect(()=>{
        getProductId(id).then(res => setProductId(res))
    }, [id])

    return(
        <div>
            <h1>Soy la pagina producto {id}</h1>
            <h2>{productId.name}</h2>
            <p>{productId.description}</p>
            <p>{productId.category}</p>
            <p>S/ .{productId.price}</p>
        </div>
    )
}