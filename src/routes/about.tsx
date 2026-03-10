import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <section
      className="section-2 sections flex flex-col items-center mt-40 m-20 rounded-xl"
      id="about"
    >
      <h2 className="about-title section-title p-2.5 w-auto text-center rounded-xl mt-5 text-5xl">
        About
      </h2>
      <article className="about-article-container p-5 bg-(--bg-primary) mt-40">
        <header>
          <h2 className="text-4xl font-bold">About me</h2>
        </header>
        <section>
          <h3 className="text-2xl font-bold">
            Professional Web Designer and Developer
          </h3>
          <p>
            With over five years of professional experience, I have mastered the
            art of web design and development. My journey began with a
            fascination for the foundational language of the web, HTML, and has
            since expanded to a wide array of technologies that bring websites
            to life.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Expertise in Web Technologies</h3>
          <p>
            My expertise encompasses a variety of web technologies that are
            essential for creating modern, responsive, and user-friendly
            websites:
          </p>
          <ul className="list-disc ml-5">
            <li>
              <strong>HTML:</strong> Proficient in HTML5, Glen structures
              content with semantic markup, ensuring accessibility and search
              engine optimization.
            </li>
            <li>
              <strong>CSS:</strong> With a deep understanding of CSS3, he styles
              websites with flair, focusing on layout, color schemes, and
              animations.
            </li>
            <li>
              <strong>JavaScript:</strong> Glen brings interactivity to websites
              using vanilla JavaScript and popular frameworks like React and
              Angular.
            </li>
            <li>
              <strong>Backend Technologies:</strong> He is well-versed in
              server-side languages such as PHP and Node.js, and has experience
              with databases like MySQL and MongoDB.
            </li>
            <li>
              <strong>Web Performance:</strong> Dedicated to optimizing load
              times and efficiency, Glen implements best practices for web
              performance.
            </li>
            <li>
              <strong>Responsive Design:</strong> Understanding the importance
              of mobile-first design, he ensures that all websites are fully
              responsive and adaptable to various screen sizes.
            </li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Commitment to Excellence</h3>
          <p>
            My commitment to excellence is evident in every project I undertake.
            I stay abreast of the latest trends and continuously hone my skills
            to deliver cutting-edge web solutions.
          </p>
        </section>
        <footer>
          <p>
            Contact me for your next web project and take the first step towards
            a stunning online presence.
          </p>
        </footer>
      </article>
    </section>
  );
}
