import { AllCheckboxStates, CheckboxState } from "../../../pages/checklist";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import styles from "./CategoryFilter.module.css";

interface Props {
  checkboxStates: Array<CheckboxState>;
  onStateChanged: (checkboxStates: Array<CheckboxState>) => void;
  header: string;
}

export const CategoryFilter = (props: Props) => {
  const { checkboxStates, header, onStateChanged } = props;
  console.log("CategoryFilter", checkboxStates);

  return (
    <>
      <fieldset className={styles.card}>
        <legend>{header}</legend>
        <ul>
          {checkboxStates.map((item: CheckboxState) => {
            return (
              <FilterCheckbox
                item={item.tagName}
                checked={item.checked}
                onChange={() => {
                  //onchange är en function som händer när checked state ändras
                  const resultIndex = checkboxStates.findIndex((currentItem) => {
                    return currentItem.tagName === item.tagName;
                  });
                  const checkboxStateCopy = JSON.parse(JSON.stringify(checkboxStates));
                  checkboxStateCopy[resultIndex].checked = !checkboxStateCopy[resultIndex].checked; // Toggle value by using ! operator.
                  onStateChanged(checkboxStateCopy); // Ge nya listan till föräldern..
                }}
              />
            );
          })}
        </ul>
      </fieldset>
    </>
  );
};
