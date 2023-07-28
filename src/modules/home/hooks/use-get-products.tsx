import { useEffect, useRef, useState } from "react";
import { fetchGetProducts } from "../services";
import { Product } from "../entities";

const useGetProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetchingError, setIsFetchingError] = useState<boolean>(false);
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    if (!isMounted.current) {
      setIsLoading(true);
      fetchGetProducts()
        .then((data) => setProducts(data))
        .catch(() => setIsFetchingError(true))
        .finally(() => setIsLoading(false));
    }
    isMounted.current = true;
  }, []);

  return {
    products,
    isLoading,
    isFetchingError
  }
}

export default useGetProducts;
