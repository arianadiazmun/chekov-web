import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LogIn from './app/login/page.jsx';
import SignUp from "./app/signup/page";
import { useState, createContext, useEffect  } from 'react';
import Todo from './app/page';

export const AuthContext = createContext(null);


function App() {
  const [user, setUser] = useState();
  
const _setUser = (data) => {
  sessionStorage.setItem("user", JSON.stringify(data));
  setUser(data);
}
   
  useEffect(() =>{
    if (!user) {
      //look to see if user was stored in session data:
       const previousUser = sessionStorage.getItem("user");
  if(previousUser) {
    //if so, lets set state back to that user:
    setUser(JSON.parse(previousUser));
  }
    }
  }, []);

  return (
    <AuthContext.Provider value= { {user, setUser: _setUser }}>
  <BrowserRouter>
  <Routes>
    <Route path= "/login" element={<LogIn/>}/>
    <Route path= "/signup" element={<SignUp/>}/>
    <Route path= "/" element={user ? <Todo/> : <LogIn/>}/> 
  </Routes>
  </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
