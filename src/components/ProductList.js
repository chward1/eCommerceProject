import React, { useEffect, useState } from "react";

export default function ProductList() {
    const products = [
        {
            name: 'Russian River', 
            image: './src/images/russianRiver.jpeg',
            price: 10.00,
            alt:''
        }, 
        {
            name: 'Lavender Field', 
            image: './src/images/lavenderField.jpeg',
            price: 10.00,
            alt:''
        },
        {
            name: 'Ocean Grass', 
            image: './src/images/oceanGrass.jpeg',
            price: 10.00,
            alt:''
        }
    ]

    return <>
    <div className="row">
    {products.map((product)=>(<div className="col" id="product">
        <a href="#" className="card product-link">
            <img className="img-fluid photo-shop" src={require(`${product.image}`)} alt={product.alt} />
            <div className="product-description">
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        </a>
    </div>))}
</div>
</>
}
