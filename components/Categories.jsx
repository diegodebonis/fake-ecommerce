import { useState, useEffect } from "react";
import { getCategories } from "../services";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold font-Inter border-b pb-4">
        Categorias
      </h3>
      {categories.map((item) => (
        <span
          className="cursor-pointer block pb-1 mb-1 capitalize"
          key={item.id}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}
