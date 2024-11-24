import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './style.css';
import { GamePage,FirstPage } from './pages';


function App() {  
  return (
    <BrowserRouter basename="https://juliamuk.github.io/memory-cards/build">
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/game" element={<GamePage/>} />              
        <Route path="*" element={<FirstPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
