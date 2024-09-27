import { CSSProperties } from "react";
import ChampionImg, { ChampionImgProps } from "./Champion/ChampionImg";
import HardChamImg, { HardChamImgProps } from "./Champion/HardChamImg";
import Position, { PositionProps } from "./Champion/Position";
import BanRate, { BanRateProps } from "./Label/BanRate";
import PickRate, { PickRateProps } from "./Label/PickRate";
import WinRate, { WinRateProps } from "./Label/WinRate";
import RankLabel, { RankLabelProps } from "./Ranking/RankLabel";
import RankUp, { RankUpProps } from "./Ranking/RankUp";
import TierLabel, { TierLabelProps } from "./Ranking/TierLabel";

export type CardProps = ChampionImgProps &
  RankLabelProps &
  BanRateProps &
  PositionProps &
  PickRateProps &
  WinRateProps &
  RankUpProps &
  TierLabelProps &
  HardChamImgProps;

const Card = (props: CardProps) => {
  const CardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
    borderBottom: "1px sold",
  };

  return (
    <div style={CardStyle}>
      <RankLabel rankLabel={props.rankLabel}></RankLabel>
      <RankUp rankUp={props.rankUp}></RankUp>

      <ChampionImg championImg={props.championImg}></ChampionImg>

      <TierLabel TierLabelImg={props.TierLabelImg}></TierLabel>

      <Position positionImg={props.TierLabelImg}></Position>

      <WinRate winRate={props.winRate}></WinRate>
      <PickRate pickRate={props.pickRate}></PickRate>
      <BanRate banRate={props.banRate}></BanRate>
      <div>
        <HardChamImg hardChamImg={props.hardChamImg}></HardChamImg>
      </div>
    </div>
  );
};

export default Card;
