import { ReactNode } from "react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links?: FooterLink[];
  /** Freeform content slot — rendered below any links in this column. */
  content?: ReactNode;
}

export interface ContactBlock {
  /** Lines of plain text: name, address, phone, etc. */
  lines: string[];
  buttonLabel: string;
  buttonHref: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface SubFooterProps {
  columns?: FooterColumn[];
  contactBlock?: ContactBlock;
  socialLinks?: SocialLink[];
}