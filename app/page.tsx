import {
  ArrowRightIcon,
  BotIcon,
  Layers3Icon,
  SparklesIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const starterSystems = [
  "Monolith application baseline",
  "Event-driven order pipeline",
  "Serverless analytics ingestion",
  "Microservices with async messaging",
  "Global edge content delivery",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-base px-6 py-10 text-copy-primary sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="rounded-3xl border border-surface-border bg-surface/90 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-surface-border bg-accent-dim px-3 py-1 text-sm text-brand">
                <SparklesIcon className="h-4 w-4" />
                Design system foundation
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-copy-primary sm:text-5xl">
                  Ghost AI now has its core UI primitives wired into the dark workspace theme.
                </h1>
                <p className="max-w-xl text-base leading-7 text-copy-secondary">
                  The generated `shadcn/ui` components inherit the app token
                  palette, so cards, inputs, dialogs, and tabs render inside
                  the same dark technical surface language as the rest of the
                  product.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button>
                Open workspace
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Dialog>
                <DialogTrigger className="inline-flex">
                  <Button variant="outline">Preview dialog</Button>
                </DialogTrigger>
                <DialogContent className="rounded-3xl border border-surface-border bg-elevated sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Generate a starter architecture</DialogTitle>
                    <DialogDescription>
                      Use a plain-English prompt to seed a collaborative system
                      design canvas for your team.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3">
                    <Input placeholder="Design a payments platform with async fraud checks" />
                    <Textarea
                      placeholder="Include ingestion, processing, storage, and operator tooling."
                      rows={5}
                    />
                  </div>
                  <DialogFooter showCloseButton>
                    <Button>Queue AI generation</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-2xl border border-surface-border bg-surface shadow-[0_20px_80px_rgba(0,0,0,0.32)]">
            <CardHeader className="border-b border-surface-border">
              <CardTitle>System prompt workspace</CardTitle>
              <CardDescription>
                Inputs and tabs use the shared token palette, with no fallback
                light surfaces.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <Tabs defaultValue="prompt">
                <TabsList className="bg-subtle">
                  <TabsTrigger value="prompt">Prompt</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                  <TabsTrigger value="context">Context</TabsTrigger>
                </TabsList>
                <TabsContent value="prompt" className="mt-4 space-y-4">
                  <Input placeholder="Build a collaborative incident response platform" />
                  <Textarea
                    placeholder="Describe key services, data boundaries, background jobs, and external systems."
                    rows={6}
                  />
                </TabsContent>
                <TabsContent value="notes" className="mt-4 space-y-3 text-copy-secondary">
                  <p>
                    The design system is configured for dark mode only and all
                    primitives now read from CSS variable tokens in
                    `app/globals.css`.
                  </p>
                  <p>
                    `lib/utils.ts` exposes `cn()` for safe Tailwind class
                    merging.
                  </p>
                </TabsContent>
                <TabsContent value="context" className="mt-4">
                  <div className="rounded-2xl border border-surface-border bg-base p-4 text-sm text-copy-secondary">
                    Auth, project metadata, and background task boundaries are
                    defined in the architecture context and can now reuse these
                    base UI primitives.
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="border-surface-border bg-base/80 text-copy-secondary">
              <div className="flex items-center gap-2">
                <BotIcon className="h-4 w-4 text-ai-text" />
                AI actions, forms, and overlays can now share a consistent
                foundation.
              </div>
            </CardFooter>
          </Card>

          <Card className="rounded-2xl border border-surface-border bg-surface">
            <CardHeader className="border-b border-surface-border">
              <CardTitle>Starter system templates</CardTitle>
              <CardDescription>
                ScrollArea and cards are installed and ready for the workspace
                sidebar.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ScrollArea className="h-72 rounded-2xl border border-surface-border bg-base p-1">
                <div className="space-y-3 p-3">
                  {starterSystems.map((system) => (
                    <div
                      key={system}
                      className="rounded-xl border border-surface-border bg-surface px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-accent-dim p-2 text-brand">
                          <Layers3Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-copy-primary">{system}</p>
                          <p className="text-sm text-copy-muted">
                            Import directly into the live architecture canvas.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="border-surface-border bg-base/80">
              <Button variant="secondary" className="w-full">
                Browse starter library
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </main>
  );
}
