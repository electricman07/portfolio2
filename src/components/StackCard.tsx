import { techStack } from "#/data/mock-data";
import StackDefinition from "./StackDefinition";

interface TechStackProps {
  id: number | string;
  title: string;
  intro: string;
  definition: string[];
  headline: string[];
}

const StackCard = ({
  id,
  title,
  intro,
  headline,
  definition,
}: TechStackProps) => {
  return (
    <div key={id}>
      <h2 className="text-2xl font-bold p-5">{title}</h2>
      <p>{intro}</p>
      <ul className="list-disc ml-5">
        {techStack.map((t, i) => (
          <StackDefinition i={i} headline={headline} definition={definition} />
        ))}
      </ul>
    </div>
  );
};

export default StackCard;
