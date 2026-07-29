export type PortfolioData = {
  profile: {
    name: string;
    brand: string;
    role: string;
    navigation: string[];
  };
  hero: {
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };
  about: {
    title: string;
    description: string;
    summary?: string[];
    metrics?: AboutMetric[];
    capabilities: Capability[];
  };
  projects: Project[];
  experiences: Experience[];
  experienceDetails: InfoSection[];
  skills: SkillGroup[];
  contact: {
    title: string;
    actions: ContactAction[];
  };
};

export type Capability = {
  title: string;
  description?: string;
  icon: "flow" | "component" | "speed" | "verify";
};

export type AboutMetric = {
  value: string;
  label: string;
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  visualType: "note" | "dashboard" | "checkout";
  href: string;
  links?: ProjectLink[];
  period?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Experience = {
  title: string;
  description: string;
  period?: string;
};

export type InfoSection = {
  title: string;
  items: InfoItem[];
};

export type InfoItem = {
  title: string;
  description: string;
  period?: string;
  meta?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ContactAction = {
  label: string;
  href: string;
  type: "primary" | "secondary" | "link";
};
