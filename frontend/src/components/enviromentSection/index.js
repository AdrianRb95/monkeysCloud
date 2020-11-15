import React, {useState} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import './style.scss';
import Cards from './cards.js';
import EnviromentCard from './enviromentCard.js';
import CreateEnviromentCard from './createCard.js';

const EnviromentSection = () =>{
    const [columns, setColumns] = useState({
        DevelopmentURL:{
            id: 1,
            title:'Development URL',
            code: 'Code',
            database: 'Database',
            files: 'Files'
        },
        StageURL:{
            id: 2,
            title:'Stage URL',
            code: '',
            database: '',
            files: ''
        },
        ProductionURL:{
            id: 3,
            title:'Production URL',
            code: '',
            database: '',
            files: ''
        }   
    });        
    const onDragEnd = ({destination, source})=>{
        //Next three lines avoid dropping the item in undroppable areas to avoid errors  
        if (!destination) return;
        if ( destination.index === source.index && destination.droppableId === source.droppableId) {
            return;
        }
    }

    return(
        <div className="main-container">
            <div className="header-container">
                <div className="actions-header">
                    <a href="#" className="action-button">settings</a>
                    <a href="#" className="action-button">wiki</a>
                    <a id="clone" href="#" className="action-button">clone</a>
                </div>
            </div>            
            <section className="section-container">  
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="cards-section">                    
                        { Object.keys(columns).map((column, index) => (
                            <EnviromentCard                                                                
                                {...columns[column]}                                
                                index={index}
                                key={index}                                                                
                                />)
                        )}        
                        <CreateEnviromentCard/>                            
                    </div>
                </DragDropContext>
            </section>        
        </div>
    );
}
export default EnviromentSection;