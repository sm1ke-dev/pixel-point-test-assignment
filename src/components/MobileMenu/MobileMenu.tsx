import React from "react";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.scss";
import { MENU_ITEMS } from "../../utils/constants";
import Accordion from "../Accordion/Accordion";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: (i: boolean) => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [selected, setSelected] = React.useState(0);

  const toggle = (id: number) => {
    if (selected === id) {
      setSelected(0);
    }

    setSelected(id);
  };

  const handleClose = () => {
    setSelected(0);
    onClose(false);
  };

  return (
    <div
      className={`${styles.mobileMenu} ${
        isOpen ? styles.mobileMenu_opened : ""
      }`}
    >
      <button
        type="button"
        className={styles.mobileMenu__button}
        onClick={handleClose}
      >
        <span className={styles.mobileMenu__line1}></span>
        <span className={styles.mobileMenu__line2}></span>
      </button>
      <ul className={styles.mobileMenu__list}>
        {MENU_ITEMS.map((item) => {
          if (item.dropdown) {
            return (
              <Accordion
                key={item.id}
                {...item}
                selected={selected}
                onClick={toggle}
              />
            );
          } else {
            return (
              <li className={styles.mobileMenu__item} key={item.id}>
                <Link to={item.link} className={styles.mobileMenu__link}>
                  {item.name}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
