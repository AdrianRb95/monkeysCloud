import React from 'react';
import {FaPlus} from "react-icons/fa";

import './style.scss';


const CreateEnviromentCard = () =>{
    return(
        <div 
            id={20}
            className='enviroment-card'>
            <h3 className='github-title'>Create</h3>    
            <div className="enviroment-card-content">                
                <h4 className='github-data-history '>Create Custom </h4>                
                <h4 className='github-data-history '>Enviroment</h4>
                <h4 className='github-data-history '><FaPlus/></h4>
            </div>    
        </div>
    );
}

export default CreateEnviromentCard;