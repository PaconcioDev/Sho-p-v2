import { createContext, useState, useEffect } from "react";
import { API_URL } from "../api/apiUrl";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ProductsContext.Provider value={{ products, search, setSearch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
