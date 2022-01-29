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

    let handleEditable = () => {
        setEditable(!editable);
        setWord({...props})
    }
    
    let handleChangeWord = (e) => {
        setWord({...word, [e.target.name]: e.target.value})
    }

    return (
        editable
        ? <tr className="TableRow parentForInputs">
            <td><input className='engInput' value={word.english} name='english' onChange={handleChangeWord}/></td>
            <td><input className='ruInput' value={word.russian} name='russian' onChange={handleChangeWord}/></td>
            <td><input className='transcriptInput' value={word.transcription} name='transcription' onChange={handleChangeWord}/></td>
            <td>
                <button className='saveBtn'><FontAwesomeIcon icon={faPlus} /></button>
                <button onClick = {handleEditable} className='cancelBtn'><FontAwesomeIcon icon={faStepBackward} /></button>
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