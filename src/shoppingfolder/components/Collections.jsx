import React from 'react';

const Collections = ({ gentsFashion, addToCart }) => {
  const { title, products } = gentsFashion;

  return (
    <div className='collectionSection'>
      <h2>{title}</h2>

      <div className="menImages">
        {products.map((product) => (
          <div key={product.id} className="product-card" style={{ margin: '10px', display: 'inline-block' }}>
            <img src={product.image} alt={product.name} width="150" />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
