import React from "react";
import { useState, useEffect } from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  const [timer, setTimer] = useState([]);

  const getTimeLeft = (e) => {
    const total = (Date.parse(e) + 1000*60*60*24*15) - Date.parse(new Date());
    const days = Math.floor(total / 1000 / 60 / 60 / 24);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return [total, days, hours, minutes, seconds];
  };

  const startTimer = (e) => {
    let [total, days, hours, minutes, seconds] = getTimeLeft(e);
    if (total >= 0) {
      setTimer(() =>
        [days, hours, minutes, seconds].map((el) =>
          el > 9 ? el : "0" + el.toString()
        )
      );
    } else {
      setTimer(["00", "00", "00", "00"]);
    }
  };

  useEffect(() => {
    let deadline = new Date();
    const clearTimer = (e) => {
      setTimer(["15", "00", "00", "00"]);
      setInterval(() => {
        startTimer(e);
      }, 1000);
    };
    clearTimer(deadline);
  }, []);
  const titleTimeArr = ["days", "hours", "minutes", "seconds"];
  return (
    <div className={styles.wrapper}>
      {timer.map((el, i) => {
        return (
          <div key={titleTimeArr[i]} className={styles.inner}>
            <div className={styles.box}>
              <span className={styles.time}>{el}</span>
            </div>
            <span className={styles.title}>{titleTimeArr[i]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Timer;
