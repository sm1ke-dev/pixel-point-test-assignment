import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <svg
        className={styles.header__burger}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M2 19L20 19"
          stroke="#FAF9FA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M2 11L20 11"
          stroke="#FAF9FA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M2 3L20 3"
          stroke="#FAF9FA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <ul className={styles.header__nav}>
        <li className={styles.header__item}>Integrations</li>
        <li className={styles.header__item}>Core Platform</li>
        <li className={styles.header__item}>Company</li>
        <li className={styles.header__item}>Resources</li>
      </ul>
      <Link to="#" className={styles.header__link}>
        Contact Sales
      </Link>
      <button className={styles.header__button}>Book a Demo</button>
    </header>
  );
};

export default Header;
