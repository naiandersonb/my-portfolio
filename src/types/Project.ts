export type Project = {
  id: string;
  name: string;
  demo: string;
  repo: string;
  img: string;
  about?: string[];
  level?: string;
  links?: Link[];
};

type Link = {
  name: string;
  link: string;
};
