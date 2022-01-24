import '../assets/styles/tablerow.scss';
import '../assets/styles/consts.scss';
import TableRow from './TableRow';

const words = require('./words.json');

export default function Table() {
    return(
        <div className='Table'>
            <tr >
                <td className='idCol'>№</td>
                <td className='engCol'>English</td>
                <td className='ruCol'>Russian</td>
                <td className='transcriptCol'>Transcription</td>
            </tr>
                {words.map((word) => <TableRow {...word} />)}
        </div>
    );}