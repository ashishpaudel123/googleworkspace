"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const offer = "Valentine's offer";
  const targetDate = new Date("2026-02-15T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hrs: "00",
    min: "00",
    sec: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const totalSeconds = Math.floor(distance / 1000);

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds / 3600) % 24);
      const minutes = Math.floor((totalSeconds / 60) % 60);
      const seconds = Math.floor(totalSeconds % 60);

      // Format with leading zeros (e.g., 5 → "05")
      const format = (n: number) => n.toString().padStart(2, "0");

      setTimeLeft({
        days: format(days),
        hrs: format(hours),
        min: format(minutes),
        sec: format(seconds),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center">
      <h3 className="dancing-script text-accent-pink text-3xl z-10">{offer}</h3>

      <div className="flex gap-4 items-start -mt-3">
        <TimeUnit value={timeLeft.days} label="Days" />
        <span className="text-brand-blue text-3xl font-bold">:</span>
        <TimeUnit value={timeLeft.hrs} label="Hrs" />
        <span className="text-brand-blue text-3xl font-bold">:</span>
        <TimeUnit value={timeLeft.min} label="Min" />
        <span className="text-brand-blue text-3xl font-bold">:</span>
        <TimeUnit value={timeLeft.sec} label="Sec" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-brand-blue text-4xl font-bold tracking-tighter">
        {value}
      </span>
      <span className="text-text-muted text-sm capitalize font-semibold">
        {label}
      </span>
    </div>
  );
}
