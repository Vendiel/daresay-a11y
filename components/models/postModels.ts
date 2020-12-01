export interface MetaData {
  title: string;
  id: string;
  reqs: string[];
  roles: string[];
  tags: string[];
}

export interface AllMetaData {
  posts: MetaData[];
}
