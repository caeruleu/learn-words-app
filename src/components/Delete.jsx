import '../assets/styles/tablerow.scss';
import '../assets/styles/consts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Delete () {
    return (
        <button className='deleteBtn'><FontAwesomeIcon icon={faTrashAlt} /></button>
    );
}

export default Delete;