import styles from "./FilteredList.module.css";
import { FilteredListItem } from "../FilteredListItem/FilteredListItem";
import { AllPostsData } from "../../models/postModels";

interface Props {
  allPostsData: AllPostsData;
}

export const FilteredList = (props: Props) => {
  const { allPostsData } = props;

  return (
    // <section className={styles.list}>
    <section>
      <h2>All checklist items</h2>
      <span>{allPostsData.posts.length} items</span>
      <ul className={styles.checklist}>
        {allPostsData.posts.map((item) => (
          <FilteredListItem postData={item} />
        ))}
      </ul>
    </section>
  );
};
