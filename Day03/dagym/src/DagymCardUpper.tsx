import { CSSProperties } from "react";
import DagymAlbum, { DagymAlbumProps } from "./DagymAlbum";
import DagymCategoryList, { DagymCategoryListProps } from "./DagymCategoryList";
import GymName, { GymNameProps } from "./GymName";
import DagymStarRate, { DagymStarRateProps } from "./DagymStarRate";
import Reviews, { ReviewsProps } from "./DagymReviews";
import DagymAddress, { DagymAddressProps } from "./DagymAddress";
import DagymTag, { tagProps } from "./DagymTag";
import DagymPrice, { DagymPriceProps } from "./DagymPrice";

export type CardUpperProps = DagymAlbumProps &
  DagymCategoryListProps &
  GymNameProps &
  DagymStarRateProps &
  ReviewsProps &
  DagymAddressProps &
  tagProps &
  DagymPriceProps;

const DagymCardUpper = (props: CardUpperProps) => {
  const DagymCardUpperStyle: CSSProperties = {
    display: "flex",
    gap: "10px",
  };
  const rightStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "90%",
  };

  const infoStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const eventStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <div style={DagymCardUpperStyle}>
      <DagymAlbum image={props.image}></DagymAlbum>
      <div style={rightStyle}>
        <div style={infoStyle}>
          <DagymCategoryList categories={props.categories}></DagymCategoryList>
          <GymName gymName={props.gymName}></GymName>
          <div>
            <DagymStarRate starRate={props.starRate}></DagymStarRate>
            <Reviews reviews={props.reviews}></Reviews>
            <DagymAddress address={props.address}></DagymAddress>
          </div>
        </div>
        <div style={eventStyle}>
          <DagymTag text={props.text}></DagymTag>
          <DagymPrice price={props.price}></DagymPrice>
        </div>
      </div>
    </div>
  );
};
export default DagymCardUpper;
