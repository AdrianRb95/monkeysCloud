import React from 'react'
import {FaUsers,FaMoneyBill,FaDesktop,FaRegFolder,FaExternalLinkAlt,FaAtlassian,FaUserCircle} from 'react-icons/fa';
import {MdReportProblem} from 'react-icons/md';
import "./style.scss";
function MenuSettings() {
    return(
     <nav className="menuConfig ">
         <h1>Settings</h1>
         
         <h3>Atlassian Admin</h3>
         <div className="boxes">
             <span className="icon-contenedor">
               <div className="base">
                  <span className="icon">
                  <FaUsers/>
                  </span>
               </div>
             </span>
              
              <span className="contenedor">
                  <span className="titles">User Management</span>
                  <span className="descriptions">Add user,groups,and manage access request</span>
              </span>
         </div>

         <div className="boxes">
             <span className="icon-contenedor">
               <div className="base">
                  <span className="icon">
                  <FaMoneyBill />
                  </span>
               </div>
             </span>
              
              <span className="contenedor">
                  <span className="titles">Billing</span>
                  <span className="descriptions">Update your billing details ,manage your subscriptions</span>
              </span>

              <span className="link-contenedor">
              <span >
              <FaExternalLinkAlt className="external-link" />
              </span>

              </span>
             
         </div>
    
        <h3>Jira Settings</h3>

        <div className="boxes">
             <span className="icon-contenedor">
               <div className="base">
                  <span className="icon">
                  <FaDesktop/>
                  </span>
               </div>
             </span>
              
              <span className="contenedor">
                  <span className="titles">System</span>
                  <span className="descriptions">Add user,groups,and manage access request</span>
              </span>
         </div>

         <div className="boxes">
             <span className="icon-contenedor">
               <div className="base">
                  <span className="icon">
                  <FaDesktop/>
                  </span>
               </div>
             </span>
              
              <span className="contenedor">
                  <span className="titles">Products</span>
                  <span className="descriptions">Add user,groups,and manage access request</span>
              </span>
         </div>

         <div className="boxes">
             <span className="icon-contenedor">
               <div className="base">
                  <span className="icon">
                  <FaRegFolder/>
                  </span>
               </div>
             </span>
              
              <span className="contenedor">
                  <span className="titles">Projects</span>
                  <span className="descriptions">Add user,groups,and manage access request</span>
              </span>
         </div>
         <div className="boxes">
             <span className="icon-contenedor">
               <div className="base">
                  <span className="icon">
                  <MdReportProblem/>
                  </span>
               </div>
             </span>
              
              <span className="contenedor">
                  <span className="titles">Issues</span>
                  <span className="descriptions">Add user,groups,and manage access request</span>
              </span>
         </div>
         <div className="boxes">
             <span className="icon-contenedor">
               <div className="base">
                  <span className="icon">
                  <FaRegFolder/>
                  </span>
               </div>
             </span>
              
              <span className="contenedor">
                  <span className="titles">Apps</span>
                  <span className="descriptions">Add user,groups,and manage access request</span>
              </span>
         </div>     
        
         <h3>Personal Settings</h3>
         <div className="boxes">
             <span className="icon-contenedor">
               <div className="base">
                  <span className="icon">
                  <FaAtlassian/>
                  </span>
               </div>
             </span>
              
              <span className="contenedor">
                  <span className="titles">Atlassian Settings</span>
                  <span className="descriptions">Add user,groups,and manage access request</span>
              </span>
         </div>  
         <div className="boxes">
             <span className="icon-contenedor">
               <div className="base">
                  <span className="icon">
                  <FaUserCircle/>
                  </span>
               </div>
             </span>
              
              <span className="contenedor">
                  <span className="titles">Personal Jira Settings</span>
                  <span className="descriptions">Add user,groups,and manage access request</span>
              </span>
         </div>  
        
     </nav>

     
    );
}

export default MenuSettings;
