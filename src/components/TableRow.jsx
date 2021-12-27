import Delete from './Delete';
import Edit from './Edit';
import Save from './Save';
import '../assets/styles/tablerow.scss';
import '../assets/styles/consts.scss';

//const words = JSON.parse(wordsJSON);


function TableRow(props) {
    const {id, english, russian, transcription, isEditable} = props;
    return (
        isEditable
        ? <div className="TableRow">
            <tr>
                <div className="parentForInputs">
                    <input className='engInput' value={english} />
                    <input className='ruInput' value={russian} />
                    <input className='transcriptInput' value={transcription} />
                </div>
                <td>
                    <Save />
                    <Delete />
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
                    <Edit />
                    <Delete />
                </td>
            </tr>
        </div>
    );
}

export default TableRow;
