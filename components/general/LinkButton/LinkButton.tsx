import Link from "next/link";
import styles from "./LinkButton.module.css";
import classNames from "classnames";

interface Props {
  url: string;
  linktext: string;
}

export const LinkButton = (props: Props) => {
  const { url, linktext } = props;

  return (
    // <section
    //   className={classNames(styles.card, "flex-row", "margin-bottom-6x")}
    // >
    //   <div className={styles.cardicon}>
    //     <span aria-hidden="true">{icon}</span>
    //   </div>
    //   <div>
    //     <h2>{header}</h2>
    //     {content}
    //   </div>
    // </section>
    <Link href={url}>
      <a className={styles.linkbutton}>{linktext}</a>
    </Link>
  );
};
