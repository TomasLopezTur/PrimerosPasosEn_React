import React, {Fragment, useState} from "react";
import { Button } from "../Button/Button";


//let isLogedIn = false;

export const ConditionalRender = ()=>{

    /* const content = (isLogedIn) =>{
        if(isLogedIn){
            return "Logueado"
        }else{
            return <Button />
        }
    } */

    const [isLoggedIn, setIsLoggedIn] = useState(false)


    let handleClick = ()=>{
        setIsLoggedIn(!isLoggedIn)
        
    }

    let handleChange = (e) => {
        console.log(e.target.value)
    }
    let handleUserLogin = () => setIsLoggedIn(!isLoggedIn)
    let handleUserLogout = () => setIsLoggedIn(!isLoggedIn)

    return (
        <Fragment>
            <h2 onClick={handleClick}>Renderizado condicional</h2>
            {/* content(true) */ isLoggedIn ? <div>
                <p>"Logueado"</p> 
                <Button text="Logout" className="btn-green" handleClick={handleUserLogout} />
            </div> :
            <Button text="Login" className="btnStyle" handleClick={handleUserLogin} /> }
            <div>
            <input type="text" onChange={handleChange} />
            </div>
            
        </ Fragment>
    )
}