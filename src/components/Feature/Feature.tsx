import React from "react";
import styles from "./Feature.module.scss";
type FeatureProps = {
  title: string;
  subtitle: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ title, subtitle, description }) => {
  return (
    <li className={styles.feature}>
      <svg
        className={styles.feature__background}
        xmlns="http://www.w3.org/2000/svg"
        width="541"
        height="536"
        viewBox="0 0 541 536"
        fill="none"
      >
        <g opacity="0.3" filter="url(#filter0_f_30_165)">
          <ellipse cx="270.5" cy="268" rx="70.5" ry="68" fill="#CB6AFB" />
        </g>
        <defs>
          <filter
            id="filter0_f_30_165"
            x="0"
            y="0"
            width="541"
            height="536"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_30_165"
            />
          </filter>
        </defs>
      </svg>
      <h2 className={styles.feature__title}>{title}</h2>
      <p className={styles.feature__subtitle}>{subtitle}</p>
      <hr className={styles.feature__line} />
      <p className={styles.feature__description}>{description}</p>
    </li>
  );
};

export default Feature;
