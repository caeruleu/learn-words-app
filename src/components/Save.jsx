import '../assets/styles/tablerow.scss';
import '../assets/styles/consts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Save() {
    return(
        <button className='saveBtn'><FontAwesomeIcon icon={faPlus} /></button>
    );
}

export default Save;