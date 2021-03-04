import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ShirtDetailPage.scss";

interface Props {}
const Detail: React.FC<Props> = ({}) => {
  const { id } = useParams() as { id: string };

  return <div className="detail"></div>;
};
export default Detail;
