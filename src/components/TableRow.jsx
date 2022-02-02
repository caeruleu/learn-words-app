import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/styles/tablerow.scss';
import '../assets/styles/consts.scss';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function TableRow(props) {
    const {id, index, english, russian, transcription} = props;
    const [editable, setEditable] = useState(false);
    const [word, setWord] = useState({...props});
    const [disable, setDisable] = useState(false)

    let handleEditable = () => {
        setEditable(!editable);
        setWord({...props})
        setDisable(false)
    }
    
    let handleChangeWord = (e) => {
        setWord({...word, [e.target.name]: e.target.value})
        if (e.target.value.trim() == '') {
            setDisable(true) 
        } else {
            setDisable(false)
        }
    }

    let save = () => {
        let engReg = /^[a-zA-Z-\s]+$/;
        let ruReg = /^[А-Яа-яЁё\s]+$/;

        if (engReg.test(word.english) && ruReg.test(word.russian)) {
            console.log(`английское слово: ${word.english}`);
            console.log(`русское слово: ${word.russian}`);
            console.log(`транскрипция: ${word.transcription}`);
            setEditable(false);
        } else {
            alert('Используйте для записи английских слов английскую раскладку, а для русских - русскую.');
        }
    }

    return (
        editable
        ? <tr className="TableRow parentForInputs">
            <td><input className={disable ? "disabled" : "engInput"} value={word.english} name='english' onChange={handleChangeWord}/></td>
            <td><input className={disable ? "disabled" : "ruInput"} value={word.russian} name='russian' onChange={handleChangeWord}/></td>
            <td><input className={disable ? "disabled" : "transcriptInput"} value={word.transcription} name='transcription' onChange={handleChangeWord}/></td>
            <td>
                <button onClick = {save} className = {disable ? "disabledBtn" : "saveBtn"} disabled={disable}><FontAwesomeIcon icon={faPlus} /></button>
                <button onClick = {handleEditable} className = 'cancelBtn'><FontAwesomeIcon icon={faStepBackward} /></button>
            </td>
        </tr>

        : <tr className="TableRow">
            <td className='idCol'>{index}</td>
            <td className='engCol'>{english}</td>
            <td className='ruCol'>{russian}</td>
            <td className='transcriptCol'>{transcription}</td>
            <td>
                <button onClick = {handleEditable} className='editBtn'><FontAwesomeIcon icon={faEdit} /></button>
                <button className='deleteBtn'><FontAwesomeIcon icon={faTrashAlt} /></button>
            </td>
        </tr>
    );
}