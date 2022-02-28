import './assets/styles/App.scss';
import './assets/styles/consts.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Table from './components/Table';
import CardList from './components/CardList';
import Header from './components/Header';
import Page404 from './components/Page404';
import { ContextProvider, context } from './Context';

export default function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/cardsgame" element={<CardList />} />
            <Route exact path="/" element={<Table />}/>
            <Route path="*" element={<Page404 />} />
          </Routes>
          
        </div>
      </Router>
    </ContextProvider>
  );
}
