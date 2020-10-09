import React from "react";

export interface HeaderLinks {
  headerLinks: Array<HeaderLink>;
}

interface HeaderLink {
  displayText: string;
  url: string;
  isActive?: boolean;
  isDivider?: boolean;
  subHeaders?: HeaderLink[];
}

export const DesktopHeader = (headerLinks: HeaderLinks) => {
  return <p>Desktop Header</p>;
};
export const MobileHeader = (headerLinks: HeaderLinks) => {
  return <p>Mobile Header</p>;
};
