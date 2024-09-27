import { CSSProperties } from "react";

export type PositionProps = {
  positionImg: string;
};

const positionMap: any = {
  TOP: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-top.svg?v=1724034092925",
  JUG: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-jng.svg?v=1724034092925",
  MID: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-mid.svg?v=1724034092925",
  BOT: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-bot.svg?v=1724034092925",
  SUP: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-sup.svg?v=1724034092925",
};

const Position = (props: PositionProps) => {
  return <div style={positionMap}>{props.positionImg}</div>;
};

export default Position;
