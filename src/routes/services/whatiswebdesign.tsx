import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/whatiswebdesign")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <article>
      <header>
        <h1>Understanding Web Design</h1>
      </header>
      <section>
        <h2>Defining Web Design</h2>
        <p>
          Web design is a process of conceptualizing, planning, and building a
          collection of electronic files that determine the layout, colors, text
          styles, structure, graphics, images, and use of interactive features
          that deliver pages to your site visitors. It is, in essence, the
          creation of an experience that facilitates the digital presence of a
          brand or individual.
        </p>
      </section>
      <section>
        <h2>The Elements of Web Design</h2>
        <p>
          Effective web design merges traditional principles of design with the
          innovation of technology. Here are the key elements:
        </p>
        <ul>
          <li>
            <strong>Layout:</strong> The arrangement of graphics, ads, and text.
          </li>
          <li>
            <strong>Color:</strong> The choice of colors depends on the purpose
            and clientele; it could be simple black-and-white to multi-colored
            design.
          </li>
          <li>
            <strong>Graphics:</strong> Logos, photos, clipart, or icons, all of
            which enhance the web design.
          </li>
          <li>
            <strong>Fonts:</strong> The use of various fonts can enhance a
            website design.
          </li>
          <li>
            <strong>Content:</strong> Content and design can work together to
            enhance the message of the site through visuals and text.
          </li>
        </ul>
      </section>
      <section>
        <h2>User Experience and Functionality</h2>
        <p>
          Web design is not just about aesthetics. It also includes the
          functionality of a website. It encompasses user experience, navigation
          logic, and how the website will work on various devices, often
          referred to as responsive design.
        </p>
      </section>
      <section>
        <h2>The Importance of Web Design</h2>
        <p>
          Good web design is essential because it affects how your audience
          perceives your brand. The impression you make on them can either get
          them to remain on your page and learn about your business or leave
          your page and turn to a competitor.
        </p>
      </section>
      <section>
        <h2>Web Design Tools and Technologies</h2>
        <p>
          Web designers use a variety of tools and technologies to achieve the
          desired look and feel, including HTML, CSS, JavaScript, Photoshop,
          Illustrator, and web development frameworks like Bootstrap or
          Foundation.
        </p>
      </section>
      <footer>
        <p>
          Web design is a complex, but essential, part of creating an online
          identity. It's a field that requires both creative and technical
          skills, and it's constantly evolving with the web itself.
        </p>
      </footer>
    </article>
  );
}
