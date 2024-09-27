export type RankUpProps = {
  rankUp: number;
};

const RankUp = (props: RankUpProps) => {
  return <span style={{ margin: "0px 0px 0px 10px" }}>{props.rankUp}</span>;
};

export default RankUp;
