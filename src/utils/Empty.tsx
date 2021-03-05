import React from "react";
import Lottie from "lottie-react-web";
import animation from "assets/empty.json";
import "./Empty.scss";
import { useHistory, useLocation } from "react-router-dom";

interface Props {
  name: string;
  drawer?: boolean;
}
const Empty: React.FC<Props> = ({ name, drawer = false }) => {
  const history = useHistory();
  const { pathname } = useLocation();
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
      {pathname !== "/" && <button onClick={() => history.push("/")}>Go Home</button>}
    </div>
  );
};
export default Empty;
