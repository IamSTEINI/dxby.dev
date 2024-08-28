import { useEffect, useState } from "react";

const LiveTimeComponent: React.FC = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear());
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${day}/${month} ${hours}:${minutes}:${seconds}`;
  }

  return <>{time}</>;
};

export default LiveTimeComponent;
