import React from "react";
import Lottie from "lottie-react-web";
import animation from "assets/empty.json";
import "./Empty.scss";
import { useHistory } from "react-router-dom";

interface Props {
  name: string;
  drawer?: boolean;
}
const Empty: React.FC<Props> = ({ name, drawer = false }) => {
  const history = useHistory();
  return (
    <div className="empty">
      <h1>{name}</h1>
      {!drawer && (
        <div className="animation">
          <Lottie
            options={{
              animationData: animation,
            }}
          />
        </div>
      )}
      <button onClick={() => history.push("/")}>Go Home</button>
    </div>
  );
};
export default Empty;
