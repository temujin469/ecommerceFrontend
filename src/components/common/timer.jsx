import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });
  return (
    <ul className="w-full flex justify-between gap-1 text-white">
      <li className="w-full aspect-square text-center flex flex-col items-center justify-center text-[7px] sm:text-sm bg-primary rounded-lg">
        <span className="text-[13px] sm:text-2xl leading-[13px]">{days}</span> Өдөр
      </li>
      <li className="w-full aspect-square text-center flex flex-col items-center justify-center text-[7px] sm:text-sm bg-primary rounded-lg">
        <span className="text-[13px] sm:text-2xl leading-[13px]">{hours}</span> Цаг
      </li>
      <li className="w-full aspect-square text-center flex flex-col items-center justify-center text-[7px] sm:text-sm bg-primary rounded-lg">
        <span className="text-[13px] sm:text-2xl leading-[13px]">{minutes}</span> Мин
      </li>
      <li className="w-full aspect-square text-center flex flex-col items-center justify-center text-[7px] sm:text-sm bg-primary rounded-lg">
        <span className="text-[13px] sm:text-2xl leading-[13px]">{seconds}</span> Сэк
      </li>
    </ul>
  );
};

export default Timer;
