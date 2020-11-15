import React from "react";
import {FaArrowUp} from "react-icons/fa";
 
const PopUp = props => {      
  return (
    <div className="popup-box">
      <div className="box">
        <div className="content-header">
            <p>Deploy code to Stage</p>
        </div>                
        <div className="placeholder" data-placeholder="currently stage on tags/WELCOME">
            <input className="input-control"/>
        </div>        
        <div className="tag-description">
          <FaArrowUp/><label className="separator">Create new tag from master and deploy</label>        
        </div>        
        <div className="placeholder" data-placeholder="currently on master">
            <input className="input-control"/>
        </div>
        <div className="message-container">
          <textarea 
            className="commit-message"
            placeholder="Optional commit message"
            rows="3"
          >
          </textarea>
        </div>
        {/*
            <span className="close-icon" onClick={props.handleClose}>x</span>

        <div className="popUp-buttons">
            <a href="#" onClick={togglePopUp} className="cancel-button">Cancel</a>
        </div>

        {props.content}

        */}                      

        <div className="popUp-buttons">
            <input
              className="cancel-button"
              type="button"
              value="Cancel"
              onClick={props.handleClose}
            />
            <input
                className="deploy-button"
                type="button"
                value="Deploy"
                onClick={props.handleClose}
            />
        </div>                         
      </div>
    </div>
  );
};
 
export default PopUp;