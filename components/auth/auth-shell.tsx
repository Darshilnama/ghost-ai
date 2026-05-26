import type { ReactNode } from "react";
import { BrainCircuit, FileText, GitBranch } from "lucide-react";

interface AuthShellProps {
  children: ReactNode;
  title: string;
}

const featureList = [
  {
    icon: BrainCircuit,
    title: "AI Architecture Generation",
    description: "Describe your system and map it to nodes and edges on a live canvas.",
  },
  {
    icon: GitBranch,
    title: "Real-time Collaboration",
    description: "Work with live cursors, presence indicators, and shared node editing.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description: "Export a Markdown technical spec directly from the canvas graph.",
  },
];

export function AuthShell({ children, title }: AuthShellProps) {
  return (
    <main className="min-h-screen bg-base font-sans text-copy-primary lg:grid lg:grid-cols-2">
      <section className="hidden border-r border-surface-border bg-accent-dim px-12 py-10 lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-brand text-sm font-semibold text-primary-foreground">
            G
          </div>
          <div>
            <p className="text-base font-semibold text-copy-primary">Ghost AI</p>
            <p className="text-xs text-copy-secondary">System design workspace</p>
          </div>
        </div>

        <div className="max-w-xl">
          <h1 className="max-w-lg text-5xl font-semibold leading-tight text-copy-primary">
            {title}
          </h1>
          <p className="mt-7 max-w-md text-lg leading-8 text-copy-secondary">
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>

          <ul className="mt-16 space-y-8">
            {featureList.map(({ description, icon: Icon, title }) => (
              <li key={title} className="flex gap-5">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-surface-border bg-surface text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-copy-primary">{title}</h2>
                  <p className="mt-1 max-w-lg text-sm leading-6 text-copy-secondary">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-copy-muted">
          © 2026 Ghost AI. All rights reserved.
        </p>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-base px-4 py-8 sm:px-6 lg:min-h-0">
        {children}
      </section>
    </main>
  );
}
