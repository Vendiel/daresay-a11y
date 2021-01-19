import Link from "next/link";
import styles from "./RelatedCard.module.css";
import classNames from "classnames";

export enum ColorTheme {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4,
  COLOR5,
}

interface Props {
  colorTheme: ColorTheme;
  icon: string;
  linkText: string;
  url: string;
}

const getClassNamesForColorTheme = (colorTheme: ColorTheme) => {
  switch (colorTheme) {
    case ColorTheme.COLOR1:
      return classNames(styles.card, styles["color1"]);
    case ColorTheme.COLOR2:
      return classNames(styles.card, styles["color2"]);
    case ColorTheme.COLOR3:
      return classNames(styles.card, styles["color3"]);
    case ColorTheme.COLOR4:
      return classNames(styles.card, styles["color4"]);
    case ColorTheme.COLOR5:
      return classNames(styles.card, styles["color5"]);
    default:
      return classNames(styles.card);
  }
};

export const RelatedCard = (props: Props) => {
  const { colorTheme, icon, url, linkText } = props;

  return (
    <Link href={url}>
      <a className={getClassNamesForColorTheme(colorTheme)}>
        <span aria-hidden="true">{icon}</span>
        {linkText}
        <svg className={styles.arrow} viewBox="0 0 56 44" version="1.1">
          <path d="M30.34,38 L36,43.66 L54.83,24.83 C55.5811082,24.079727 56.0031466,23.061637 56.0031466,22 C56.0031466,20.938363 55.5811082,19.920273 54.83,19.17 L36,0.34 L30.34,6 L42.34,18 L0,18 L0,26 L42.34,26 L30.34,38 Z"></path>
        </svg>
      </a>
    </Link>
  );
};
