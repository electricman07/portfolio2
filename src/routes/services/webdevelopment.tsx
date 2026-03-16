import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/webdevelopment")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <article>
      <div className="img-container">
        <img
          src="https://unsplash.com/photos/hGV2TfOh0ns/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fHx8MTcxNTExNjczOHww&force=true&w=640"
          alt="Blog Image"
        />
      </div>
      <h1>Web Development: The Backbone of the Digital Age</h1>
      <section>
        <h2>Introduction to Web Development</h2>
        <p>
          Web development is the building and maintenance of websites; it's the
          work that happens behind the scenes to make a website look great, work
          fast and perform well with a seamless user experience. This section
          will introduce the reader to the basics of web development and its
          importance in today's digital world.
        </p>
      </section>
      <section>
        <h2>Front-End Development</h2>
        <p>
          Front-end development involves creating the visual elements of a
          website that users see and interact with. This section will delve into
          HTML, CSS, JavaScript, and frameworks that are essential for building
          responsive and interactive websites.
        </p>
      </section>
      <section>
        <h2>Back-End Development</h2>
        <p>
          Back-end development is focused on server-side logic, databases, and
          application integration. This section will cover server languages like
          PHP, Python, and Ruby, as well as database management systems such as
          MySQL and MongoDB.
        </p>
      </section>
      <section>
        <h2>Full-Stack Development</h2>
        <p>
          Full-stack developers are proficient in both front-end and back-end
          languages and frameworks. This section will discuss the versatility
          and skills required to manage both client and server software.
        </p>
      </section>
      <section>
        <h2>Web Development Tools and Environments</h2>
        <p>
          Modern web development relies on a variety of tools and environments
          to streamline the development process. This section will explore code
          editors, version control systems, and development environments like
          Node.js.
        </p>
      </section>
      <section>
        <h2>Challenges in Web Development</h2>
        <p>
          Web development is a field that constantly evolves with new
          technologies and methodologies. This section will address some of the
          challenges developers face, such as cross-browser compatibility and
          website security.
        </p>
      </section>
      <section>
        <h2>The Future of Web Development</h2>
        <p>
          As technology advances, so does web development. This section will
          speculate on future trends, including AI, machine learning, and the
          role of web development in the Internet of Things (IoT).
        </p>
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>
          This concluding section will summarize the key points discussed in the
          article and reflect on the impact of web development on the future of
          technology and digital experiences.
        </p>
      </section>
    </article>
  );
}
