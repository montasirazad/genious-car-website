import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className='App' >
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/booking/:service' element={<Booking />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='*' element={<NotFound />} />


      </Routes>


    </div>
  );
}

export default App;
