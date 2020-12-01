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
  //Vill sätta så om visiblePosts är tom så ska alla visas, dvs  allMetaData.posts...
  if (visiblePosts.length == 0) {
    console.log("visible posts is empty");
    filteredPosts = [...allMetaData.posts];
    console.log(filteredPosts);
  } else {
    console.log("visible posts is NOT empty");
    filteredPosts = [...visiblePosts];
    console.log(filteredPosts);
  }

  return (
    // <section className={styles.list}>
    <section>
      <h2>All checklist items</h2>
      <span>{filteredPosts.length} items</span>

      <ul className={styles.checklist}>
        {filteredPosts.map((item: MetaData) => {
          return <FilteredListItem metaData={item} />;
        })}
      </ul>
    </section>
  );
};

// <ul>
//   {checkboxStates.map((item: CheckboxState) => {
//     return (
//       <FilterCheckbox
//         item={item.tagName}
//         checked={item.checked}
//         onChange={() => {
//           const resultIndex = checkboxStates.findIndex((currentItem) => {
//             return currentItem.tagName === item.tagName;
//           });
//           const checkboxStateCopy = JSON.parse(JSON.stringify(checkboxStates));
//           checkboxStateCopy[resultIndex].checked = !checkboxStateCopy[resultIndex].checked; // Toggle value by using ! operator.
//           onStateChanged(checkboxStateCopy); // Prata uppåt med föräldern.. :)
//         }}
//       />
//     );
//   })}
// </ul>;
