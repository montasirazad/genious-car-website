import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';


function App() {

  return (
    <div className='App' >
      <AuthProvider>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/booking/:service' element={<PrivateRoute>
            <Booking />
          </PrivateRoute>} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/addService' element={<AddService />} />
          <Route path='*' element={<NotFound />} />


        </Routes>
      </AuthProvider>



    </div>
  );
}

export default App;
