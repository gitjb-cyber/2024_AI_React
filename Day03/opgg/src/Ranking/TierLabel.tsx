export type TierLabelProps = {
  TierLabelImg: string;
};

const TierLabel = (props: TierLabelProps) => {
  const TierMap: any = {
    "1": "https://s-lol-web.op.gg/images/icon/icon-tier-1.svg?v=1724034092925",
    "2": "https://s-lol-web.op.gg/images/icon/icon-tier-2.svg?v=1724034092925",
    "3": "https://s-lol-web.op.gg/images/icon/icon-tier-3.svg?v=1724034092925",
    "4": "https://s-lol-web.op.gg/images/icon/icon-tier-4.svg?v=1724034092925",
    "5": "https://s-lol-web.op.gg/images/icon/icon-tier-5.svg?v=1724034092925",
  };
  return (
    <article style={{ width: "24px", height: "24px" }}>
      <img src={props.TierLabelImg} alt="" />
    </article>
  );
};

export default TierLabel;
