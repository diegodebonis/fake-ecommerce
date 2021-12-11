import { useState, useEffect } from "react";
import { getProducts } from "../services";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
      {products.map((item) => (
        <Product {...item} key={item.id} />
      ))}
    </div>
  );
}
