import "../assets/styles/tablerow.scss";
import "../assets/styles/consts.scss";
import TableRow from "./TableRow";
import { useEffect, useContext } from "react";
import {ContextProvider, context} from '../Context.jsx';

export default function Table(props) {
    const {getWordsArr, wordsArr} = useContext(context);

    useEffect(() => {
        getWordsArr();
    }, [])

    return (
        <table>
            <tbody className="Table">
                <tr>
                    <td className="idCol">№</td>
                    <td className="engCol">English</td>
                    <td className="ruCol">Russian</td>
                    <td className="transcriptCol">Transcription</td>
                    <td className="btnsCol"></td>
                </tr>
                {wordsArr.map((word, index) => (
                    <TableRow key={word.id} index={index + 1} {...word} />
                ))}
            </tbody>
        </table>
    );
}
