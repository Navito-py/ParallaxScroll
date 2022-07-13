import React, { useLayoutEffect, useRef } from 'react';
import { PushIn } from 'pushin';
import '../styles/PushInComponent.css'
import Ambulancia from '../music/Ambulancia.mp3'
import AmbienteCiudad from '../music/Ambiente ciudad.mp3'
import AnuncioAlberto from '../music/Anuncio Alberto.mp3'
import Aplausos from '../music/Aplausos.mp3'
import Helicoptero from '../music/Helicoptero.mp3'
import Cacerolazo from '../music/Cacerolazo.mp3'
import PuertasCoredizas from '../music/Puertas corredizas.mp3'
import QuemaDeBarbijos from '../music/Quema de barbijos.mp3'
import Landing from './Landing';

export default function PushInComponent() {
  const pushInContainer = useRef();

  const audio1 = new Audio()
  audio1.src = Ambulancia

  const Childrens = new Audio()
  Childrens.src = AmbienteCiudad

  const park = new Audio()
  park.src = AnuncioAlberto

  const aplausossfx = new Audio()
  aplausossfx.src = Aplausos
  
  const carcerolassfx = new Audio()
  carcerolassfx.src = Cacerolazo

  const helicopterosfx = new Audio()
  helicopterosfx.src = Helicoptero

  const PuertasCorredizassfx = new Audio()
  PuertasCorredizassfx.src = PuertasCoredizas

  const Quemadebarbijossfx = new Audio()
  Quemadebarbijossfx.src = QuemaDeBarbijos

  useLayoutEffect(() => {
    const pushIn = new PushIn(pushInContainer.current);
    pushIn.start();

    return () => pushIn.destroy();
  });


  return (
    <div className="pushin" ref={pushInContainer}>
      <div id='scene-color' data-pushin-ratio='1,2' className="pushin-scene">
        <div id='layer0' className="pushin-layer">
           <Landing/> 
        </div>
        <div id='layer1' className="pushin-layer">
          <div>
            <div className='buttonsmedias11'>
              <button id='Buttonmusica' onClick={() => audio1.play()}>Play</button>
              <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button>
            </div>
            <div className='buttonsmedias12'>
              <button className='Buttonmedia' onClick={() => Childrens.volume = Childrens.volume + 0.2}>UpVolume</button>
              <button className='Buttonmedia' onClick={() => Childrens.volume = Childrens.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => Childrens.pause()}>Pause</button>
              <button id='Buttonmusica' onClick={() => Childrens.play()}>Play</button>
            </div>
            <div className='buttonsmedias13'>
              <button id='Buttonmusica' onClick={() => park.play()}>Play</button>
              <button className='Buttonmedia' onClick={() => park.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => park.volume = park.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => park.volume = park.volume + 0.2}>UpVolume</button>
            </div>
            <div className='buttonsmedias14'>
              <button id='Buttonmusica' onClick={() => aplausossfx.play()}>Play</button>
              <button className='Buttonmedia' onClick={() => aplausossfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => aplausossfx.volume = aplausossfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => aplausossfx.volume = aplausossfx.volume + 0.2}>UpVolume</button>
            </div>
            <div className='buttonsmedias15'>
              <button id='Buttonmusica' onClick={() => carcerolassfx.play()}>Play</button>
              <button className='Buttonmedia' onClick={() => carcerolassfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => carcerolassfx.volume = carcerolassfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => carcerolassfx.volume = carcerolassfx.volume + 0.2}>UpVolume</button>
            </div>
            <div className='buttonsmedias16'>
              <button id='Buttonmusica' onClick={() => helicopterosfx.play()}>Play</button>
              <button className='Buttonmedia' onClick={() => helicopterosfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => helicopterosfx.volume = helicopterosfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => helicopterosfx.volume = helicopterosfx.volume + 0.2}>UpVolume</button>
            </div>
            <div className='buttonsmedias17'>
              <button id='Buttonmusica' onClick={() => PuertasCorredizassfx.play()}>Play</button>
              <button className='Buttonmedia' onClick={() => PuertasCorredizassfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => PuertasCorredizassfx.volume = PuertasCorredizassfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => PuertasCorredizassfx.volume = PuertasCorredizassfx.volume + 0.2}>UpVolume</button>
            </div>
            <div className='buttonsmedias18'>
              <button id='Buttonmusica' onClick={() => Quemadebarbijossfx.play()}>Play</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume + 0.2}>UpVolume</button>
            </div>
          </div>
        </div>
        <div id='layer2' className="pushin-layer">
          <div>
          </div>
        </div>
        <div id='layer3' className="pushin-layer">
        <div>
          </div>
        </div>
        <div id='layer4' className="pushin-layer">
          <div>
          </div>
        </div>
        <div id='layer5' className="pushin-layer">
        <div>
          </div>
        </div>
        <div id='layer6' className="pushin-layer">
          <div className='divlayer6'>
            <a target="_blank" rel="noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSf4ls6nc_FJP8hcdV18CpHtHTrlFtaFPHiprb-XD2aZ-0U9IA/viewform'><button className='linktoform'></button></a>
          </div>
        </div>
      </div>
      </div>
  );
}