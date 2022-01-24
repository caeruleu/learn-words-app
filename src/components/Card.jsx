import React, { useState } from 'react';
import '../assets/styles/card.scss';
import '../assets/styles/consts.scss';
import words from './words.json'

export default function Card (props) {
    const {id, english, transcription, russian} = props;

    const [translated, setTranslated] = useState(false);
    const handleTranslated = () => {setTranslated(!translated);}
    
    return(
        translated 
        ? 
        <div className='Card'>
            <div className='wordCont'>
                <p className='cardWord'>{english}</p>
                <p className='cardTranscript'>{transcription}</p>
            </div>
            <div className='cardBtnCont'>
                <p className='cardTranslation'>{russian}</p>
            </div>
        </div>
        :
        <div className='Card'>
            <div className='wordCont'>
                <p className='cardWord'>{english}</p>
                <p className='cardTranscript'>{transcription}</p>
            </div>
            <div className='cardBtnCont'>
                <button className='cardBtn' onClick={handleTranslated}>Проверить</button>
            </div>
        </div>
    )
}