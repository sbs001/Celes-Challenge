import { useEffect, useState } from "react";
import { Product } from "../entities";

const useSearchProducts = (products: Product[]) => {
  const [filteredProductList, setFilteredProductList] = useState<Product[]>([]);
  const [hasNoResults, setHasNoResults] = useState<boolean>(false);

  useEffect(() => setFilteredProductList(products), [products]);

  const searchProducts = (value: string) => {
    const results = products.filter((prod) => (
      prod.title.toLowerCase().includes(value.toLowerCase()) ||
      prod.variants[0].sku.toLowerCase().includes(value.toLowerCase())
    ));
    setFilteredProductList(results);
    setHasNoResults(!results.length);
  }

  return {
    hasNoResults,
    searchProducts,
    filteredProductList
  }
}

export default useSearchProducts;
