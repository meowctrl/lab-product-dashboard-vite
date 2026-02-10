import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div
      className={
        product.inStock
          ? styles.card
          : `${styles.card} outOfStockClass`
      }
    >
      <h2>{product.name}</h2>

      <p>Price: {product.price}</p>

      <p>
        {product.inStock ? (
          <span className={styles.inStock}>In Stock</span>
        ) : (
          <span className={styles.outText}>Out of Stock</span>
        )}
      </p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;