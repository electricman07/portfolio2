import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/importanceofwebdesign")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <article>
      <div className="img-container">
        <img
          src="https://unsplash.com/photos/qC2n6RQU4Vw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d2ViJTIwZGVzaWdufGVufDB8fHx8MTcxNTExNjczOHww&force=true&w=640"
          alt="Blog Image"
        />
      </div>
      <header>
        <h1>The Importance of Web Design</h1>
      </header>
      <section>
        <h2>Creating a Strong First Impression</h2>
        <p>
          Web design is crucial as it impacts how your audience perceives your
          brand. The first few seconds of visiting your website are vital to
          influence users' decisions to stay or leave. A well-designed website
          helps keep your leads on your page.
        </p>
      </section>
      <section>
        <h2>Aiding Your Search Engine Optimization (SEO) Strategy</h2>
        <p>
          Various web design elements and practices influence how you publish
          content on your website, which in turn affects how search engine
          spiders crawl and index your website. This is one thing you cannot
          afford to mess up. If your on-page SEO fundamentals are not up to
          snuff, you'll be fighting an uphill battle for visibility from the
          start.
        </p>
      </section>
      <section>
        <h2>Setting the Impression for Customer Service</h2>
        <p>
          People can judge how you will treat them by looking at your website.
          Your design gives them insight into how you view your audience. If you
          don't put any effort into your website's design, your audience knows
          that you won’t put effort into helping them.
        </p>
      </section>
      <section>
        <h2>Building Trust with Your Audience</h2>
        <p>
          Professional websites signal trust with your audience. They will trust
          your business and feel comfortable checking it out further. It's
          important to build trust with your audience so they remain on your
          site. When visitors stay on your site longer, you create more
          opportunities for your business to capture those leads.
        </p>
      </section>
      <section>
        <h2>Competitors Are Doing It</h2>
        <p>
          If you need a reason for why web design is important, here's a big
          one: Your competitors are already utilizing web design. If you want to
          remain in competition with them, you must use web design for your
          site.
        </p>
      </section>
      <section>
        <h2>Consistency</h2>
        <p>
          When you’re trying to get new leads for your business, you want to
          build up your brand. You want your audience to get familiar with your
          brand so they choose you when they’re ready to convert. Online web
          designs are important because they help create consistency across your
          page.
        </p>
      </section>
      <footer>
        <p>
          Web design is a significant factor that contributes to business
          success in the digital age. A well-designed website can be the
          difference between success and failure in the online marketplace.
        </p>
      </footer>
    </article>
  );
}
