import React, { FC, useEffect, useRef } from "react";
import { DASHBOARD_TABLE_COLUMNS } from "../../constants";
import { Product } from "../../entities";
import styles from "./home-dashboard-table.module.sass";
import HomeDashboardTableSkeleton from "../home-dashboard-table-skeleton";

interface HomeDashboardTableProps {
  products: Product[];
  isLoading: boolean;
  hasNoResults: boolean;
}

const HomeDashboardTable: FC<HomeDashboardTableProps> = ({
  isLoading, products, hasNoResults
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      const tableHeight = `calc(100vh - ${wrapperRef.current.offsetTop + 24}px)`
      wrapperRef.current.style.height = tableHeight
    }
  }, [wrapperRef])

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr className={styles.tr}>
            {DASHBOARD_TABLE_COLUMNS.map((col) => (
              <th key={`home-dashboard-table-head-${col}`} className={styles.th}>
                {col}
              </th>
            ))}
          </tr>
        </thead>

        {hasNoResults && (
          <th colSpan={4} className={styles.noResults}>
            No results for your search. Please try again
          </th>
        )}

        {isLoading
          ? <HomeDashboardTableSkeleton />
          : (
            <tbody>
              {products.map((row) => (
                <React.Fragment key={`home-dashboard-table-row-${row.id}`}>
                  {row.variants.map((variant) =>
                    <tr
                      className={styles.tr}
                      key={`home-dashboard-table-variant-${variant.sku}`}
                    >
                      <td className={styles.td}>{variant.sku}</td>
                      <td className={styles.td}>{row.title}</td>
                      <td className={styles.td}>{variant.inventory_quantity}</td>
                      <td className={styles.td}>{variant.old_inventory_quantity}</td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          )}
      </table>
    </div>
  );
}

export default HomeDashboardTable;
