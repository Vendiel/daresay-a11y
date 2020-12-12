import Head from "next/head";
import { getSortedPostsData, getAllGroupsAndTags } from "../../lib/posts";
import { GetStaticProps } from "next";
import styles from "./checklistPage.module.css";
import { FilterSidebar } from "../../components/filter/FilterSidebar/FilterSidebar";
import { FilteredList } from "../../components/filter/FilteredList/FilteredList";
import { AllGroupsAndTags } from "../../components/models/tagModels";
import { AllMetaData } from "../../components/models/postModels";
import { useEffect, useState } from "react";
import { RoleFilter } from "../../components/filter/RoleFilter/RoleFilter";
import { CategoryFilter } from "../../components/filter/CategoryFilter/CategoryFilter";
import { FilterGroup } from "../../components/filter/FilterGroup/FilterGroup";

interface Props {
  allMetaData: AllMetaData;
  allGroupsAndTags: AllGroupsAndTags;
}

export interface CheckboxState {
  tagName: string;
  checked: boolean;
}

export interface AllCheckboxStates {
  tagsCheckboxStates: Array<CheckboxState>;
  rolesRadiobuttonStates: Array<CheckboxState>;
  // reqsCheckboxStates: Array<CheckboxState>;
}

//Loops and adds checked=false for every tag item
const getInitialState = (tags: Array<string>): Array<CheckboxState> => {
  return tags.map(
    (item: string): CheckboxState => {
      return {
        tagName: item,
        checked: false,
      };
    }
  );
};

//Sets initial value to false for every tag item
const getAllInitialStates = (getAllGroupsAndTags: AllGroupsAndTags): AllCheckboxStates => {
  return {
    tagsCheckboxStates: getInitialState(getAllGroupsAndTags.tags),
    rolesRadiobuttonStates: getInitialState(getAllGroupsAndTags.roles),
    // reqsCheckboxStates: getInitialState(getAllGroupsAndTags.reqs),
  };
};

export const ChecklistPage = (props: Props) => {
  const { allMetaData, allGroupsAndTags } = props;

  const [allCheckboxStates, setAllCheckboxStates] = useState(getAllInitialStates(allGroupsAndTags));

  useEffect(() => {}, [allCheckboxStates]);

  return (
    <>
      <Head>
        <title>The accessibility checklist</title>
      </Head>
      <div className={"wrapper"}>
        <h1>Guidelines</h1>
        <div className={styles.container}>
          <CategoryFilter
            header="Categories"
            checkboxStates={allCheckboxStates.tagsCheckboxStates} //skickar ner tags checkbox states
            onStateChanged={(tagsStates) => {
              const allCheckboxStatesCopy: AllCheckboxStates = JSON.parse(JSON.stringify(allCheckboxStates));
              allCheckboxStatesCopy.tagsCheckboxStates = tagsStates;
              setAllCheckboxStates(allCheckboxStatesCopy);
            }}
          />
          <FilteredList allMetaData={allMetaData} filterState={allCheckboxStates} />
        </div>
      </div>
    </>
  );
};

export default ChecklistPage;

export const getStaticProps: GetStaticProps = async () => {
  const allMetaData: AllMetaData = getSortedPostsData();
  const allGroupsAndTags = getAllGroupsAndTags();
  return {
    props: {
      allMetaData,
      allGroupsAndTags,
    },
  };
};
