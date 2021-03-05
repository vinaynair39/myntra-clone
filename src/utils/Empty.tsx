import React from "react";
import Lottie from "lottie-react-web";
import animation from "assets/empty.json";
import "./Empty.scss";
import { useHistory } from "react-router-dom";

interface Props {
  name: string;
}
const Empty: React.FC<Props> = ({ name }) => {
  const history = useHistory();
  return (
    <div className="empty">
      <h1>Your {name} is empty</h1>
      <div className="animation">
        <Lottie
          options={{
            animationData: animation,
          }}
        />
      </div>
      <button onClick={() => history.push("/")}>Go Home</button>
    </div>
  );
};
export default Empty;
