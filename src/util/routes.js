import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Registration from '../components/Registration';
import GetUserDetails from '../components/GetUserDetails';
import AddressRegistration from '../components/CreateUserAddress';
import UpdateAddress from '../components/updateAddress';
import CenterRegistration from '../components/CreateCenter';
import AddCenter from '../components/UpdateCenter';
import GetCenterDetails from '../components/GetCenter';
import DeletUser from '../components/DeletUser';
import DeletAddressUser from '../components/DeletAddressUser';
import DeletCenter from '../components/DeletCenter';
import CalculateDistance from '../components/distanceCalculate';
import CreateCenter  from '../components/CreateCenter'

import HomePage from '../pages/HomePage';



const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/GetUser" element={<GetUserDetails />} />
      <Route path="/CreateAddress" element={<AddressRegistration />} />
      <Route path="/UpdateAddress" element={<UpdateAddress />} />
      <Route path="/CreateCenter" element={<CenterRegistration />} />
      <Route path="/AddCenter" element={<AddCenter />} />
      <Route path="/GetCenter" element={<GetCenterDetails/>} />
      <Route path="/DeletUser" element={<DeletUser/>} />
      <Route path="/DeletAddress" element={<DeletAddressUser/>} />
      <Route path="/DeletCenter" element={<DeletCenter/>} />
      <Route path="/Calculate" element={< CalculateDistance/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/CalculateDistance" element={<CalculateDistance/>} />
      <Route path="/CReate Center" element={<CreateCenter/>} />








      <Route path="*" />
    </Routes>
  );
};



export default Router;