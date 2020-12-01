import styles from "./FilteredList.module.css";
import { FilteredListItem } from "../FilteredListItem/FilteredListItem";
import { AllMetaData, MetaData } from "../../models/postModels";
import { AllCheckboxStates, CheckboxState } from "../../../pages/checklist";
import { useEffect, useState } from "react";

interface Props {
  allMetaData: AllMetaData;
  filterState: AllCheckboxStates;
}

export const FilteredList = (props: Props) => {
  const { allMetaData, filterState } = props;

  const [visiblePosts, setVisiblePosts] = useState([]);

  useEffect(() => {
    const allPosts = allMetaData.posts;
    const filteredPosts = [];

    //För varje tag som har checked=true, loopa igenom allPosts och filtrera ur den till visiblePosts
    filterState.tagsCheckboxStates.forEach((element) => {
      if (element.checked) {
        allPosts.forEach((post) => {
          if (post.tags.includes(element.tagName)) {
            filteredPosts.push(post);
          }
        });
      }
    });
    setVisiblePosts(filteredPosts);
  }, [filterState]); //useEffect lyssnar på filterState

  let filteredPosts = [];
  //Om visiblePosts är tom så ska alla visas, dvs allMetaData.posts...
  if (visiblePosts.length == 0) {
    filteredPosts = [...allMetaData.posts];
    console.log(filteredPosts);
  } else {
    filteredPosts = [...visiblePosts];
    console.log(filteredPosts);
  }

  return (
    <section>
      <h1 className={styles.header}>All checklist items</h1>
      <span className={styles.number}>{filteredPosts.length} items shown</span>

      <ul className={styles.checklist}>
        {filteredPosts.map((item: MetaData) => {
          return <FilteredListItem metaData={item} />;
        })}
      </ul>
    </section>
  );
};
