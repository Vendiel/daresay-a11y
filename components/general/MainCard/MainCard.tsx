import styles from "./MainCard.module.css";
import classNames from "classnames";

interface Props {
  icon: string;
  header: string;
  content: React.ReactElement;
  bottomMargin?: boolean;
}

export const MainCard = (props: Props) => {
  const { icon, header, content, bottomMargin = true } = props;

  return (
    // <section className={classNames(styles.card, bottomMargin && "margin-bottom-6x")}>
    <section className={classNames(styles.card, !bottomMargin && styles.nomarginbottom)}>
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
