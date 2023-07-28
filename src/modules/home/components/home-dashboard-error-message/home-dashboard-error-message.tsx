import React, { FC } from "react";
import styles from "./home-dashboard-error-message.module.sass";

interface HomeDashboardErrorMessageProps { }

const HomeDashboardErrorMessage: FC<HomeDashboardErrorMessageProps> = () => {

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>We're sorry :(</h1>

      <p className={styles.body}>
        An error has occurred and we have not obtained your information.
      </p>

      <p className={styles.body}>
        Please refresh the page or try again later.
      </p>
    </div>
  );
}

export default HomeDashboardErrorMessage;
