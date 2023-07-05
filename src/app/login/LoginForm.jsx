import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider,
     signInWithPopup} from "firebase/auth";
import { AuthContext } from "../../App";




const firebaseConfig = {
    apiKey: "AIzaSyA0ZCL5fhYgAe6shahDjB3o5Soim9C37P4",
    authDomain: "chekov-ad.firebaseapp.com",
    projectId: "chekov-ad",
    storageBucket: "chekov-ad.appspot.com",
    messagingSenderId: "84437595237",
    appId: "1:84437595237:web:f714d8de3b457bc9ee828c"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export default function LoginForm () {

const {setUser} = useContext(AuthContext);
const navigate = useNavigate()

const handleGoogle =() => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(response => {
        setUser(response.user)
        // now send them to "/"
        navigate("/");
    })
     
    .catch(err => alert(err.message))

}



    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password= e.target.password.value;
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
        .then(response => {
            setUser(response.user)
            // now send them to "/"
            navigate("/");
        })
         
        .catch(err => alert(err.message))
    
    }
   
    return (
        <>
        <form onSubmit={handleLogin}>
            <label htmlFor="email">
             Email
             <input type= "email" name="email"/>
            </label>
            <br />
           <label htmlFor="password">
            Password 
            <input type= "password" name="password"/>
           </label>
           <br/>
           <input type="submit" value="Login"/>
        </form>
        <button onClick={handleGoogle}>Login with Google</button>
        </>
    )
    
}