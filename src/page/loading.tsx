import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const navigate = useNavigate();
  const [background, setBackground] = useState('#FF5001');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackground((prevBackground) => {
        if (prevBackground === '#FF5001') return 'white';
        else if (prevBackground === 'white') return '#FF5002';
        else if (prevBackground === '#FF5002') {
          navigate('/Home');
          return 'white';
        } else return 'white';
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <div
      className="mx-auto min-h-screen shadow-lg max-w-md bg-white"
      style={{
        backgroundColor: background,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {background === '#FF5001' && <img src="/icon_white.png" alt="white" />}
      {background === 'white' && <img src="/icon_orange.png" alt="orange" />}
      {background === '#FF5002' && <img src="/icon_pks.png" alt="pks" />}
    </div>
  );
};

export default Loading;
