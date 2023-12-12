import React from "react";
import Feature from "../Feature/Feature";
import styles from "./Features.module.scss";
import { FEATURES_LIST } from "../../utils/constants";

const Features: React.FC = () => {
  return (
    <ul className={styles.features}>
      {FEATURES_LIST.map((item) => (
        <Feature key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default Features;
