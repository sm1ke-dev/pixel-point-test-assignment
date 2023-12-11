import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
