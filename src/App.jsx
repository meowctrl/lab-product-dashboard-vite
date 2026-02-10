import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const initialProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  function handleRemove(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  const visibleProducts = products.filter((product) =>
    showInStockOnly ? product.inStock : true
  );

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button
        onClick={() => setShowInStockOnly(!showInStockOnly)}
        style={{ marginBottom: "20px" }}
      >
        {showInStockOnly ? "Show All" : "Show In-Stock Only"}
      </button>

      <ProductList products={visibleProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;