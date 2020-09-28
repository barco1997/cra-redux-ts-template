import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let interval: any;
    const computeTime = () => {
      setTime(new Date());
    };
    interval = setInterval(computeTime, 1000);
    computeTime();
    return () => {
      clearInterval(interval);
    };
  }, []);
  return time;
};
