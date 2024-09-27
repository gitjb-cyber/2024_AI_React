import { CSSProperties } from "react";
import DagymCardUpper, { CardUpperProps } from "./DagymCardUpper";
import DagymCardDown from "./DagymCardDown";

type CardProps = CardUpperProps;

const DagymCard = (props: CardProps) => {
  const DagymCardStyle: CSSProperties = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <article style={DagymCardStyle}>
      <DagymCardUpper {...props} />
      <DagymCardDown />
    </article>
  );
};

export default DagymCard;
