import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'BinaryDB',
    description: 'A minimal page-based NoSQL document database built from scratch in C++.',
    demoLink: 'https://github.com/itsbhupesh00/BinaryDB',
    tags: ['C++', 'Database', 'NoSQL', 'Storage Engine']
  }
];
