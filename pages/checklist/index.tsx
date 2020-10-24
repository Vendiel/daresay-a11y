import Head from "next/head";
import { getSortedPostsData, getAllGroupsAndTags } from "../../lib/posts";
import { GetStaticProps } from "next";
import styles from "./filterPage.module.css";
import { FilterSidebar } from "../../components/filter/FilterSidebar/FilterSidebar";
import { FilteredList } from "../../components/filter/FilteredList/FilteredList";
import { AllGroupsAndTags } from "../../components/models/tagModels";
import { AllPostsData } from "../../components/models/postModels";
import { useEffect, useState } from "react";

interface Props {
  allPostsData: AllPostsData;
  allGroupsAndTags: AllGroupsAndTags;
}

export interface TagState {
  tagName: string;
  checked: boolean;
}

export interface AllGroupsAndTagsState {
  tagsState: Array<TagState>;
  rolesState: Array<TagState>;
  reqsState: Array<TagState>;
}

const getInitialState = (tags: Array<string>): Array<TagState> => {
  return tags.map(
    (item: string): TagState => {
      return {
        tagName: item,
        checked: false,
      };
    }
  );
};

const getAllInitialStates = (
  getAllGroupsAndTags: AllGroupsAndTags
): AllGroupsAndTagsState => {
  return {
    tagsState: getInitialState(getAllGroupsAndTags.tags),
    rolesState: getInitialState(getAllGroupsAndTags.roles),
    reqsState: getInitialState(getAllGroupsAndTags.reqs),
  };
};

export const ChecklistPage = (props: Props) => {
  const { allPostsData, allGroupsAndTags } = props;

  const [allGroupsAndTagsState, setAllGroupsAndTagsState] = useState(
    getAllInitialStates(allGroupsAndTags)
  );

  useEffect(() => {
    console.log(allGroupsAndTagsState);
  }, [allGroupsAndTagsState]);

  return (
    <>
      <Head>
        <title>A specific tag indeeeeeed</title>
      </Head>
      <div className={"wrapper"}>
        <div className={styles.container}>
          <FilterSidebar
            allGroupsAndTagsState={allGroupsAndTagsState}
            onAllGroupsAndTagsStateChanged={(
              newAllGroupsAndTags: AllGroupsAndTagsState
            ) => {
              setAllGroupsAndTagsState(newAllGroupsAndTags);
            }}
          />
          <FilteredList allPostsData={allPostsData} />
        </div>
      </div>
    </>
  );
};

export default ChecklistPage;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData: AllPostsData = getSortedPostsData();
  const allGroupsAndTags = getAllGroupsAndTags();
  console.log(allGroupsAndTags);
  return {
    props: {
      allPostsData,
      allGroupsAndTags,
    },
  };
};
