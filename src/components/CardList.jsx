import React, {useState, useEffect} from "react";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const words = require('./words.json');

export default function CardList () {
    let [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);
        
    let prev = () => {
        if (index === 0) {
            setIndex(words.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    let next = () => {
        if (index === words.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
    
    let handleClick = () => {
        if (count < words.length) {setCount(count +1);}
    }

    return(
        <div>
            <div className="cardCont">
                <button className="arrowBtnLeft" onClick={prev}><FontAwesomeIcon icon={faAngleLeft} /></button>
                <Card 
                key = {words[index].id}
                english = {words[index].english}
                transcription = {words[index].transcription}
                russian = {words[index].russian}
                handleClick = {handleClick}
                />
                <button className="arrowBtnRight" onClick={next}><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
            <p>Выучено слов: {count} / {words.length}</p>
        </div>
    )
}
