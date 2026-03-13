import { Link } from "@tanstack/react-router";

import {
  Palette,
  Code,
  Wrench,
  ShoppingCart,
  Search,
  Layers,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  palette: Palette,
  code: Code,
  wrench: Wrench,
  "shopping-cart": ShoppingCart,
  search: Search,
  layers: Layers,
};

interface ServiceItemProps {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  details: string;
  icon: string;
}

const ServicesCard = ({
  id,
  slug,
  title,
  description,
  details,
  icon,
}: ServiceItemProps) => {
  const Icon = iconMap[icon] || Palette;
  return (
    <>
      <div
        key={id}
        className="service-section h-auto w-auto lg:max-w-[30%] md:max-w-[45%] m-2.5 rounded-xl relative"
      >
        <div className="flex flex-col items-center">
          <div className="service-image pt-7 text-7xl  w-20 h-20 rounded-xl text-center p-5">
            <Icon className="h-14 w-14" />
          </div>
          <div className="service-title text-center text-4xl mt-5">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="service-body p-5">
          <p className="text-justify">{description}</p>
        </div>
        <div className="p-5">
          <p className="text-justify">{details}</p>
        </div>

        <div className="service-btn">
          <Link
            to={slug}
            className="nav-link"
            activeProps={{ className: "nav-link is-active" }}
          ></Link>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
