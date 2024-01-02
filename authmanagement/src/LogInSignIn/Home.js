import React from "react";
import './LogInSignIn.css';
function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div className="din">
            <h3>Home Page </h3>
            <p>Welcome {localStorage.getItem('name')}</p>
            <div className="doe">
            <button onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="delete">Delete</button>
            </div>
        </div>
    );
}
export default Home;