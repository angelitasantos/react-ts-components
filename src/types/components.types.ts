export type BackLinkConfig = {
  to: string;
  label: string;
};

export type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export type ComponentPageWrapperProps = {
  componentName: string;
  children: React.ReactNode;
  className?: string;
};
