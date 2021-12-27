import './assets/styles/App.scss';
import './assets/styles/consts.scss';
import TableRow from './components/TableRow';

const words = require('./components/words.json');

function App() {
  return (
    <div className="App">
      <tr>
        <td className='idCol'>№</td>
        <td className='engCol'>English</td>
        <td className='ruCol'>Russian</td>
        <td className='transcriptCol'>Transcription</td>
      </tr>
      {words.map((word) => <TableRow 
      id = {word.id}
      english = {word.english}
      russian = {word.russian}
      transcription = {word.transcription}
      isEditable = {word.isEditable}
      />)}
    </div>
  );
}

export default App;
