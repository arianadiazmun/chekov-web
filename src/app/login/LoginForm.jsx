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
        <section className="bg-violet-950 p-6 rounded-lg  max-w-[420] mx-auto shadow ">
        <form onSubmit={handleLogin}className="flex flex-col items-start justify-around 
        min-h-[30vh]">
            <label htmlFor="email"className="flex justify-between w-full">
             <span>Email</span>
             <input type= "email" name="email" className="rounded-lg border-transparent border border-violet-500 py-2 
             px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent"/>
            </label>
            
           <label htmlFor="password" className="flex justify-between w-full">
            <span>Password</span>
            <input type= "password" name="password" className="rounded-lg border-transparent border border-violet-500 py-2 
            px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 text-base focus:ring-2
             focus:ring-violet-600 focus:border-transparent"/>
           </label>
           
           <input type="submit" value="Login" className="bg-fuchsia-100 text-violet-950 py-2 px-8 rounded-lg shadow-lg
           transition duration-300 hover:bg-violet-300 hover:shadow-sm cursor-pointer w-full max-w-[420]"
            />
        </form>
        <button onClick={handleGoogle} className="bg-fuchsia-100 text-violet-950 py-2 px-8 rounded-lg shadow-lg
           transition duration-300 hover:bg-violet-300 hover:shadow-sm cursor-pointer"> Login with Google </button>
        </section>
    )
    
}