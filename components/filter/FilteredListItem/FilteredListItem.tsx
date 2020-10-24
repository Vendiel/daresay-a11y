import styles from "./FilteredListItem.module.css";
import Link from "next/link";
import { PostData } from "../../models/postModels";

interface Props {
  postData: PostData;
}

export const FilteredListItem = (props: Props) => {
  const { postData } = props;

  return (
    <li key={postData.id}>
      <input id={postData.id} type="checkbox" />
      <label htmlFor={postData.id}>
        <Link href={`/posts/${postData.id}`}>
          <a>{postData.title}</a>
        </Link>
      </label>
    </li>
  );
};
