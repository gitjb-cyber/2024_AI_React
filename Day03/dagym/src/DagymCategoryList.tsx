//

import { CSSProperties } from "react";

export type DagymCategoryListProps = {
  categories: string;
};

const DagymCategoryList = (props: DagymCategoryListProps) => {
  const CategoryStyle: CSSProperties = {
    color: "#999fa9",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "20px",
    gap: "10px",
  };

  return <span style={CategoryStyle}>{props.categories}</span>;
};

export default DagymCategoryList;
