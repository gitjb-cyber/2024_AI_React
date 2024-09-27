// 다짐 카드 이미지 설정
import { CSSProperties } from "react";
export type DagymAlbumProps = {
  image: string;
};

const DagymAlbum = (props: DagymAlbumProps) => {
  const divStyle: CSSProperties = {
    width: "130px",
    height: "150px",
    gap: "10px",
  };

  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  };

  return (
    <div style={divStyle}>
      <img style={imgStyle} src={props.image} alt="" />
    </div>
  );
};

export default DagymAlbum;
