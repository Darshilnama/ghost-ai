import { dark } from "@clerk/ui/themes";

export const clerkAppearance = {
  baseTheme: dark,
  variables: {
    colorBackground: "var(--bg-surface)",
    colorInputBackground: "var(--bg-base)",
    colorInputText: "var(--text-primary)",
    colorPrimary: "var(--accent-primary)",
    colorText: "var(--text-primary)",
    colorTextSecondary: "var(--text-secondary)",
    colorNeutral: "var(--text-muted)",
    colorDanger: "var(--state-error)",
    borderRadius: "var(--radius)",
    fontFamily: "var(--font-geist-sans), sans-serif",
    fontFamilyButtons: "var(--font-geist-sans), sans-serif",
  },
  elements: {
    rootBox: "font-sans",
    cardBox: "w-full shadow-none",
    card: "w-full border border-surface-border bg-elevated font-sans shadow-none",
    footer: "bg-elevated font-sans",
    formButtonPrimary: "font-sans text-primary-foreground",
    formFieldInput:
      "font-sans text-copy-primary placeholder:text-copy-secondary",
    formFieldLabel: "font-sans text-copy-primary",
    headerTitle: "font-sans text-copy-primary",
    headerSubtitle: "text-copy-secondary",
    socialButtonsBlockButton:
      "border-surface-border bg-base font-sans text-copy-primary hover:bg-subtle",
    socialButtonsBlockButtonText: "font-sans text-copy-primary",
    userButtonPopoverActionButton:
      "font-sans text-copy-primary hover:bg-subtle",
    userButtonPopoverActionButtonIcon: "text-copy-primary",
    userButtonPopoverActionButtonText: "text-copy-primary",
    userButtonPopoverCard:
      "border border-surface-border bg-elevated text-copy-primary",
    userButtonPopoverFooter: "bg-elevated text-copy-secondary",
    userPreviewMainIdentifier: "text-copy-primary",
    userPreviewSecondaryIdentifier: "text-copy-secondary",
  },
};
