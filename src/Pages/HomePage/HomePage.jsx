import React from 'react';
import skyline from '../../Assets/skyline.png';
import bg from '../../Assets/bg-last.jpg';
export const HomePage = () => {
  return (
    <div
      className='
      wrap
      w-screen
      h-screen
      bg-center
      bg-cover
      bg-no-repeat
      flex 
      justify-center
      items-center
      bg-blend-hard-light'
      style={{
        backgroundImage: `url(${bg})`,
      }}>
      <div className='relative'>
        <h1
          className='
          text-center
          z-[2]
          relative
          text-white
          text-[10vw] 
          max-[600px]:text-[20vw] max-[600px]:leading-[1.1]
          '
          style={{
            fontFamily: '"Neonderthaw", cursive',
          }}>
          Matchy Night
        </h1>
        <img
          src={skyline}
          alt='/'
          className='
                  absolute opacity-80 w-[60vw] bottom-[2vw] left-[4vw]
                  max-[600px]:w-screen max-[600px]:bottom-[26vw] max-[600px]:left-[0vw]
        '
        />
      {/* <div>PLAY</div>
      color: #96b8b8;
    border: 5px double #ff5991;
    width: fit-content;
    padding-inline: 4.5vw;
    padding-block: 0.8vw;
    border-radius: 5px;
    font-size: 2.5vw;
    bottom: -12vw;
    margin: auto;
    font-weight: 400;
    z-index: 100;
    right: 22vw;
    position: absolute;
    border: 0.3vw solid #ff5991;
    outline: 0.4vw solid #85a1a6;
    outline-offset: -1vw; */}
      </div>

    </div>
  );
};
