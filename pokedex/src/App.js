import logo from './logo.svg';
import './App.css';
import { Router } from './routes/Router';
import GlobalState from './context/GlobalState';


function App() {
  return (
    <div>
      <GlobalState>
        <Router/>
      </GlobalState>      
    </div>
  );
}

export default App;
