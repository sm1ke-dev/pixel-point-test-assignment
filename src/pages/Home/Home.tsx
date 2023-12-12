import React from "react";
import Features from "../../components/Features/Features";
import Introduction from "../../components/Introduction/Introduction";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__background}></div>
      <Introduction />
      <Features />
    </main>
  );
};

export default Home;
