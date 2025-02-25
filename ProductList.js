 
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name} - {product.category} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
