import { createFileRoute } from "@tanstack/react-router";

import { services } from "../data/mock-data";

import ServicesCard from "#/components/ServicesCard";

export const Route = createFileRoute("/services")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section
      className="section-1 sections flex flex-col items-center m-20"
      id="services"
    >
      <h2 className="services-title section-title p-2.5 w-auto text-center rounded-xl  mt-5 text-5xl ">
        Services
      </h2>
      <div className="services-container md:w-[95%] w-full h-full flex flex-col md:flex-row md:flex-wrap justify-evenly md:justify-center rounded-xl mt-40">
        <div className="service-section h-auto w-auto  m-2.5 rounded-xl relative flex flex-wrap justify-center">
          {services.map(({ id, slug, title, description, details, icon }) => (
            <ServicesCard
              id={id}
              slug={slug}
              title={title}
              description={description}
              details={details}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
