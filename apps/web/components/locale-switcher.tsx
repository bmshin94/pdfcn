"use client";

import { getLocaleName, getLocalizedUrl } from "intlayer";
import type { Locale } from "intlayer";
import { LanguagesIcon } from "lucide-react";
import { useIntlayer, useLocale } from "next-intlayer";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const LocaleSwitcher = ({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) => {
  const content = useIntlayer("locale-switcher");
  const { locale, pathWithoutLocale, availableLocales, setLocale } =
    useLocale();
  const router = useRouter();

  const handleLocaleChange = (nextLocale: string) => {
    const localeValue = nextLocale as Locale;
    setLocale(localeValue);
    router.push(getLocalizedUrl(pathWithoutLocale, localeValue));
  };

  return (
    <DropdownMenu sounds>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size={compact ? "icon-sm" : "sm"}
              className={className}
              aria-label={content.changeLanguage}
            >
              {compact ? (
                <LanguagesIcon className="size-4" />
              ) : (
                <span>{getLocaleName(locale, locale)}</span>
              )}
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>{getLocaleName(locale, locale)}</TooltipContent>
      </Tooltip>
      <DropdownMenuContent
        align="end"
        className="animate-none! rounded-lg shadow-none"
      >
        {availableLocales.map((availableLocale) => (
          <DropdownMenuItem
            className={cn(
              availableLocale === locale && "font-medium text-foreground"
            )}
            key={availableLocale}
            onSelect={() => handleLocaleChange(availableLocale)}
            sound="click"
          >
            {getLocaleName(availableLocale, availableLocale)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
