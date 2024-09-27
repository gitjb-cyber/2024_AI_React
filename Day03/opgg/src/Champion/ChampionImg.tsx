export type ChampionImgProps = {
  championImg: string;
  championName: string;
};

const ChampionImg = (props: ChampionImgProps) => {
  return (
    <article
      style={{ width: "24px", height: "24px", backgroundColor: "#EBEEF1" }}
    >
      <img
        style={{ width: "100%", height: "100%" }}
        src={props.championImg}
        alt=""
      />
      {props.championName}
    </article>
  );
};

export default ChampionImg;
