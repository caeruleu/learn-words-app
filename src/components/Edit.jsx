import '../assets/styles/tablerow.scss';
import '../assets/styles/consts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


function Edit() {
    return(
        <button className='editBtn'><FontAwesomeIcon icon={faEdit} /></button>
    );
}

export default Edit;