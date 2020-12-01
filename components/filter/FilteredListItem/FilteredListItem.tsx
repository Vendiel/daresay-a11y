import styles from "./FilteredListItem.module.css";
import Link from "next/link";
import { MetaData } from "../../models/postModels";

interface Props {
  metaData: MetaData;
}

export const FilteredListItem = (props: Props) => {
  const { metaData } = props;

  return (
    <li key={metaData.id}>
      <input id={metaData.id} type="checkbox" />
      <label htmlFor={metaData.id}>
        <Link href={`/posts/${metaData.id}`}>
          <a>{metaData.title}</a>
        </Link>
      </label>
    </li>
  );
};
