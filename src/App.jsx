import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/pages/Home'
import Chat from './components/pages/Chat';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
