// import Link from "next/link";
import styles from "./TagButton.module.css";
import classNames from "classnames";

interface Props {
  tagName: string;
  type: string;
  // url?: string;
}

const getClassFromType = (type: string): string => {
  if (type === "tag") {
    return styles.tagColor;
  }

  if (type === "role") {
    return styles.roleColor;
  }

  if (type === "req") {
    return styles.reqColor;
  }
};

export const TagButton = (props: Props) => {
  const { tagName, type } = props;

  return (
    // <Link href={url}>
    //   <a className={styles.tagButton}>{tagName}</a>
    // </Link>

    <span className={classNames(styles.tagButton, getClassFromType(type))}>{tagName}</span>
  );
};
