import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="section-4 sections flex flex-col items-center" id="faq">
      <div className="faq-container w-[60%] p-5 mx-auto my-0  rounded-xl">
        <h2 className="faq-title section-title text-5xl text-center  rounded-xl mt-17.5">
          Frequently Asked Questions
        </h2>

        {/* <!-- Question 1 --> */}
        <div className="faq-question p-2.5 my-2.5 mx-0 cursor-pointer rounded-xl bg-(--bg-background)">
          <strong>What is web design?</strong>
        </div>
        <div className="faq-answer m-0 p-2.5 bg-(--bg-background) rounded-xl hidden">
          <p>
            Web design is the process of creating websites. It encompasses
            several different aspects, including webpage layout, content
            production, and graphic design.
          </p>
        </div>

        {/* <!-- Question 2 --> */}
        <div className="faq-question  p-2.5 my-2.5 mx-0 cursor-pointer rounded-xl bg-(--bg-background)">
          <strong>How much does a new website cost?</strong>
        </div>
        <div className="faq-answer m-0 p-2.5 bg-(--bg-background) rounded-xl hidden">
          <p>
            The cost of a website can vary depending on various factors,
            including the complexity of the design, the number of pages, and any
            additional features required.
          </p>
        </div>

        {/* <!-- Question 3 --> */}
        <div className="faq-question p-2.5 my-2.5 mx-0 cursor-pointer rounded-xl bg-(--bg-background)">
          <strong>How long does it take to build a website?</strong>
        </div>
        <div className="faq-answer m-0 p-2.5 bg-(--bg-background) rounded-xl hidden">
          <p>
            The time it takes to build a website depends on the complexity of
            the site. A basic website typically takes around 4-6 weeks from
            beginning to end.
          </p>
        </div>

        {/* <!-- Question 4 --> */}
        <div className="faq-question p-2.5 my-2.5 mx-0 cursor-pointer rounded-xl bg-(--bg-background)">
          <strong>Do I need to provide my own content for the website?</strong>
        </div>
        <div className="faq-answer m-0 p-2.5 bg-(--bg-background) rounded-xl hidden">
          <p>
            Yes, you will need to provide the content for your website. However,
            we can help guide you on the type of content that will be most
            effective for your goals.
          </p>
        </div>

        {/* <!-- Question 5 --> */}
        <div className="faq-question p-2.5 my-2.5 mx-0 cursor-pointer rounded-xl bg-(--bg-background)">
          <strong>Can you help me update my existing website?</strong>
        </div>
        <div className="faq-answer m-0 p-2.5 bg-(--bg-background) rounded-xl hidden">
          <p>
            Absolutely! We can help you refresh your current website, fix
            issues, and add new features to improve its performance and design.
          </p>
        </div>

        {/* <!-- Question 6 --> */}
        <div className="faq-question p-2.5 my-2.5 mx-0 cursor-pointer rounded-xl bg-(--bg-background)">
          <strong>Will my website be mobile-friendly?</strong>
        </div>
        <div className="faq-answer m-0 p-2.5 bg-(--bg-background) rounded-xl hidden">
          <p>
            Yes, all our websites are designed to be responsive, which means
            they will work on a variety of devices, including desktops, tablets,
            and smartphones.
          </p>
        </div>

        {/* <!-- Question 7 --> */}
        <div className="faq-question p-2.5 my-2.5 mx-0 cursor-pointer rounded-xl bg-(--bg-background)">
          <strong>What is SEO and do I need it for my website?</strong>
        </div>
        <div className="faq-answer m-0 p-2.5 bg-(--bg-background) rounded-xl hidden">
          <p>
            SEO stands for Search Engine Optimization. It's the practice of
            optimizing your website to rank higher in search engine results,
            which increases your website's visibility.
          </p>
        </div>

        {/* <!-- Question 8 --> */}
        <div className="faq-question p-2.5 my-2.5 mx-0 cursor-pointer rounded-xl bg-(--bg-background)">
          <strong>Do you offer e-commerce solutions?</strong>
        </div>
        <div className="faq-answer m-0 p-2.5 bg-(--bg-background) rounded-xl hidden">
          <p>
            Yes, we offer a range of e-commerce solutions that can be tailored
            to your specific needs, whether you're selling a few products or a
            large catalog of items.
          </p>
        </div>

        {/* <!-- Question 9 --> */}
        <div className="faq-question p-2.5 my-2.5 mx-0 cursor-pointer rounded-xl bg-(--bg-background)">
          <strong>Can you provide web hosting and domain services?</strong>
        </div>
        <div className="faq-answer m-0 p-2.5 bg-(--bg-background) rounded-xl hidden">
          <p>
            While we don't directly provide hosting and domain services, we can
            certainly assist you in setting them up with reputable providers.
          </p>
        </div>

        {/* <!-- Question 10 --> */}
        <div className="faq-question p-2.5 my-2.5 mx-0 cursor-pointer rounded-xl bg-(--bg-background)">
          <strong>Do you offer ongoing support and maintenance?</strong>
        </div>
        <div className="faq-answer m-0 p-2.5 bg-(--bg-background) rounded-xl hidden">
          <p>
            Yes, we offer ongoing support and maintenance packages to ensure
            your website continues to run smoothly after launch.
          </p>
        </div>
      </div>
    </section>
  );
}
