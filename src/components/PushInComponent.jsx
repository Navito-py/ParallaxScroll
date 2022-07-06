import React, { useLayoutEffect, useRef } from 'react';
import { PushIn } from 'pushin';
import '../styles/PushInComponent.css'
import theme from '../music/1.mp3'

export default function PushInComponent() {
  const pushInContainer = useRef();

  const audio = new Audio()
  audio.src = theme

  useLayoutEffect(() => {
    const pushIn = new PushIn(pushInContainer.current);
    pushIn.start();

    return () => pushIn.destroy();
  });

  return (
    <div className="pushin" ref={pushInContainer}>
      <div className="pushin-scene">
        <div id='layer0' className="pushin-layer">
        </div>
        <div id='layer1' className="pushin-layer">
            <div className='buttonsmedias'>
              <button id='Buttonmusica' onClick={() => audio.play()}>Play</button>
              <button className='Buttonmedia' onClick={() => audio.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio.volume = audio.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio.volume = audio.volume + 0.2}>UpVolume</button>
            </div>
        </div>
        <div id='layer2' className="pushin-layer">
        </div>
        <div id='layer3' className="pushin-layer">
        </div>
        <div id='layer4' className="pushin-layer">
        </div>
      </div>
    </div>
  );
}