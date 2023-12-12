import React from "react";
import Introduction from "../../components/Introduction/Introduction";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Introduction />
    </main>
  );
};

export default Home;
