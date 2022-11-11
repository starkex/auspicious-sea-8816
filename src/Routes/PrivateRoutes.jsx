import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import { Appcontext } from '../Contexts/AuthContext';

function PrivateRoutes({children}) {
  const {state} =  useContext(Appcontext)
  if(!state.isAuth){
   return <Navigate to='/login'/> 
  }
  else{
    return <Navigate to='/Cart'/>
  }
//    return children;
}

export default PrivateRoutes;