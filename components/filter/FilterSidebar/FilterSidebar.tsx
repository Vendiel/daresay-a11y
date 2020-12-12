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
      {/* <FilterGroup
        header="Roles"
        checkboxStates={allCheckboxStates.rolesCheckboxStates}
        onStateChanged={(rolesStates) => {
          const allCheckboxStatesCopy: AllCheckboxStates = JSON.parse(JSON.stringify(allCheckboxStates));
          allCheckboxStatesCopy.rolesCheckboxStates = rolesStates;
          onCheckboxChanged(allCheckboxStatesCopy);
        }}
      /> */}
      <FilterGroup
        header="Categories"
        checkboxStates={allCheckboxStates.tagsCheckboxStates}
        onStateChanged={(tagsStates) => {
          const allCheckboxStatesCopy: AllCheckboxStates = JSON.parse(JSON.stringify(allCheckboxStates));
          allCheckboxStatesCopy.tagsCheckboxStates = tagsStates;
          onCheckboxChanged(allCheckboxStatesCopy); //pratar uppåt med föräldern?
        }}
      />

      {/* <FilterGroup
        header="Requriements"
        checkboxStates={allCheckboxStates.reqsCheckboxStates}
        onStateChanged={(reqsStates) => {
          const allCheckboxStatesCopy: AllCheckboxStates = JSON.parse(JSON.stringify(allCheckboxStates));
          allCheckboxStatesCopy.reqsCheckboxStates = reqsStates;
          onCheckboxChanged(allCheckboxStatesCopy);
        }}
      /> */}
    </section>
  );
};
