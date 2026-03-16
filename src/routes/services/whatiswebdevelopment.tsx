import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/whatiswebdevelopment")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <article>
      <header>
        <h1>What is Web Development?</h1>
      </header>
      <section>
        <h2>Overview of Web Development</h2>
        <p>
          Web development is the process of building and maintaining websites;
          it's the work that happens behind the scenes to make a website look
          great, work fast and perform well with a seamless user experience. Web
          developers, or 'devs', do this by using a variety of coding languages.
          The languages they use depends on the types of tasks they are
          preforming and the platforms on which they are working.
        </p>
      </section>
      <section>
        <h2>Front-End vs Back-End Development</h2>
        <p>
          Web development skills are split into two parts: front-end (the
          user-facing side) and back-end (the server side). Let's delve into the
          details.
        </p>
        <ul>
          <li>
            <strong>Front-End:</strong> Front-end developers use HTML, CSS, and
            JavaScript to code up websites. They take the design, and turn it
            into a functioning website.
          </li>
          <li>
            <strong>Back-End:</strong> Back-end developers work on servers,
            databases, and applications. They ensure that data or services
            requested by the front-end system or software are delivered through
            programmatic means.
          </li>
        </ul>
      </section>
      <section>
        <h2>Full-Stack Development</h2>
        <p>
          Full-stack developers understand both front-end and back-end
          strategies and processes, which means that they are perfectly
          positioned to oversee the entire process. In the industry, full-stack
          developers are highly sought after for their breadth of expertise.
        </p>
      </section>
      <section>
        <h2>The Role of Web Development in Business</h2>
        <p>
          Web development plays a critical role in any business. Whether it's a
          corporate website to communicate with clients and generate leads, an
          e-commerce site to sell goods or services, a mobile app, a student
          portal, or an internal app that helps manage your team, a
          well-developed site can serve as a powerful business tool.
        </p>
      </section>
      <section>
        <h2>Technologies Used in Web Development</h2>
        <p>
          There are numerous web development technologies, including, but not
          limited to:
        </p>
        <ul>
          <li>HTML/CSS/JavaScript</li>
          <li>PHP, Ruby on Rails, Python, Java, .NET</li>
          <li>MySQL, MongoDB, Oracle, SQLServer</li>
          <li>Angular.js, React.js, Vue.js</li>
          <li>Node.js</li>
          <li>Git and GitHub</li>
        </ul>
      </section>
      <section>
        <h2>Learning Web Development</h2>
        <p>
          Web development is a dynamic field. Aspiring developers need to
          constantly learn new skills and technologies to keep up with the rapid
          pace of change. Whether you're just starting out, or looking to dive
          deeper, there are a wealth of resources available, including online
          courses, tutorials, forums, and documentation.
        </p>
      </section>
      <footer>
        <p>
          Web development is an exciting field that combines creativity and
          problem-solving. It's a sector that's growing rapidly and offers a
          rewarding career to those who are willing to learn and adapt.
        </p>
      </footer>
    </article>
  );
}
