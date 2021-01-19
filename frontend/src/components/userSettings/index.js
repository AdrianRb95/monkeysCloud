import React from 'react';
import "./style.scss"
import {FaExternalLinkAlt} from "react-icons/fa";

function UserSettings() {
   
    return(
        <nav className="menu">
          {/*   <div>
            <a>
            Jira
            </a>
           
            </div>
           
            <div>
            <a>
            Personal Settings
            </a>
            </div> */}
            <div>
            <a>
            Profile
            </a>
            </div>
            <div>
            <a>
            Account Settings
            </a>
            <span className="external-link"><FaExternalLinkAlt/></span>
            
            </div>
        
              <hr/>
              <div>
            <a>
            Log out
            </a>
            </div>
              
            
        </nav>
    );
}
    
export default UserSettings;