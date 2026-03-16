import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/webdesign")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <article>
      <div className="img-container">
        <img
          src="https://unsplash.com/photos/v9FQR4tbIq8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d2ViJTIwZGVzaWdufGVufDB8fHx8MTcxNTExNjczOHww&force=true&w=640"
          alt="Blog Image"
        />
      </div>
      <h1>Web Design: Crafting the User Experience</h1>
      <section>
        <h2>The Essence of Web Design</h2>
        <p>
          Web design is an art form that combines aesthetics with functionality
          to create engaging digital experiences. It's the first impression a
          user has of your brand online and sets the tone for their interaction
          with your website.
        </p>
      </section>
      <section>
        <h2>User-Centric Approach</h2>
        <p>
          At the heart of web design is the user. A user-centric approach
          ensures that the design meets the needs and preferences of the
          audience, providing a seamless and intuitive experience.
        </p>
      </section>
      <section>
        <h2>Visual Harmony</h2>
        <p>
          Creating visual harmony involves the strategic use of color,
          typography, and imagery. These elements must work together cohesively
          to convey the brand's message and guide the user's journey through the
          site.
        </p>
      </section>
      <section>
        <h2>Responsive and Adaptive Design</h2>
        <p>
          In today's multi-device world, responsive and adaptive design is
          non-negotiable. A website must look and function flawlessly across all
          devices, ensuring accessibility for every user.
        </p>
      </section>
      <section>
        <h2>Usability and Accessibility</h2>
        <p>
          Usability and accessibility are key to inclusive web design. This
          means creating websites that are easy to navigate and understand, as
          well as being compliant with standards that make the web accessible to
          people with disabilities.
        </p>
      </section>
      <section>
        <h2>SEO and Performance Optimization</h2>
        <p>
          Good design is also about performance. Optimizing for search engines
          and ensuring fast load times are crucial for user retention and
          engagement.
        </p>
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>
          Web design is an evolving discipline that requires a balance of
          creativity and technical skill. By focusing on the user experience,
          designers can create websites that not only look beautiful but also
          perform exceptionally.
        </p>
      </section>
    </article>
  );
}
