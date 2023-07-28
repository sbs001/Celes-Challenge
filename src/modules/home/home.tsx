import React, { FC } from "react";
import logoImage from "../../assets/celes-logo.png";
import leftSideImage from "../../assets/left-side.png";
import rightSideimage from "../../assets/right-side.png";
import HomeDashboard from "./pages/home-dashboard";
import styles from "./home.module.sass";

interface HomeProps { }

const Home: FC<HomeProps> = () => {

  return (
    <>
      <HomeDashboard />
      <img src={logoImage} className={styles.logo} alt="C" />
      <img src={leftSideImage} className={styles.leftSideImg} alt="side-A" />
      <img src={rightSideimage} className={styles.righttSideImg} alt="side-B" />
    </>
  );
}

export default Home;
