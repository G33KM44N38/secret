import React, { useState, useEffect } from "react";

function calcDiffInMinutes(dateA, dateB) {
  return Math.floor(((dateA.getTime() - dateB.getTime()) / 1000) % 60); // TODO CALCULATIONS HERE
}

export default ({ dateFrom }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [minutesDiff, setMinutesDiff] = useState(
    calcDiffInMinutes(currentDate, dateFrom)
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [currentDate]);

  useEffect(() => {
    setMinutesDiff(calcDiffInMinutes(currentDate, dateFrom));
  }, [currentDate, dateFrom]);

  return (
    <div>
      <div>Date From: {dateFrom.toISOString()}</div>
      <div>CountDown value: {minutesDiff}</div>
    </div>
  );
};