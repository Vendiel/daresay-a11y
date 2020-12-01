import styles from "./Footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.copyright}>
        <span> DARESAY &copy; 2020</span>
      </div>
      <div className={styles.a11yreport}>
        <Link href={`/accessibility-report`}>
          <a>Accessibility report</a>
        </Link>
      </div>
    </footer>
  );
};
