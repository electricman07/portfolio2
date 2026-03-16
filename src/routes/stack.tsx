import { createFileRoute } from "@tanstack/react-router";
import { techStack } from "#/data/mock-data";
import StackCard from "#/components/StackCard";
export const Route = createFileRoute("/stack")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section
      className="section-stack sections flex flex-col items-center m-2.5 md:m-20"
      id="stack"
    >
      <h2 className="stack-title section-title p-2.5 w-auto text-center text-2xl  md:text-5xl mt-17.5 rounded-xl">
        The Web Design Technical Stack
      </h2>
      <article className="stack-article-container p-1 md:p-8 mt-10 md:mt-40">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold p-5">
            Introduction to Web Design and Development
          </h2>
          <p>
            Web design and development is a multifaceted discipline that
            involves a combination of various technologies and tools. From
            creating visually appealing front-ends to ensuring robust back-end
            functionality and managing databases, each layer of the web design
            technical stack plays a crucial role in the development of a
            website.
          </p>
        </section>
        <section>
          {techStack.map(({ id, title, intro, headline, definition }) => (
            <StackCard
              id={id}
              title={title}
              intro={intro}
              headline={headline}
              definition={definition}
            />
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold p-5">Conclusion</h2>
          <p>
            The web design technical stack is a collection of technologies that
            work together to create dynamic, responsive, and interactive
            websites. Understanding the role of each technology and how they
            interconnect is essential for any web developer looking to build
            modern web applications.
          </p>
        </section>
      </article>
    </section>
  );
}
