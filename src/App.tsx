import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import CharacterList from './components/CharacterList';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/character/:id' element={<Detail />} />
        <Route path='/' element={<CharacterList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
