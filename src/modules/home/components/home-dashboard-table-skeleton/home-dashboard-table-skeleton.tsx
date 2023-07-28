import React, { FC } from "react";
import styles from "./home-dashboard-table-skeleton.module.sass";

interface HomeDashboardTableSkeletonProps { }

const HomeDashboardTableSkeleton: FC<HomeDashboardTableSkeletonProps> = () => {

  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((row) => (
        <tr
          className={styles.tr}
          key={`table-skeleton-row-${row}`}
        >
          {[1, 2, 3, 4].map((cell) => (
            <td className={styles.td} key={`table-skeleton-cell-${cell}`}>
              <div className={styles.skeleton} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default HomeDashboardTableSkeleton;

