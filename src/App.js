import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import SeriesPage from './pages/SeriesPage/SeriesPage'
import Create from './pages/Create/Create'
import UpdateSeriesInfo from './pages/UpdateSeriesInfo/UpdateSeriesInfo'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/info/:id' element={<SeriesPage/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:id' element={<UpdateSeriesInfo/>}/>
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
