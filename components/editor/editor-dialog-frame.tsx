import type { ComponentProps } from "react";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function EditorDialogFrame({
  className,
  ...props
}: ComponentProps<typeof DialogContent>) {
  return (
    <DialogContent
      className={cn(
        "rounded-3xl border border-surface-border bg-elevated p-6 text-copy-primary shadow-[0_24px_120px_rgba(0,0,0,0.5)] sm:max-w-lg",
        className,
      )}
      {...props}
    />
  );
}

export function EditorDialogHeader({
  className,
  ...props
}: ComponentProps<typeof DialogHeader>) {
  return <DialogHeader className={cn("gap-3", className)} {...props} />;
}

export function EditorDialogTitle({
  className,
  ...props
}: ComponentProps<typeof DialogTitle>) {
  return (
    <DialogTitle
      className={cn("text-lg font-semibold tracking-tight text-copy-primary", className)}
      {...props}
    />
  );
}

export function EditorDialogDescription({
  className,
  ...props
}: ComponentProps<typeof DialogDescription>) {
  return (
    <DialogDescription
      className={cn("leading-6 text-copy-secondary", className)}
      {...props}
    />
  );
}

export function EditorDialogFooter({
  className,
  ...props
}: ComponentProps<typeof DialogFooter>) {
  return (
    <DialogFooter
      className={cn(
        "-mx-6 -mb-6 mt-2 rounded-b-3xl border-surface-border bg-base/80 px-6 py-4",
        className,
      )}
      {...props}
    />
  );
}
