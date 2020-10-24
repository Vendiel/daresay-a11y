import Link from "next/link";
import styles from "./MainCard.module.css";
import classNames from "classnames";

interface Props {
  icon: string;
  header: string;
  content: React.ReactElement;
}

export const MainCard = (props: Props) => {
  const { icon, header, content } = props;

  return (
    <section
      className={classNames(styles.card, "flex-row", "margin-bottom-6x")}
    >
      <div className={styles.cardicon}>
        <span aria-hidden="true">{icon}</span>
      </div>
      <div>
        <h2>{header}</h2>
        {content}
      </div>
    </section>
  );
};
