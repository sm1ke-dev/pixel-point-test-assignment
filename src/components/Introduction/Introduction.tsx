import React from "react";
import styles from "./Introduction.module.scss";
import document from "../../images/illustration.png";
import EmailForm from "../EmailForm/EmailForm";

const Introduction: React.FC = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__wrapper}>
        <h1 className={styles.intro__title}>
          Unlock valuable insights from subscription data
        </h1>
        <p className={styles.intro__subtitle}>
          Analyze your subscription ecosystem for cost optimization and risk
          management
        </p>
        <div className={`${styles.intro__form} ${styles.intro__form_big}`}>
          <EmailForm />
        </div>
      </div>
      <img src={document} alt="document" className={styles.intro__document} />
      <div className={`${styles.intro__form} ${styles.intro__form_small}`}>
        <EmailForm />
      </div>
    </section>
  );
};

export default Introduction;
