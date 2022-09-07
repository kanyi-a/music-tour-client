
import './App.css';
//import NavBar from './components/NavBar';
import Header from './components/Header';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="overallTop">
    <Header/>
    <Routes>
    <Route exact='true' path='/'/>
        <Route path='/create-event' />
        <Route path='/create-venue' />
        <Route path='/stats'/> 
        <Route path='/about us' />
    </Routes>
      hello
    </div>
    </BrowserRouter>
  );
}

export default App;
