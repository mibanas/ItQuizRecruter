import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Myhome from './Pages/Myhome';
import Quiz from './Pages/Quiz';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Myhome />} />
        <Route path='/Quiz' element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
