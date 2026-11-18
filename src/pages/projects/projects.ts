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
  },
  
{
  "name": "Project Clover",
  "description": "A browser-based Mars exploration project featuring an illustrated Mars information page, an interactive Korolev Crater terrain and rover simulator, and a five-level sample-retrieval mission game. It combines planetary science, NASA and ESA elevation data, rover route planning, environmental telemetry, and interactive space exploration.",
  "demoLink": "https://clover.bhupesh.com.np/",
  "tags": [
    "JavaScript",
    "Three.js",
    "NASA API",
    "MOLA"
  ]
}

];
