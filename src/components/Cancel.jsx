import '../assets/styles/tablerow.scss';
import '../assets/styles/consts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward } from '@fortawesome/free-solid-svg-icons'

export default function Cancel () {
    return (
        <button className='cancelBtn'><FontAwesomeIcon icon={faStepBackward} /></button>
    );
}