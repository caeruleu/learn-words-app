import "../assets/styles/tablerow.scss";
import "../assets/styles/consts.scss";
import TableRow from "./TableRow";
import { useState } from "react";

const words = require("./words.json");

export default function Table() {
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
                {words.map((word, index) => (
                    <TableRow key={word.id} index={index + 1} {...word} />
                ))}
            </tbody>
        </table>
    );
}
