export interface Link {
  type: 'github' | 'demo' | 'external';
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  context?: string;
  techStack: string[];
  role?: string;
  url?: string;
  links?: Link[];
  video?: string;
  inProgress?: boolean;
}
