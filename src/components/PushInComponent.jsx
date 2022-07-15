import React, { useLayoutEffect, useRef } from 'react';
import { PushIn } from 'pushin';
import '../styles/PushInComponent.css'
import Ambulancia from '../music/500mts/Ambulancia.mp3'
import AmbienteCiudad from '../music/500mts/Ambiente ciudad.mp3'
import AnuncioAlberto from '../music/500mts/Anuncio Alberto.mp3'
import Aplausos from '../music/500mts/Aplausos.mp3'
import Helicoptero from '../music/500mts/Helicoptero.mp3'
import Cacerolazo from '../music/500mts/Cacerolazo.mp3'
import PuertasCoredizas from '../music/500mts/Puertas corredizas.mp3'
import QuemaDeBarbijos from '../music/500mts/Quema de barbijos.mp3'
import Alfombra from '../music/50mts/Alfombra.mp3'
import CalleDesdeAdentro from '../music/50mts/Ambientecalledesdeadentro.mp3'
import AscensorVivi from '../music/50mts/Ascensorvivi.mp3'
import Pasos from '../music/50mts/Pasos.mp3'
import Puerta from '../music/50mts/Puerta.mp3'
import Exctactor from '../music/20mts/Extractor.mp3'
import GoteoCanilla from '../music/20mts/Goteocanilla.mp3'
import MotorHeladera from '../music/20mts/Motorheladera.mp3'
import PatasMascotas from '../music/20mts/Patasmascota.mp3'
import Reloj from '../music/20mts/Reloj.mp3'
import Aspiradora from '../music/5mts/Aspiradora.mp3'
import ClaseVirtual from '../music/5mts/Clasevirtual.mp3'
import Netflix from '../music/5mts/Netflix.mp3'
import Teclado from '../music/5mts/Teclado.mp3'
import Vibracióncelular from '../music/5mts/Vibracióncelular.mp3'
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

  const Alfombrasfx = new Audio()
  Alfombrasfx.src = Alfombra

  const CalleDesdeAdentrofx = new Audio()
  CalleDesdeAdentrofx.src = CalleDesdeAdentro

  const AscensorVivisfx = new Audio()
  AscensorVivisfx.src = AscensorVivi

  const Pasossfx = new Audio()
  Pasossfx.src = Pasos

  const Puertafx = new Audio()
  Puertafx.src = Puerta

  const Exctactorsfx = new Audio()
  Exctactorsfx.src = Exctactor

  const GoteoCanillasfx = new Audio()
  GoteoCanillasfx.src = GoteoCanilla

  const MotorHeladerasfx = new Audio()
  MotorHeladerasfx.src = MotorHeladera

  const PatasMascotassfx = new Audio()
  PatasMascotassfx.src = PatasMascotas

  const Relojsfx = new Audio()
  Relojsfx.src = Reloj

  const Aspiradorasfx = new Audio()
  Aspiradorasfx.src = Aspiradora

  const ClaseVirtualsfx = new Audio()
  ClaseVirtualsfx.src = ClaseVirtual

  const Netflixsfx = new Audio()
  Netflixsfx.src = Netflix

  const Tecladosfx = new Audio()
  Tecladosfx.src = Teclado

  const Vibracióncelularsfx = new Audio()
  Vibracióncelularsfx.src = Vibracióncelular

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
              {/* <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button> */}
            </div>
            <div className='buttonsmedias12'>
              <button id='Buttonmusica' onClick={() => Childrens.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => Childrens.volume = Childrens.volume + 0.2}>UpVolume</button>
              <button className='Buttonmedia' onClick={() => Childrens.volume = Childrens.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => Childrens.pause()}>Pause</button> */}
            </div>
            <div className='buttonsmedias13'>
              <button id='Buttonmusica' onClick={() => park.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => park.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => park.volume = park.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => park.volume = park.volume + 0.2}>UpVolume</button> */}
            </div>
            <div className='buttonsmedias14'>
              <button id='Buttonmusica' onClick={() => aplausossfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => aplausossfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => aplausossfx.volume = aplausossfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => aplausossfx.volume = aplausossfx.volume + 0.2}>UpVolume</button> */}
            </div>
            <div className='buttonsmedias15'>
              <button id='Buttonmusica' onClick={() => carcerolassfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => carcerolassfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => carcerolassfx.volume = carcerolassfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => carcerolassfx.volume = carcerolassfx.volume + 0.2}>UpVolume</ button>*/}
            </div>
            <div className='buttonsmedias16'>
              <button id='Buttonmusica' onClick={() => helicopterosfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => helicopterosfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => helicopterosfx.volume = helicopterosfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => helicopterosfx.volume = helicopterosfx.volume + 0.2}>UpVolume</button> */}
            </div>
            <div className='buttonsmedias17'>
              <button id='Buttonmusica' onClick={() => PuertasCorredizassfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => PuertasCorredizassfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => PuertasCorredizassfx.volume = PuertasCorredizassfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => PuertasCorredizassfx.volume = PuertasCorredizassfx.volume + 0.2}>UpVolume</button> */}
            </div>
            <div className='buttonsmedias18'>
              <button id='Buttonmusica' onClick={() => Quemadebarbijossfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume + 0.2}>UpVolume</button> */}
            </div>
          </div>
        </div>
        <div id='layer2' className="pushin-layer">
          <div>
          <div className='buttonsmedias21'>
              <button id='Buttonmusica' onClick={() => Alfombrasfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume + 0.2}>UpVolume</button> */}
            </div>
            <div className='buttonsmedias22'>
              <button id='Buttonmusica' onClick={() => CalleDesdeAdentrofx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume + 0.2}>UpVolume</button> */}
            </div>
            <div className='buttonsmedias23'>
              <button id='Buttonmusica' onClick={() => AscensorVivisfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume + 0.2}>UpVolume</button> */}
            </div>
            <div className='buttonsmedias24'>
              <button id='Buttonmusica' onClick={() => Pasossfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume + 0.2}>UpVolume</button> */}
            </div>
            <div className='buttonsmedias25'>
              <button id='Buttonmusica' onClick={() => Puertafx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => Quemadebarbijossfx.volume = Quemadebarbijossfx.volume + 0.2}>UpVolume</button> */}
            </div>
          </div>
        </div>
        <div id='layer3' className="pushin-layer">
          <div>
          <div className='buttonsmedias31'>
              <button id='Buttonmusica' onClick={() => Exctactorsfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button> */}
          </div>
          <div className='buttonsmedias32'>
              <button id='Buttonmusica' onClick={() => GoteoCanillasfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button> */}
          </div>
          <div className='buttonsmedias33'>
              <button id='Buttonmusica' onClick={() => MotorHeladerasfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button> */}
          </div>
          <div className='buttonsmedias34'>
              <button id='Buttonmusica' onClick={() => PatasMascotassfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button> */}
          </div>
          <div className='buttonsmedias35'>
              <button id='Buttonmusica' onClick={() => Relojsfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button> */}
          </div>
          </div>
        </div>
        <div id='layer4' className="pushin-layer">
          <div>
          <div className='buttonsmedias41'>
              <button id='Buttonmusica' onClick={() => Aspiradorasfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button> */}
          </div>
          <div className='buttonsmedias42'>
              <button id='Buttonmusica' onClick={() => ClaseVirtualsfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button> */}
          </div>
          <div className='buttonsmedias43'>
              <button id='Buttonmusica' onClick={() => Netflixsfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button> */}
          </div>
          <div className='buttonsmedias44'>
              <button id='Buttonmusica' onClick={() => Tecladosfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button> */}
          </div>
          <div className='buttonsmedias45'>
              <button id='Buttonmusica' onClick={() => Vibracióncelularsfx.play()}>Play</button>
              {/* <button className='Buttonmedia' onClick={() => audio1.pause()}>Pause</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume - 0.2}>lowVolume</button>
              <button className='Buttonmedia' onClick={() => audio1.volume = audio1.volume + 0.2}>UpVolume</button> */}
          </div>
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