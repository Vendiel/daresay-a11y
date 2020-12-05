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
    let filteredPosts = [];

    // console.log(filterState.rolesCheckboxStates);

    let anyTagIsChecked = false;
    let anyRoleIsChecked = false;

    filterState.tagsCheckboxStates.forEach((element) => {
      if (element.checked) {
        anyTagIsChecked = true;
      }
    });

    filterState.rolesCheckboxStates.forEach((element) => {
      if (element.checked) {
        anyRoleIsChecked = true;
      }
    });

    //1. Om ingen kategori är vald och ingen roll är vald, visa alla.
    if (!anyTagIsChecked && !anyRoleIsChecked) {
      console.log("None is checked");
      filteredPosts = [...allMetaData.posts];
    }

    //2. Om ingen kategori är vald, men något är valt under roll, visa alla posts med de valda rollerna
    if (!anyTagIsChecked && anyRoleIsChecked) {
      console.log("Only role is selected");

      //För varje role som har checked=true, loopa igenom allPosts och filtrera ur den till visiblePosts
      filterState.rolesCheckboxStates.forEach((element) => {
        if (element.checked) {
          allPosts.forEach((post) => {
            if (post.roles.includes(element.tagName)) {
              filteredPosts.push(post);
            }
          });
        }
      });
    }

    //3. Om en kategori är vald och ingen roll är vald, visa alla posts med de valda kategorierna
    if (anyTagIsChecked && !anyRoleIsChecked) {
      console.log("Only category is checked");

      //För varje kategori som har checked=true, loopa igenom allPosts och filtrera ur den till visiblePosts
      filterState.tagsCheckboxStates.forEach((element) => {
        if (element.checked) {
          allPosts.forEach((post) => {
            if (post.tags.includes(element.tagName)) {
              filteredPosts.push(post);
            }
          });
        }
      });
    }

    //4. Om både en kategori och en roll är vald, visa bara de posts som uppfyller både kategori & rollerna (kan  bli nollresultat)
    if (anyTagIsChecked && anyRoleIsChecked) {
      console.log("Both are checked");

      // För varje kategori som har checked=true, loopa igenom allPosts och hitta alla poster med den kategorin. Kolla sen om den posten dessutom nån av de roller som är förbockad. Om ja, lägg i listan.
      filterState.tagsCheckboxStates.forEach((element) => {
        if (element.checked) {
          allPosts.forEach((post) => {
            if (post.tags.includes(element.tagName)) {
              console.log("Found a post with chosen category");

              // Kolla om den funna posten (post) dessutom uppfyller nån av de checkade rollerna.
              filterState.rolesCheckboxStates.forEach((element2) => {
                //BUGG, lägger till dubletter om man väljer flera roller. Behöver inte fortsätta loopa om den hittat  EN.
                if (element2.checked && post.roles.includes(element2.tagName)) {
                  filteredPosts.push(post);
                  // break;
                  console.log("Wohoo The post had chosen role");
                } else {
                  console.log("The post didn't have chosen role");
                }
              });
            }
          });
        }
      });
    }

    setVisiblePosts(filteredPosts);
  }, [filterState]); //useEffect lyssnar på filterState

  return (
    <section>
      <h1 className={styles.header}>All checklist items</h1>
      <span className={styles.number}>{visiblePosts.length} items shown</span>

      <ul className={styles.checklist}>
        {visiblePosts.map((item: MetaData) => {
          return <FilteredListItem metaData={item} />;
        })}
      </ul>
    </section>
  );
};
