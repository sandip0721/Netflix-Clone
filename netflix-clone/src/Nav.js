import React, { useEffect, useState } from 'react';
import "./Nav.css"


function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(()=>{
       
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll")
        };
    },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png'
        alt='Netflix Logo'
         />

<img
        className='nav__avatar'
        src='https://static.vecteezy.com/system/resources/previews/000/626/063/large_2x/vector-smile-avatar-blue-logo-and-symbols-happy.jpg'
        alt='Smiley Logo'
         />

    </div>
  );
}

export default Nav;
