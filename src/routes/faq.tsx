import { createFileRoute } from "@tanstack/react-router";
import { faqItems } from "#/data/mock-data";
import FaqItem from "#/components/FaqItem";

export const Route = createFileRoute("/faq")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="section-4 sections flex flex-col items-center" id="faq">
      <div className="faq-container w-full md:w-[60%] p-5 mx-auto my-0  rounded-xl">
        <h2 className="faq-title section-title text-2xl md:text-5xl text-center  rounded-xl mt-17.5">
          Frequently Asked Questions
        </h2>

        {faqItems.map(({ id, question, answer }) => (
          <FaqItem id={id} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
}
