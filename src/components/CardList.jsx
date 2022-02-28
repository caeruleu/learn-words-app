import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ContextProvider, context } from '../Context.jsx';

//раньше слова брались из файла:
//const words = require('./words.json');

export default function CardList (props) {
    const {getWordsArr, wordsArr} = useContext(context);
    let [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        getWordsArr();
    }, [])
        
    let prev = () => {
        if (index === 0) {
            setIndex(wordsArr.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    let next = () => {
        if (index === wordsArr.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
    
    let handleClick = () => {
        if (count < wordsArr.length) {setCount(count + 1);}
    }

    return(
        <div>
            <div className="cardCont">
                <button className="arrowBtnLeft" onClick={prev}><FontAwesomeIcon icon={faAngleLeft} /></button>
                <Card 
                key = {wordsArr[index].id}
                english = {wordsArr[index].english}
                transcription = {wordsArr[index].transcription}
                russian = {wordsArr[index].russian}
                handleClick = {handleClick}
                />
                <button className="arrowBtnRight" onClick={next}><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
            <p>Выучено слов: {count} / {wordsArr.length}</p>
        </div>
    )
}
