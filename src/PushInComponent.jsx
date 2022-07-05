import React, { useLayoutEffect, useRef } from 'react';
import { PushIn } from 'pushin';
import './PushInComponent.css'
import theme from './music/1.mp3'

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
        <div id='layer1' className="pushin-layer">
            Planeta Tierra
            <button id='Buttonmusica' onClick={() => audio.play()}>Sondo de prueba</button>
        </div>
        <div id='layer2' className="pushin-layer">
          Sistema Solar (o algo asi)
        </div>
        <div id='layer3' className="pushin-layer">
          Via Lactea
        </div>
        <div id='layer4' className="pushin-layer">
          Universo
        </div>
      </div>
    </div>
  );
}