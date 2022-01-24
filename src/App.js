import './assets/styles/App.scss';
import './assets/styles/consts.scss';
import Table from './components/Table';
import CardList from './components/CardList';

export default function App() {
  return (
    <div className="App">
      <Table />
      <CardList />
    </div>
  );
}
