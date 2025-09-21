import type { IconName } from "./icon";

interface LinkOptions {
  href: string;
  label: string;
}

export interface ProjectInfo {
  title: string;
  description: string;
  stackList: IconName[];
  links: LinkOptions[];
  images: ImageMetadata[];
  tags: string[];
}
