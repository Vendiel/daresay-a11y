export interface MetaData {
  title: string;
  id: string;
  reqs: string[];
  roles: string[];
  tags: string[];
  prio: number;
}

export interface AllMetaData {
  posts: MetaData[];
}
