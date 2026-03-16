import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/whatiswebdevelopment")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/services/ecommercesolutions"!</div>;
}
