import { CSSProperties } from "react";

export type HardChamImgProps = {
  hardChamImg: string;
};

const HardChamImg = (props: HardChamImgProps) => {
  const HardChamImg: CSSProperties = {
    width: "24px",
    height: "24px",
    backgroundColor: "#EBEEF1",
  };
  return (
    <article>
      <img
        style={{ width: "24px", height: "24px" }}
        src={props.hardChamImg}
        alt=""
      />
      <img
        style={{ width: "24px", height: "24px" }}
        src={props.hardChamImg}
        alt=""
      />
      <img
        style={{ width: "24px", height: "24px" }}
        src={props.hardChamImg}
        alt=""
      />
    </article>
  );
};

export default HardChamImg;
