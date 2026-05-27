// "use client";

// import { Plus } from "lucide-react";
// import { useState } from "react";

// import { EditorNavbar } from "@/components/editor/editor-navbar";
// import { ProjectSidebar } from "@/components/editor/project-sidebar";
// import { ProjectDialogs } from "@/components/editor/project-dialogs";
// import type { MockProject } from "@/hooks/use-project-dialogs";
// import { useProjectDialogs } from "@/hooks/use-project-dialogs";
// import { Button } from "@/components/ui/button";

// const mockProjects: MockProject[] = [
//   { id: "payments-platform", name: "Payments Platform", isOwner: true },
//   { id: "incident-response", name: "Incident Response", isOwner: true },
//   { id: "analytics-ingestion", name: "Analytics Ingestion", isOwner: false },
// ];

// export function EditorChromePreview() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const projectDialogs = useProjectDialogs();
//   const ownedProjects = mockProjects.filter((project) => project.isOwner);
//   const sharedProjects = mockProjects.filter((project) => !project.isOwner);

//   return (
//     <div className="min-h-screen bg-base text-copy-primary">
//       <EditorNavbar
//         isSidebarOpen={isSidebarOpen}
//         onSidebarToggle={() => setIsSidebarOpen((open) => !open)}
//       />

//       <ProjectSidebar
//         isOpen={isSidebarOpen}
//         onClose={() => setIsSidebarOpen(false)}
//         onCreateProject={projectDialogs.openCreateDialog}
//         onDeleteProject={projectDialogs.openDeleteDialog}
//         onRenameProject={projectDialogs.openRenameDialog}
//         ownedProjects={ownedProjects}
//         sharedProjects={sharedProjects}
//       />

//       <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
//         <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col items-center justify-center px-4 py-8 text-center sm:px-6 lg:px-10">
//           <h1 className="text-3xl font-semibold text-copy-primary sm:text-4xl">
//             Create a project or open an existing one
//           </h1>
//           <p className="mt-4 max-w-xl text-base leading-7 text-copy-secondary">
//             Start a new architecture workspace, or choose a project from the sidebar.
//           </p>
//           <Button
//             type="button"
//             className="mt-8"
//             onClick={projectDialogs.openCreateDialog}
//           >
//             <Plus className="h-4 w-4" />
//             New Project
//           </Button>
//         </div>
//       </main>

//       <ProjectDialogs
//         activeDialog={projectDialogs.activeDialog}
//         activeProject={projectDialogs.activeProject}
//         isLoading={projectDialogs.isLoading}
//         onClose={projectDialogs.closeDialog}
//         onProjectNameChange={projectDialogs.setProjectName}
//         onSubmit={projectDialogs.submitDialog}
//         projectName={projectDialogs.projectName}
//         slugPreview={projectDialogs.slugPreview}
//       />
//     </div>
//   );
// }
