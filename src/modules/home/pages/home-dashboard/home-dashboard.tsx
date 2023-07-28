import React, { FC } from "react";
import styles from "./home-dashboard.module.sass";
import HomeDashboardContentWrapper from "../../components/home-dashboard-content-wrapper";

interface HomeDashboardProps { }

const HomeDashboard: FC<HomeDashboardProps> = () => {

  return (
    <div className={styles.container} data-testid="home-dashboard">

      <h1 className={styles.title}>
        Simple SKUs Management Dashboard
      </h1>

      <HomeDashboardContentWrapper />
    </div>
  );
}

export default HomeDashboard;
