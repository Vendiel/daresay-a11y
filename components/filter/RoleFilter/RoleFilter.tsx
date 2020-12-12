import { CheckboxState } from "../../../pages/checklist";
import { FilterRadiobutton } from "../FilterRadiobutton/FilterRadiobutton";
import styles from "./RoleFilter.module.css";
import { AllCheckboxStates } from "../../../pages/checklist";

interface Props {
  radiobuttonStates: Array<CheckboxState>;
  onStateChanged: (checkboxStates: Array<CheckboxState>) => void;
  header: string;
}

export const RoleFilter = (props: Props) => {
  const { radiobuttonStates, onStateChanged, header } = props;

  return (
    <>
      <fieldset className={styles.card}>
        <legend>{header}</legend>
        <ul>
          {radiobuttonStates.map((item: CheckboxState) => {
            return (
              <FilterRadiobutton
                item={item.tagName}
                checked={item.checked}
                onChange={() => {
                  const resultIndex = radiobuttonStates.findIndex((currentItem) => {
                    return currentItem.tagName === item.tagName;
                  });
                  const checkboxStateCopy = JSON.parse(JSON.stringify(radiobuttonStates));
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
