import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(72000); // 20 hours = 72000 seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='flex h-[100vh] items-center justify-center'>
      <div className='flex flex-col  items-center'>
        <h1 className='text-9xl custom-font-head mb-8'>REVIVE</h1>
        <h1 className='text-9xl font-extrabold mb-8 '>{formatTime(seconds)}</h1>
        <div className='flex justify-center items-center '>
            <button className="border-4 rounded-xl border-black p-4 px-8 text-xl font-bold cursor-pointer bg-[#178376] mx-4" onClick={handleStart}>Start</button>
            <button className="border-4 rounded-xl border-black p-4 px-8 text-xl font-bold cursor-pointer bg-[#178376]" onClick={handlePause}>{isActive ? "Pause" :"Resume"}</button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
