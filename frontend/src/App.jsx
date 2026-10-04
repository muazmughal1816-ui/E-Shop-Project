import React, { useEffect } from 'react'
// import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {LoginPage, SignupPage, ActivationPage} from './Routes.js';
import { ToastContainer, Bounce, toast } from 'react-toastify'; // ✅ FIXED: Added Bounce here
import 'react-toastify/dist/ReactToastify.css'; // Optional: Ensure toast styles are loaded
import Store from './redux/store';
import { loadUser } from './redux/actions/user';
const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/sign-up' element={<SignupPage/>}/>
      <Route path='/activation/:activation_token' element={<ActivationPage/>}/>
    </Routes>
    <ToastContainer
  position="bottom-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick={false}
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  transition={Bounce}
  />
    </BrowserRouter>
  )
}

export default App