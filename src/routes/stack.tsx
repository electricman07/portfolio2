import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stack")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section
      className="section-stack sections flex flex-col items-center m-20"
      id="stack"
    >
      <h2 className="stack-title section-title p-2.5 w-auto text-center text-5xl mt-17.5 rounded-xl">
        The Web Design Technical Stack
      </h2>
      <article className="stack-article-container p-8 mt-40">
        <section>
          <h2 className="text-3xl font-bold p-5">
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
          <h2 className="text-2xl font-bold p-5">Front-End Development</h2>
          <p>
            Front-end development is concerned with the user interface and user
            experience aspects of a website. It involves the use of:
          </p>
          <ul className="list-disc ml-5">
            <li>
              <strong>HTML:</strong> The backbone of any website, used to
              structure content on the web.
            </li>
            <li>
              <strong>CSS:</strong> The styling language that describes how HTML
              elements should be displayed on screen.
            </li>
            <li>
              <strong>JavaScript:</strong> A scripting language that enables
              interactive features on websites.
            </li>
            <li>
              <strong>Frameworks and Libraries:</strong> Tools like React,
              Angular, and Vue.js that provide pre-written code to help build
              complex applications more efficiently.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold p-5">Back-End Development</h2>
          <p>
            The back-end, or server-side, is where the application runs, and
            data processing is performed. It typically involves:
          </p>
          <ul className="list-disc ml-5">
            <li>
              <strong>Server Languages:</strong> Such as Node.js, Ruby, Python,
              PHP, and Java, which handle the logic of the application.
            </li>
            <li>
              <strong>Server Frameworks:</strong> Frameworks like Express.js,
              Django, Ruby on Rails, and Laravel that provide tools and
              libraries to simplify complex coding tasks.
            </li>
            <li>
              <strong>APIs:</strong> Application Programming Interfaces allow
              different software components to communicate with each other.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold p-5">Databases</h2>
          <p>
            Databases store, retrieve, and manage data. They are an essential
            part of the back-end stack. Common databases include:
          </p>
          <ul className="list-disc ml-5">
            <li>
              <strong>SQL Databases:</strong> Such as MySQL, PostgreSQL, and
              Microsoft SQL Server, which use structured query language for
              managing data.
            </li>
            <li>
              <strong>NoSQL Databases:</strong> Like MongoDB and Cassandra,
              which are designed for large sets of distributed data.
            </li>
            <li>
              <strong>ORMs:</strong> Object-Relational Mapping tools like
              Sequelize and Mongoose that allow developers to interact with
              databases using programming languages.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold p-5">
            Connecting Front-End and Back-End
          </h2>
          <p>Integration of the front-end and back-end is achieved through:</p>
          <ul className="list-disc ml-5">
            <li>
              <strong>HTTP Requests:</strong> The foundation of data exchange on
              the web, allowing clients and servers to communicate.
            </li>
            <li>
              <strong>RESTful Services:</strong> Architectural style for
              designing networked applications, using HTTP to make calls between
              machines.
            </li>
            <li>
              <strong>GraphQL:</strong> A query language for APIs, providing a
              more efficient way to design and run queries.
            </li>
          </ul>
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
