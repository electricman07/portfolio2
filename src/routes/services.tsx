import { createFileRoute } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import {
  faCode,
  faPenToSquare,
  fas,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export const Route = createFileRoute("/services")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section
      className="section-1 sections flex flex-col items-center mt-40"
      id="services"
    >
      <h2 className="services-title section-title mt-2.5 p-2.5 w-auto text-center rounded-xl  mt-5 text-5xl ">
        Services
      </h2>
      <div className="services-container w-full h-[60vh] flex justify-evenly rounded-xl mt-40">
        <div className="service1 service-section h-auto w-auto max-w-[33%] m-2.5 rounded-xl relative ">
          <div className="service-image flex justify-center pt-7 text-7xl">
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
          <div className="service-title service1-title  text-center text-4xl">
            <h3>Web Design</h3>
          </div>
          <div className="service-body p-5">
            <p className="text-justify">
              Web design is a process of conceptualizing, planning, and building
              a collection of electronic files that determine the layout,
              colors, text styles, structure, graphics, images, and use of
              interactive features that deliver pages to your site
              visitors.{" "}
            </p>
          </div>
          <div className="service-btn">
            <a
              href="./whatiswebdesign.html"
              className="card-link"
              aria-label="What is Web Design"
            ></a>
          </div>
        </div>
        <div className="service2 service-section h-auto w-auto max-w-[33%] m-2.5 rounded-xl relative">
          <div className="service-image flex justify-center pt-7 text-7xl">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <div className="service-title service2-title  text-center text-4xl">
            <h3>Web Development</h3>
          </div>
          <div className="service-body p-5">
            <p className="text-justify">
              Web development is the process of building and maintaining
              websites; it's the work that happens behind the scenes to make a
              website look great, work fast and perform well with a seamless
              user experience. Web developers, or 'devs', do this by using a
              variety of coding languages.{" "}
            </p>
          </div>
          <div className="service-btn">
            <a
              href="./whatiswebdevelopment.html"
              className="card-link"
              aria-label="What is Web Development"
            ></a>
          </div>
        </div>
        <div className="service3 service-section h-auto w-auto max-w-[33%] m-2.5 rounded-xl relative">
          <div className="service-image flex justify-center pt-7 text-7xl">
            <FontAwesomeIcon icon={faScrewdriverWrench} />
          </div>
          <div className="service-title service3-title text-center text-4xl">
            <h3>Web Maintenance</h3>
          </div>
          <div className="service-body p-5">
            <p className="text-justify">
              Web maintenance is the act of regularly checking your website for
              issues and mistakes and keeping it updated and relevant. This
              should be done consistently in order to keep your website healthy,
              encourage continued traffic growth, and strengthen your SEO and
              Google rankings.
            </p>
          </div>
          <div className="service-btn">
            <a
              href="./whatiswebmaintenance.html"
              className="card-link"
              aria-label="What is Web Maintenance"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
