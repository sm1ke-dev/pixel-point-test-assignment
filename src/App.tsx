import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
