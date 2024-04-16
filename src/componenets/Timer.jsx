import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(3600); // 60 minutes = 3600 seconds
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
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='flex flex-col  items-center'>
        <h1 className='text-9xl custom-font-head mb-8'>Synthetix'24</h1>
        <h1 className='text-9xl font-extrabold mb-8 '>{formatTime(seconds)}</h1>
        <div className='flex justify-center items-center '>
            <button className="border-4 rounded-xl border-black p-4 px-8 text-xl font-bold cursor-pointer bg-[#178376] mx-4" onClick={handleStart}>Start</button>
            <button className="border-4 rounded-xl border-black p-4 px-8 text-xl font-bold cursor-pointer bg-[#178376]" onClick={handlePause}>Pause</button>
        </div>
    </div>
  );
};

export default CountdownTimer;
