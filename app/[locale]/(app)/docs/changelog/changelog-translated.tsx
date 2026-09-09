"use client";

import { useIntlayer } from "next-intlayer";

export const ChangelogHeading = () => {
  const content = useIntlayer("changelog");
  return (
    <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
      {content.changelog}
    </h1>
  );
};

export const ChangelogDescription = () => {
  const content = useIntlayer("changelog");
  return (
    <p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
      {content.latestUpdatesDescription}
    </p>
  );
};

export const MoreUpdatesHeading = () => {
  const content = useIntlayer("changelog");
  return (
    <h2 className="mb-6 font-heading text-xl font-semibold tracking-tight">
      {content.moreUpdates}
    </h2>
  );
};

export const OnThisPageLabel = () => {
  const content = useIntlayer("changelog");
  return (
    <p className="sticky top-0 h-6 bg-background text-xs font-medium text-muted-foreground">
      {content.onThisPage}
    </p>
  );
};

export const MoreUpdatesLink = () => {
  const content = useIntlayer("changelog");
  return (
    <a
      className="text-[0.8rem] text-muted-foreground no-underline transition-colors hover:text-foreground"
      href="#more-updates"
    >
      {content.moreUpdates}
    </a>
  );
};
