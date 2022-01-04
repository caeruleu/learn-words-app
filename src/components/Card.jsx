import React, { useState } from 'react';
import '../assets/styles/card.scss';
import '../assets/styles/consts.scss';

export default function Card () {
    const [translated, setTranslated] = useState(false);
    const handleTranslated = () => {setTranslated(!translated);}
    return(
        translated 
        ?<div className='Card'>
            <div className='wordCont'>
                <p className='cardWord'>word</p>
                <p className='cardTranscript'>[transcription]</p>
            </div>
            <div className='cardBtnCont'>
                <p className='cardTranslation'>перевод</p>
            </div>
        </div>
        :<div className='Card'>
            <div className='wordCont'>
                <p className='cardWord'>word</p>
                <p className='cardTranscript'>[transcription]</p>
            </div>
            <div className='cardBtnCont'>
                <button className='cardBtn' onClick={handleTranslated}>Проверить</button>
            </div>
        </div>
    )
}