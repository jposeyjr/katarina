import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { InputCode, InputHolder } from './style';

const VideoPage = () => {
  const [showVid, setShowVid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let code = e.target.code.value;
    if (code === '120218') {
      setShowVid(true);
    }
  };
  return (
    <>
      <h1 className='video-title'>Harley's first year!</h1>
      {!showVid ? (
        <form onSubmit={handleSubmit} className='formArea'>
          <InputHolder>
            <InputCode
              type='text'
              name='code'
              autoFocus
              placeholder='Input code'
              aria-label='code'
            />
          </InputHolder>
          <div className='bottomArea'>
            <button className='btnCode' type='submit'>
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className='video-holder'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/VclUZaeni20'
            width='100%'
            height='100%'
          />
        </div>
      )}
    </>
  );
};

export default VideoPage;
