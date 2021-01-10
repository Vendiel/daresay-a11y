import styles from "./Nav.module.css";
import Link from "next/link";

export const Nav = () => {
  return (
    <header className={styles.mainHeader}>
      <Link href="/">
        <a>
          <img src="/images/DARESAY.png" alt="Go to Daresay accessibility checklist home" />
        </a>
      </Link>
      <span>Accessibility checklist</span>
    </header>
  );
};
