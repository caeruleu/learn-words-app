import React, {useState} from "react";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const words = require('./words.json');

export default function CardList () {
    let [index, setIndex] = useState(0);

    let prev = () => {
        if (index === 0) {
            setIndex(words.length - 1);
        } else {
            setIndex(index - 1)
        }
    }

    let next = () => {
        if (index === words.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return(
        <div className="cardCont">
            <button className="arrowBtnLeft" onClick={prev}><FontAwesomeIcon icon={faAngleLeft} /></button>
            <Card 
            key={words[index].id}
            english={words[index].english}
            transcription={words[index].transcription}
            russian={words[index].russian}
            />
            <button className="arrowBtnRight" onClick={next}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
    )
}