import React from "react"
import {FaBell ,FaSearch, FaCog} from "react-icons/fa";
import "./style.scss"
function Header (){
    
        return (  
        <nav className="Top-Bar">
            
          <div className="Logo">
          <span className="Parte-1">MONKEY'S</span>
          <span className="Parte-2">CLOUD</span>
          </div>

           <ul>   
                <li><a href="#"> <FaSearch className="zoom"/></a></li>
                <li><a href="#"> <FaCog className="Settings"/></a></li>
                <li><a href="#"> <FaBell className="notification"/></a></li>

                <span className="Oval">
                   <span className="Online-Status"></span>
                </span>
            </ul>   
        </nav> 
         );
    
}
 
export default Header;