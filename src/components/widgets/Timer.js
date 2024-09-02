import React, { useState, useEffect, useRef, useCallback } from "react";

const Timer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(null);
  const [initialTime, setInitialTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timeInputRef = useRef(null);
  const updateButtonRef = useRef(null);
  const stopButtonRef = useRef(null);
  const pressStartTime = useRef(null);
  const isHolding = useRef(false);
  const resetTimeoutRef = useRef(null);

  const updateClock = useCallback(() => {
    const timeInputValue = timeInputRef.current.value;
    let totalSeconds = parseInt(timeInputValue, 10);

    if (isNaN(totalSeconds)) {
      totalSeconds = 0;
    }

    const hours = Math.floor(totalSeconds / 10000);
    const minutes = Math.floor((totalSeconds % 10000) / 100);
    const seconds = totalSeconds % 100;

    const calculatedTime = hours * 3600 + minutes * 60 + seconds;
    setRemainingTime(calculatedTime);
    setInitialTime(calculatedTime);
  }, []);

  const resetTimer = useCallback(() => {
    clearInterval(timer);
    setRemainingTime(initialTime);
    setIsPaused(false);
    setIsRunning(false);
    setTimer(null);
  }, [initialTime, timer]);

  const startTimer = useCallback(() => {
    clearInterval(timer);
    setIsPaused(false);
    setIsRunning(true);

    const newTimer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(newTimer);
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setTimer(newTimer);
  }, [timer]);

  const handleStopButtonClick = useCallback(() => {
    if (isPaused) {
      const newTimer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(newTimer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setTimer(newTimer);
    } else {
      clearInterval(timer);
      setTimer(null);
    }
    setIsPaused((prevPaused) => !prevPaused);
  }, [isPaused, timer]);

  const handleResetButtonMouseUp = useCallback(() => {
    if (isHolding.current) {
      isHolding.current = false;
      clearTimeout(resetTimeoutRef.current);
    }
    document.removeEventListener("mouseup", handleResetButtonMouseUp);
    document.removeEventListener("mouseleave", handleResetButtonMouseUp);
  }, []);

  const handleResetButtonMouseDown = useCallback(() => {
    pressStartTime.current = Date.now();
    isHolding.current = true;

    resetTimeoutRef.current = setTimeout(() => {
      if (isHolding.current) {
        resetTimer();
        updateButtonRef.current.textContent = "Start";
      }
    }, 1000); // 3 seconds

    document.addEventListener("mouseup", handleResetButtonMouseUp);
    document.addEventListener("mouseleave", handleResetButtonMouseUp);
  }, [resetTimer, handleResetButtonMouseUp]);

  useEffect(() => {
    const timeInputCurrent = timeInputRef.current;

    timeInputCurrent.addEventListener("input", updateClock);

    return () => {
      timeInputCurrent.removeEventListener("input", updateClock);
    };
  }, [updateClock]);

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="flex flex-col justify-center gap-8 text-center w-2/6 m-auto my-20 bg-[#333] text-white text-2xl p-8 rounded-3xl">
      <header className="text-center justify-center">
        <h1 className="text-4xl">Timer</h1>
      </header>
      <div id="clock" className="m-auto">
        <span>{hours.toString().padStart(2, "0")}</span>:{" "}
        <span>{minutes.toString().padStart(2, "0")}</span>:{" "}
        <span>{seconds.toString().padStart(2, "0")}</span>
      </div>
      <h2>Start Time:</h2>
      <div id="clockContainer">
        <input
          className="p-4 text-black"
          type="text"
          id="timeInput"
          placeholder="Enter Time"
          autoComplete="off"
          ref={timeInputRef}
        />
      </div>
      <div id="buttons" className="flex justify-center text-black">
        <button
          id="updateButton"
          className="bg-[#f0f0f0] mb-4 p-4 transition-bg fill-[#4caf50] rounded-xl"
          ref={updateButtonRef}
          onClick={() => {
            if (isRunning) {
              resetTimer();
              updateButtonRef.current.textContent = "Start";
            } else {
              startTimer();
              updateButtonRef.current.textContent = "Reset";
            }
          }}
          onMouseDown={handleResetButtonMouseDown}
          onMouseUp={handleResetButtonMouseUp}
          onMouseLeave={handleResetButtonMouseUp}
        >
          {isRunning ? "Reset" : "Start"}
        </button>

        <button
          id="stopTimer"
          className="bg-[#f0f0f0] p-4 rounded-xl"
          ref={stopButtonRef}
          onClick={handleStopButtonClick}
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>
      <div id="remainingTime"></div>
    </div>
  );
};

export default Timer;
