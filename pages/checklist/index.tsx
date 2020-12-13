import Head from "next/head";
import { getSortedPostsData, getAllGroupsAndTags } from "../../lib/posts";
import { GetStaticProps } from "next";
import styles from "./checklistPage.module.css";
import { FilteredList } from "../../components/filter/FilteredList/FilteredList";
import { AllGroupsAndTags } from "../../components/models/tagModels";
import { AllMetaData } from "../../components/models/postModels";
import { useEffect, useState } from "react";
import { RoleFilter } from "../../components/filter/RoleFilter/RoleFilter";
import { CategoryFilter } from "../../components/filter/CategoryFilter/CategoryFilter";

interface Props {
  allMetaData: AllMetaData;
  allGroupsAndTags: AllGroupsAndTags;
}

export interface FilterState {
  tagName: string;
  checked: boolean;
}

export interface AllCheckboxStates {
  tagsCheckboxStates: Array<FilterState>;
  rolesRadiobuttonStates: Array<FilterState>;
  // reqsCheckboxStates: Array<FilterState>;
}

//Loops and adds checked=false for every tag item
const getInitialState = (tags: Array<string>): Array<FilterState> => {
  return tags.map(
    (item: string): FilterState => {
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
    rolesRadiobuttonStates: [
      { tagName: "All posts", checked: true },
      ...getInitialState(getAllGroupsAndTags.roles),
    ],
    // reqsCheckboxStates: getInitialState(getAllGroupsAndTags.reqs),
  };
};

export const ChecklistPage = (props: Props) => {
  const { allMetaData, allGroupsAndTags } = props;

  const [allCheckboxStates, setAllCheckboxStates] = useState(getAllInitialStates(allGroupsAndTags));
  console.log("index, efter initial", allCheckboxStates.rolesRadiobuttonStates);

  useEffect(() => {}, [allCheckboxStates]);
  console.log("index, efter useeffect", allCheckboxStates.rolesRadiobuttonStates);

  return (
    <>
      <Head>
        <title>The accessibility checklist</title>
      </Head>
      <div className={"wrapper"}>
        <h1>Guidelines</h1>
        <div className={styles.container}>
          <RoleFilter
            //Två problem: behöver klicka två ggr på radiobuttons  + behöver sätta tidigare true till false.

            header="Roles"
            radiobuttonStates={allCheckboxStates.rolesRadiobuttonStates} //skickar ner roles checked states?
            onStateChanged={(rolesStates) => {
              console.log("index onStateChange");
              const allCheckboxStatesCopy: AllCheckboxStates = JSON.parse(JSON.stringify(allCheckboxStates));
              allCheckboxStatesCopy.rolesRadiobuttonStates = rolesStates;
              // console.log(allCheckboxStatesCopy.rolesRadiobuttonStates);

              setAllCheckboxStates(allCheckboxStatesCopy);
            }}
          />
          <CategoryFilter
            header="Categories"
            checkboxStates={allCheckboxStates.tagsCheckboxStates} //skickar ner tags checked states
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
