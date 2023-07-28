import React, { FC } from "react";
import useGetProducts from "../../hooks/use-get-products";
import useSearchProducts from "../../hooks/use-search-products";
import HomeDashboardSearchBar from "../home-dashboard-search-bar";
import HomeDashboardErrorMessage from "../home-dashboard-error-message";
import HomeDashboardTable from "../home-dashboard-table";
import styles from "./home-dashboard-content-wrapper.module.sass";

interface HomeDashboardContentWrapperProps { }

const HomeDashboardContentWrapper: FC<HomeDashboardContentWrapperProps> = () => {
  const { products, isLoading, isFetchingError } = useGetProducts();
  const { filteredProductList, searchProducts, hasNoResults } = useSearchProducts(products);

  if (isFetchingError) return <HomeDashboardErrorMessage />
  
  return (
    <section className={styles.wrapper} data-testid="home-dashboard-content-wrapper">
      <HomeDashboardSearchBar searchProducts={searchProducts} />

      <HomeDashboardTable
        isLoading={isLoading}
        products={filteredProductList}
        hasNoResults={hasNoResults}
      />
    </section>

  );
}

export default HomeDashboardContentWrapper;
