import React, {useState} from 'react';
import Delete from './Delete';
import Edit from './Edit';
import Save from './Save';
import Cancel from './Cancel';
import '../assets/styles/tablerow.scss';
import '../assets/styles/consts.scss';

export default function TableRow(props) {
    const {id, english, russian, transcription} = props;
    const [editable, setEditable] = useState(false);
    const handleEditable = () => {setEditable(!editable);}

    return (
        editable
        ? <div className="TableRow">
            <tr>
                <div className="parentForInputs">
                    <input className='engInput' value={english} />
                    <input className='ruInput' value={russian} />
                    <input className='transcriptInput' value={transcription} />
                </div>
                <td>
                    <span><Save /></span>
                    <span onClick = {handleEditable}><Cancel /></span>
                </td>
            </tr>
        </div>

        : <div className="TableRow">
            <tr>
                <td className='idCol'>{id}</td>
                <td className='engCol'>{english}</td>
                <td className='ruCol'>{russian}</td>
                <td className='transcriptCol'>{transcription}</td>
                <td>
                    <span onClick = {handleEditable}><Edit /></span>
                    <span><Delete /></span>
                </td>
            </tr>
        </div>
    );
}