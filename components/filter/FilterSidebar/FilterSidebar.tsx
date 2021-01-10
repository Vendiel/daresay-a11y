import styles from "./FilterSidebar.module.css";
import { FilterGroup } from "../FilterGroup/FilterGroup";
import { AllCheckboxStates } from "../../../pages/checklist";

interface Props {
  allCheckboxStates: AllCheckboxStates;
  onCheckboxChanged: (allCheckboxStates: AllCheckboxStates) => void;
}

export const FilterSidebar = (props: Props) => {
  const { allCheckboxStates, onCheckboxChanged } = props;

  return (
    <section className={styles.filter}>
      <FilterGroup
        header="Categories"
        checkboxStates={allCheckboxStates.tagsCheckboxStates}
        onStateChanged={(tagsStates) => {
          const allCheckboxStatesCopy: AllCheckboxStates = JSON.parse(JSON.stringify(allCheckboxStates));
          allCheckboxStatesCopy.tagsCheckboxStates = tagsStates;
          onCheckboxChanged(allCheckboxStatesCopy);
        }}
      />
    </section>
  );
};
