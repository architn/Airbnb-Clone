import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Error from '../Views/Error';
import Events from '../Views/Events/Events';
import Footer from '../Views/Footer/Footer';
import LandingPage from '../Views/Home/LandingPage';
import AddProperty from '../Views/NewListing/AddProperty';
import PersonalInfo from '../Views/PersonalInfo/PersonalInfo';
import Properties from '../Views/Properties/Properties';
import Rooms from '../Views/Rooms/Rooms';
import SignIn from '../Views/SignIn/SignIn';
import SignUp from '../Views/SignUp/SignUp';

function RoutesApp() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/login' element={<SignIn/>}></Route>
          <Route path='/logout' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/events' element={<Events/>}></Route>
          <Route path='/host' element={<AddProperty/>}></Route>
          <Route path='/homes' element={<Properties/>}></Route>
          <Route path='/personalinfo' element={<PersonalInfo/>}></Route>
          <Route path='/property/:propertyid' element={<Rooms/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
        </Router>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default RoutesApp