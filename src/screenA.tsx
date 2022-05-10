// import { useHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const ScreenA = () => {
  const history = useHistory();
  const handleClick = (params: any) => {
    history.push({ pathname: "/", state: params });
  };
  return (
    <div>
      <button onClick={() => handleClick(data)}>ボタン</button>
    </div>
  );
};
