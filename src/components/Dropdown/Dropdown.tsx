import React from "react";
import styles from "./Dropdown.module.scss";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";

type DropdownProps = {
  name: string;
  dropdown: {
    id: number;
    link: string;
    name: string;
  }[];
};

const Dropdown: React.FC<DropdownProps> = ({ name, dropdown }) => {
  const [isActive, setIsActive] = React.useState(false);
  const ref = React.useRef(null);

  useOutsideClick(setIsActive, ref);

  return (
    <li
      className={`${styles.dropdown} ${isActive ? styles.dropdown_opened : ""}`}
    >
      <span
        className={styles.dropdown__text}
        onClick={() => setIsActive(!isActive)}
      >
        {name}
      </span>
      <div
        className={`${styles.dropdown__menu} ${
          isActive ? styles.dropdown__menu_opened : ""
        }`}
        ref={ref}
      >
        {dropdown.map((item: { id: number; link: string; name: string }) => (
          <Link to={item.link} key={item.id} className={styles.dropdown__link}>
            {item.name}
          </Link>
        ))}
      </div>
    </li>
  );
};

export default Dropdown;
