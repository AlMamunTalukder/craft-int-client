"use client";

import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate: Date = new Date("2025-04-17T21:00:00");
    const now: Date = new Date();
    const difference: number = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-sm bg-[#3C016F] px-3 py-1 rounded-lg">
      <div className="flex gap-1 justify-center font-mono">
        <span>{timeLeft.days}</span> :<span>{timeLeft.hours}</span> :
        <span>{timeLeft.minutes}</span> :<span>{timeLeft.seconds}</span>
      </div>
      <div className="text-[10px] flex gap-3 justify-center ">
        <span>DAYS</span>
        <span>HRS</span>
        <span>MINS</span>
        <span>SECS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
