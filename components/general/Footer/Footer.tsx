import styles from "./Footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <span className={styles.copyright}>DARESAY &copy; 2020</span>
      <Link href={`/accessibility-report`}>
        <a className={styles.a11yreport}>Accessibility report</a>
      </Link>
    </footer>
  );
};
