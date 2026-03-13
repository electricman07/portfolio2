import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/seooptimization')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/services/seooptimization"!</div>
}
