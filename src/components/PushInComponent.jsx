import React, { useLayoutEffect, useRef } from 'react';
import { PushIn } from 'pushin';
import '../styles/PushInComponent.css'
import theme from '../music/1.mp3'
import ChildrenSFX from '../music/Childrens.mp3'
import ParkSFX from '../music/Park.mp3'

export default function PushInComponent() {
  const pushInContainer = useRef();

  const audio1 = new Audio()
  audio1.src = theme

  const Childrens = new Audio()
  Childrens.src = ChildrenSFX

  const park = new Audio()
  park.src = ParkSFX
  

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
          <div>
            <div className='buttonsmedias'>
              <button id='Buttonmusica' onClick={() => audio1.play()}>Play</button>
              <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button>
            </div>
          </div>
        </div>
        <div id='layer2' className="pushin-layer">
          <div>
            <div className='buttonsmedias'>
              <button id='Buttonmusica' onClick={() => Childrens.play()}>Play</button>
              <button className='Buttonmedia' onClick={() => Childrens.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => Childrens.volume = Childrens.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => Childrens.volume = Childrens.volume + 0.2}>UpVolume</button>
            </div>
          </div>
        </div>
        <div id='layer3' className="pushin-layer">
        <div>
            <div className='buttonsmedias'>
              <button id='Buttonmusica' onClick={() => park.play()}>Play</button>
              <button className='Buttonmedia' onClick={() => park.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => park.volume = park.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => park.volume = park.volume + 0.2}>UpVolume</button>
            </div>
          </div>
        </div>
        <div id='layer4' className="pushin-layer">
          <div className='divlayer4'>
            <a target="_blank" rel="noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSfETp_AY3JnHvrM2S45kZzoxHNczl-qxIf3zhvgIFCbCG64cQ/viewform'><button className='linktoform'></button></a>
          </div>
        </div>
      </div>
    </div>
  );
}