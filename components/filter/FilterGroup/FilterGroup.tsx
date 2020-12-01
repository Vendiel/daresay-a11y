import { CheckboxState } from "../../../pages/checklist";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import styles from "./FilterGroup.module.css";

interface Props {
  checkboxStates: Array<CheckboxState>;
  onStateChanged: (checkboxStates: Array<CheckboxState>) => void;
}

export const FilterGroup = (props: Props) => {
  const { checkboxStates, onStateChanged } = props;

  return (
    <>
      <fieldset className={styles.card}>
        <legend>Kategorier</legend>
        <ul>
          {checkboxStates.map((item: CheckboxState) => {
            return (
              <FilterCheckbox
                item={item.tagName}
                checked={item.checked}
                onChange={() => {
                  const resultIndex = checkboxStates.findIndex((currentItem) => {
                    return currentItem.tagName === item.tagName;
                  });
                  const checkboxStateCopy = JSON.parse(JSON.stringify(checkboxStates));
                  checkboxStateCopy[resultIndex].checked = !checkboxStateCopy[resultIndex].checked; // Toggle value by using ! operator.
                  onStateChanged(checkboxStateCopy); // Prata uppåt med föräldern.. :)
                }}
              />
            );
          })}
        </ul>
      </fieldset>
    </>
  );
};
