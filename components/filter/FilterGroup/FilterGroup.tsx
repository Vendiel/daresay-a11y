import { TagState } from "../../../pages/checklist";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import styles from "./FilterGroup.module.css";

interface Props {
  tagStates: Array<TagState>;
  onStateChanged: (tagStates: Array<TagState>) => void;
}

export const FilterGroup = (props: Props) => {
  const { tagStates, onStateChanged } = props;

  return (
    <>
      <fieldset className={styles.card}>
        <legend>Kategorier</legend>
        {tagStates.map((item: TagState) => {
          return (
            <ul>
              <FilterCheckbox
                item={item.tagName}
                checked={item.checked}
                onChange={() => {
                  const resultIndex = tagStates.findIndex((currentItem) => {
                    return currentItem.tagName === item.tagName;
                  });
                  const tagStateCopy = JSON.parse(JSON.stringify(tagStates));
                  tagStateCopy[resultIndex].checked = !tagStateCopy[resultIndex]
                    .checked; // Toggle value by using ! operator.
                  onStateChanged(tagStateCopy); // Prata uppåt med föräldern.. :)
                }}
              />
            </ul>
          );
        })}
      </fieldset>
    </>
  );
};
