import { useState, useEffect, useCallback } from "react";

const API_URL = "http://localhost:3000/api/v1/product/products";

/**
 * Custom hook yo gufetch products zose zivuye muri backend.
 * Isubiza: { products, loading, error, refetch }
 */
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Ikibazo cya server: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      // Backend isubiza { message: "...", data: [...] }
      const data = Array.isArray(result) ? result : result.data || [];
      setProducts(data);
    } catch (err) {
      setError(err.message || "Ntibyashobotse gufetch products. Reba ko server irukuriwe.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
};

export default useProducts;
