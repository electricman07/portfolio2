import React from "react";

interface TechStackProps {
  i: number;
  definition: string[];
  headline: string[];
}

const stackDefinition = ({ i, definition, headline }: TechStackProps) => {
  return (
    <>
      {i < headline.length ? (
        <li key={i}>
          <strong>{headline[i]}</strong>
          {definition[i]}
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default stackDefinition;
