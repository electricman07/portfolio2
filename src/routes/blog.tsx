import { createFileRoute } from "@tanstack/react-router";
import { blogPosts } from "../data/mock-data";
import BlogItem from "#/components/BlogItem";

export const Route = createFileRoute("/blog")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section
      className="section-6 sections flex flex-col items-center"
      id="blog"
    >
      <div className="blog-title-container">
        <h2 className="blog-title-h2 section-title text-center text-5xl mt-17.5 p-2.5 w-auto bg-[var(--bg-primary)] text-[var(--bg-background)] rounded-xl">
          Blog
        </h2>
      </div>
      <div className="blog-container grid grid-cols-3 gap-1.5 mx-auto my-5 p-5 max-w-250">
        {blogPosts.map(({ id, title, excerpt, image, alt }) => (
          <BlogItem
            id={id}
            title={title}
            excerpt={excerpt}
            image={image}
            alt={alt}
          />
        ))}
      </div>
    </section>
  );
}
