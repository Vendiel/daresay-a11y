import { FilterState } from "../../../pages/checklist";
import { FilterRadiobutton } from "../FilterRadiobutton/FilterRadiobutton";
import styles from "./RoleFilter.module.css";

interface Props {
  header: string;
  radiobuttonStates: Array<FilterState>; //ner
  onStateChanged: (radiobuttonStates: Array<FilterState>) => void; //upp, ropas på när man uppdaterar värdet
}

export const RoleFilter = (props: Props) => {
  const { header, radiobuttonStates, onStateChanged } = props;

  return (
    <>
      <fieldset className={styles.card}>
        <legend>{header}</legend>
        <div className={styles.radiogroup}>
          {radiobuttonStates.map((item: FilterState) => {
            const roleName = item.tagName.toLowerCase();

            return (
              <FilterRadiobutton
                label={item.tagName}
                id={roleName}
                name={"roles"}
                value={roleName}
                checked={item.checked}
                onChange={() => {
                  //pratar uppåt med föräldern..
                  const resultIndex = radiobuttonStates.findIndex((currentItem) => {
                    return currentItem.tagName === item.tagName;
                  });
                  const radiobuttonStateCopy: Array<FilterState> = JSON.parse(
                    JSON.stringify(radiobuttonStates)
                  );
                  radiobuttonStateCopy.forEach((element) => {
                    element.checked = false;
                  });
                  radiobuttonStateCopy[resultIndex].checked = true; //den man petar på blir true

                  onStateChanged(radiobuttonStateCopy); // Prata uppåt med föräldern.. :)
                }}
              />
            );
          })}
        </div>
      </fieldset>
    </>
  );
};
