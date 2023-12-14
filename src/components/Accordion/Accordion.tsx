import React from "react";
import styles from "./Accordion.module.scss";
import { Link } from "react-router-dom";

type AccordionProps = {
  id: number;
  name: string;
  dropdown: {
    id: number;
    link: string;
    name: string;
  }[];
  selected: number;
  onClick: (id: number) => void;
};

const Accordion: React.FC<AccordionProps> = ({
  id,
  name,
  dropdown,
  selected,
  onClick,
}) => {
  console.log(id);

  return (
    <li className={`${styles.accordion}`}>
      <span
        className={`${styles.accordion__text} ${
          selected === id ? styles.accordion__text_opened : ""
        }`}
        onClick={() => onClick(id)}
      >
        {name}
      </span>
      <div
        className={`${styles.accordion__menu} ${
          selected === id ? styles.accordion__menu_opened : ""
        }`}
      >
        {dropdown.map((item: { id: number; link: string; name: string }) => (
          <Link to={item.link} key={item.id} className={styles.accordion__link}>
            {item.name}
          </Link>
        ))}
      </div>
    </li>
  );
};

export default Accordion;
