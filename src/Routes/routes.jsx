import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AdminView from '../Views/AdministratorView/AdminView';
import Error from '../Views/Error';
import Events from '../Views/Events/Events';
import Footer from '../Views/Footer/Footer';
import LandingPage from '../Views/Home/LandingPage';
import AddProperty from '../Views/NewListing/AddProperty';
import Payment from '../Views/Payment/Payment';
import PersonalInfo from '../Views/PersonalInfo/PersonalInfo';
import Properties from '../Views/Properties/Properties';
import UserProperties from '../Views/Properties/UserProperties';
import PropertyDetailedView from '../Views/PropertyDetailedView/PropertyDetailedView';
import Rooms from '../Views/Rooms/Rooms';
import SignIn from '../Views/SignIn/SignIn';
import SignUp from '../Views/SignUp/SignUp';
import UserCustomView from '../Views/UserCustomView/UserCustomView';

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
          <Route path='/hosting' element={<UserCustomView/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/test' element={<UserProperties/>}></Route>
          <Route path='/admin' element={<AdminView/>}></Route>
          <Route path='/personalinfo' element={<PersonalInfo/>}></Route>
          <Route path='/property' element={<Rooms/>}></Route>
          <Route path='/property/:propertyid' element={<PropertyDetailedView/>}></Route>
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