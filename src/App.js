import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LogIn from './app/login/page';
import SignUp from './app/signup/Page';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path= "/login" element={<LogIn/>}/>
    <Route path= "/signup" element={<SignUp/>}/>
    <Route path= "/" element={<h1>Chekov Todo</h1>}/> 
      
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
