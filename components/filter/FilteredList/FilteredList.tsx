import styles from "./FilteredList.module.css";
import { FilteredListItem } from "../FilteredListItem/FilteredListItem";
import { AllMetaData, MetaData } from "../../models/postModels";
import { AllCheckboxStates } from "../../../pages/checklist";
import { useEffect, useState } from "react";

interface Props {
  allMetaData: AllMetaData;
  filterState: AllCheckboxStates;
}

const postAlreadyAdded = (post: MetaData, filteredPosts): boolean => {
  const foundIndex = filteredPosts.findIndex((currentPost: MetaData) => {
    return currentPost.id === post.id;
  });

  if (foundIndex === -1) {
    return false;
  } else {
    return true;
  }
};

export const FilteredList = (props: Props) => {
  const { allMetaData, filterState } = props;
  const [visiblePosts, setVisiblePosts] = useState([]);

  useEffect(() => {
    const allPosts = allMetaData.posts;
    let filteredPosts = [];
    let anyTagIsChecked = false;
    let anyRoleIsChecked = false;

    filterState.tagsCheckboxStates.forEach((element) => {
      if (element.checked) {
        anyTagIsChecked = true;
      }
    });

    filterState.rolesRadiobuttonStates.forEach((element) => {
      if (element.checked) {
        anyRoleIsChecked = true;
      }
    });

    //1. Om ingen kategori är vald och ingen roll är vald, visa alla.
    if (!anyTagIsChecked && !anyRoleIsChecked) {
      filteredPosts = [...allMetaData.posts];
    }

    //2. Om ingen kategori är vald, men något är valt under roll, visa alla posts med de valda rollerna
    if (!anyTagIsChecked && anyRoleIsChecked) {
      //För varje role som har checked=true, loopa igenom allPosts och filtrera ur den till visiblePosts
      filterState.rolesRadiobuttonStates.forEach((element) => {
        if (element.checked) {
          allPosts.forEach((post) => {
            if (post.roles.includes(element.tagName)) {
              if (!postAlreadyAdded(post, filteredPosts)) {
                filteredPosts.push(post);
              }
            }
          });
        }
      });
    }

    //3. Om en kategori är vald och ingen roll är vald, visa alla posts med de valda kategorierna
    if (anyTagIsChecked && !anyRoleIsChecked) {
      //För varje kategori som har checked=true, loopa igenom allPosts och filtrera ur den till visiblePosts
      filterState.tagsCheckboxStates.forEach((element) => {
        if (element.checked) {
          allPosts.forEach((post) => {
            if (post.tags.includes(element.tagName)) {
              if (!postAlreadyAdded(post, filteredPosts)) {
                filteredPosts.push(post);
              }
            }
          });
        }
      });
    }

    //4. Om både en kategori och en roll är vald, visa bara de posts som uppfyller både kategori & rollerna (kan  bli nollresultat)
    if (anyTagIsChecked && anyRoleIsChecked) {
      filterState.tagsCheckboxStates.forEach((element) => {
        if (element.checked) {
          allPosts.forEach((post) => {
            if (post.tags.includes(element.tagName)) {
              filterState.rolesRadiobuttonStates.forEach((element2) => {
                if (element2.checked && post.roles.includes(element2.tagName)) {
                  if (!postAlreadyAdded(post, filteredPosts)) {
                    filteredPosts.push(post);
                  }
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
      <span className={styles.number}>{visiblePosts.length} items found</span>

      <ul className={styles.checklist}>
        {visiblePosts.map((item: MetaData) => {
          return <FilteredListItem metaData={item} />;
        })}
      </ul>
    </section>
  );
};
