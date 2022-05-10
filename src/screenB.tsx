import { useLocation } from "react-router-dom";
import { useState } from "react";
export const ScreenB = () => {
  const location = useLocation();
  const [resultSet, setResultSet] = useState<any>(location.state);
  return;
};
