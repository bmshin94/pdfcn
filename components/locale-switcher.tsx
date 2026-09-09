"use client";

import { getLocaleName, getLocalizedUrl } from "intlayer";
import type { Locale } from "intlayer";
import { GlobeIcon } from "lucide-react";
import { useIntlayer, useLocale } from "next-intlayer";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const LocaleSwitcher = () => {
  const content = useIntlayer("locale-switcher");
  const { locale, pathWithoutLocale, availableLocales, setLocale } =
    useLocale();
  const router = useRouter();

  return (
    <Select
      value={locale}
      onValueChange={(nextLocale: Locale) => {
        setLocale(nextLocale);
        router.push(getLocalizedUrl(pathWithoutLocale, nextLocale));
      }}
    >
      <SelectTrigger
        size="sm"
        className="w-auto gap-1.5 border-none bg-transparent shadow-none"
        aria-label={content.changeLanguage}
      >
        <GlobeIcon className="size-4 text-muted-foreground" />
        <SelectValue>{getLocaleName(locale, locale)}</SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        {availableLocales.map((availableLocale) => (
          <SelectItem key={availableLocale} value={availableLocale}>
            {getLocaleName(availableLocale, availableLocale)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
