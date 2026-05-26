import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

function withDescendants(path = "") {
  return `${path.replace(/\/$/, "")}(.*)`;
}

const isPublicRoute = createRouteMatcher([
  withDescendants(process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in"),
  withDescendants(process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up"),
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
