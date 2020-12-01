import Link from "next/link";
import styles from "./TagButton.module.css";

interface Props {
  tagName: string;
  url?: string;
}

export const TagButton = (props: Props) => {
  const { tagName, url = "/checklist" } = props;

  return (
    // <Link href={url}>
    //   <a className={styles.tagButton}>{tagName}</a>
    // </Link>

    // Should be done as a button later on...
    <span className={styles.tagButton}>{tagName}</span>
  );
};
