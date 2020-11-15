import React, {useState} from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import './style.scss';
import PopUp from './popUp.js';


const EnviromentCard = ({title, code, database, files, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopUp =(e)=>{
        e.preventDefault();
        setIsOpen(!isOpen);
    }          
    return(
    <section>
        <div             
            className='enviroment-card'
            onClick={togglePopUp}
        >
            <h3 className='github-title'>{title}</h3>   
            <Droppable droppableId={title}>
                {provided =>(
                    <div 
                        className="enviroment-card-content"
                        ref={provided.innerRef}
                        {...provided.droppableProps}                                
                    >   
                        {/* <ul>
                            <DraggableItem
                            title={'code'}
                            value={code}
                            index={0}
                            />            
                            <DraggableItem
                            title={'database'}
                            value={database}
                            index={1}
                            />            
                            <DraggableItem
                            title={'files'}
                            value={files}
                            index={2}
                            />                            
                        </ul>  */}
                        {provided.placeholder}                   
                    </div>
                )}
            </Droppable>                
        </div>        
        {isOpen && <PopUp
            handleClose={togglePopUp}    
        />}
    </section>    
  );
}


const DraggableItem =({title, value, index}) => {
    return(
    <Draggable draggableId={title} index={index}>
        {provided =>(
            <div 
                className="draggable-item"  
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <li><h4 className='github-data-history '>{value}</h4></li>
            </div>                                                                        
        )}
    </Draggable> 
    )
}



export default EnviromentCard;