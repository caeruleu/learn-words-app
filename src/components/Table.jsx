import "../assets/styles/tablerow.scss";
import "../assets/styles/consts.scss";
import TableRow from "./TableRow";
import { useState, useEffect } from "react";

export default function Table() {
    const [wordsArr, setWordsArr] = useState([])

    useEffect(() => {
        getWordsArr();
        console.log(wordsArr);
    }, [])

    const getWordsArr = () => {
        fetch('/api/words')
            .then(response => response.json())
            .then(data => {
                setWordsArr(data);
            })
    }

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
