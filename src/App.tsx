import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Header from './components/Header';
import Page404 from './pages/404';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/character/:id' element={<Detail />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
