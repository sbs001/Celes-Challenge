import React, { FC, useEffect, useRef, useState } from "react";
import { DASHBOARD_TABLE_COLUMNS } from "../../constants";
import { Product } from "../../entities";
import styles from "./home-dashboard-table.module.sass";
import HomeDashboardTableSkeleton from "../home-dashboard-table-skeleton";
import HomeDashboardSkuModalDetail from "../home-dashboard-sku-modal-detail";

interface HomeDashboardTableProps {
  products: Product[];
  isLoading: boolean;
  hasNoResults: boolean;
}

const HomeDashboardTable: FC<HomeDashboardTableProps> = ({
  isLoading, products, hasNoResults
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [skuSelected, setSkuSelected] = useState<Product | null>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      const tableHeight = `calc(100vh - ${wrapperRef.current.offsetTop + 24}px)`
      wrapperRef.current.style.height = tableHeight
    }
  }, [wrapperRef])

  return (
    <div className={styles.wrapper} ref={wrapperRef} data-testid="home-dashboard-table">
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr className={styles.tr}>
            {DASHBOARD_TABLE_COLUMNS.map((col) => (
              <th key={`home-dashboard-table-head-${col}`} className={styles.th}>
                {col}
              </th>
            ))}
          </tr>

          {hasNoResults && (
            <tr className={styles.noResults} data-testid="home-dashboard-no-results">
              <th colSpan={4} className={styles.th}>
                No results for your search. Please try again
              </th>
            </tr>
          )}
        </thead>

        {isLoading
          ? <HomeDashboardTableSkeleton />
          : (
            <tbody className={styles.body}>
              {products.map((product) => (
                <React.Fragment key={`home-dashboard-table-product-${product.id}`}>
                  {product.variants.map((variant) => (
                    <tr
                      className={styles.tr}
                      key={`home-dashboard-table-variant-${variant.sku}`}
                      onClick={() => setSkuSelected(product)}
                    >
                      <td className={styles.td}>{variant.sku}</td>
                      <td className={styles.td}>{product.title}</td>
                      <td className={styles.td}>{variant.inventory_quantity}</td>
                      <td className={styles.td}>{variant.old_inventory_quantity}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          )}
      </table>

      {!!skuSelected && (
        <HomeDashboardSkuModalDetail
          product={skuSelected}
          onClose={() => setSkuSelected(null)}
        />
      )}

    </div>
  );
}

export default HomeDashboardTable;
