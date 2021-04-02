import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function ProductList() {
    const [products, setProducts] = useState([])

    const loadData = async () => {
        const result = await axios('http://localhost:3003/products')
        setProducts(result.data.result)
    }
    useEffect(() => {
        loadData()
        return () => { }
    }, []);

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <p>{product.name}</p>
                </li>
            ))}
        </ul>
    );
}