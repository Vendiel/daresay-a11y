import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { AllMetaData } from "../components/models/postModels";

const postsDirectory = path.join(process.cwd(), "posts");

// Goes through all MD files to see which tags, reqs and roles that are defined
export const getAllGroupsAndTags = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allTagsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    // const id = fileName.replace(/\.md$/, "");  // NEVER USED?

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Make array out of all tags
    const tagsData = matterResult.data.tags;
    const reqsData = matterResult.data.reqs;
    const rolesData = matterResult.data.roles;
    return { tagsData, reqsData, rolesData };
  });

  let allTags = [];
  let allReqs = [];
  let allRoles = [];

  // Put tags, reqs and roles in three different arrays
  allTagsData.forEach((element) => {
    if (element.tagsData) {
      allTags = allTags.concat(element.tagsData);
    }
    if (element.reqsData) {
      allReqs = allReqs.concat(element.reqsData);
    }
    if (element.rolesData) {
      allRoles = allRoles.concat(element.rolesData);
    }
  });

  //Removes all duplicates
  const uniqueTags = [...new Set(allTags)];
  const uniqueReqs = [...new Set(allReqs)];
  const uniqueRoles = [...new Set(allRoles)];

  return {
    tags: uniqueTags.sort(),
    reqs: uniqueReqs.sort(),
    roles: uniqueRoles.sort(),
  };
};


// Goes through all MD files to read the meta data
export const getSortedPostsData = (): AllMetaData => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allMetaData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the meta data (matterResult.data is just the meta section) with the id
    return {
      id,
      ...(matterResult.data as {
        title: string;
        tags: string[];
        reqs: string[];
        roles: string[];
        prio: number;
      }),
    };
  });
  return { posts: allMetaData }; // --> { posts: [ { id: "name-of-file", title: "header" req: .. roles: .. tags: ..},  {...}]}
};

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// Goes through all MD files to read all content, incl meta data
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      title: string;
      tags: string[];
      reqs: string[];
      roles: string[];
      prio: number;
    }),
  };
}
