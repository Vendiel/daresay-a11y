import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "./id.module.css";
import { GetStaticProps, GetStaticPaths } from "next";
import { TagButton } from "../../components/general/TagButton/TagButton";
import Link from "next/link";

interface PostData {
  title: string;
  tags: Array<string>;
  reqs: Array<string>;
  roles: Array<string>;
  contentHtml: string;
}

interface Props {
  postData: PostData;
}

export const Post = (props: Props) => {
  const { postData } = props;

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={"wrapper"}>
        <article className={styles.article}>
          <h1 className={styles.header}>{postData.title}</h1>
          <ul className={styles.tagGroup}>
            {postData.tags.map((tag) => (
              <li key={tag}>
                <TagButton tagName={tag} />
              </li>
            ))}
            {postData.roles.map((role) => (
              <li key={role}>
                <TagButton tagName={role} />
              </li>
            ))}
            {postData.reqs.map((req) => (
              <li key={req}>
                <TagButton tagName={req} />
              </li>
            ))}
          </ul>

          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <div className={styles.backToList}>
          <span aria-hidden="true">← </span>
          <Link href="/checklist">
            <a>Back to list</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
