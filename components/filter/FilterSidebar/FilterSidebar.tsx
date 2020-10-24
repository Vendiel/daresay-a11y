import styles from "./FilterSidebar.module.css";
import { FilterGroup } from "../FilterGroup/FilterGroup";
import { AllGroupsAndTagsState } from "../../../pages/checklist";

interface Props {
  allGroupsAndTagsState: AllGroupsAndTagsState;
  onAllGroupsAndTagsStateChanged: (
    allGroupsAndTagsState: AllGroupsAndTagsState
  ) => void;
}

export const FilterSidebar = (props: Props) => {
  const { allGroupsAndTagsState, onAllGroupsAndTagsStateChanged } = props;

  return (
    <section className={styles.filter}>
      <FilterGroup
        tagStates={allGroupsAndTagsState.tagsState}
        onStateChanged={(tagsStates) => {
          const allGroupsAndTagsStateCopy: AllGroupsAndTagsState = JSON.parse(
            JSON.stringify(allGroupsAndTagsState)
          );
          allGroupsAndTagsStateCopy.tagsState = tagsStates;
          onAllGroupsAndTagsStateChanged(allGroupsAndTagsStateCopy);
        }}
      />
      <FilterGroup
        tagStates={allGroupsAndTagsState.rolesState}
        onStateChanged={(rolesStates) => {
          const allGroupsAndTagsStateCopy: AllGroupsAndTagsState = JSON.parse(
            JSON.stringify(allGroupsAndTagsState)
          );
          allGroupsAndTagsStateCopy.rolesState = rolesStates;
          onAllGroupsAndTagsStateChanged(allGroupsAndTagsStateCopy);
        }}
      />
      <FilterGroup
        tagStates={allGroupsAndTagsState.reqsState}
        onStateChanged={(reqsStates) => {
          const allGroupsAndTagsStateCopy: AllGroupsAndTagsState = JSON.parse(
            JSON.stringify(allGroupsAndTagsState)
          );
          allGroupsAndTagsStateCopy.reqsState = reqsStates;
          onAllGroupsAndTagsStateChanged(allGroupsAndTagsStateCopy);
        }}
      />
    </section>
  );
};
