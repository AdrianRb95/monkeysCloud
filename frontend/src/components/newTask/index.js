import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import './style.scss';

const handleSubmit = event => {
    event.preventDefault();
}

const NewTask = () =>{
    return(
        <div className="main-container">
            <h3 className="header-page">Create Issue</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="input-divider">                        
                        <select className="form-control" name="project">
                            <option>Project</option>
                        </select>                                                                        
                    </div>
                    <div className="input-divider">                                                
                        <select className="divided-control" name="type">
                            <option>Issue Type</option>
                        </select>                                          
                        <select className="divided-control" name="priority">
                            <option>Priority</option>
                        </select>      
                    </div>                    
                    <p className="description">Some issue types are unavailable due to incompatible field configuration and/or workflow associations.</p>
                    <hr/>                    
                    <div className="input-divider">                        
                        <input type="text" className="form-control" placeholder="Summary" name="summary"/>                                                                      
                    </div>
                    <div className="input-divider">                                                
                        <select className="form-control" name="components">
                            <option>Components</option>
                        </select>                                                                    
                    </div>
                    <div className="input-divider">                        
                        <input type="text" className="form-control" placeholder="Attachment" name="summary"/>                                                                      
                    </div>
                    <div className="input-divider" style={{width: "97%", margin: "1em auto"}}>                    
                        <SunEditor
                            name='description'                            
                            height='250'                        
                            placeholder='Please add your content here...'                                              
                        />
                    </div>
                </div>
                <div className="actions">
                    <span className="span"><input type="checkbox" style={{marginRight: "2px"}}/>Create another</span>
                    <button type="submit" className="submit-button">Create</button>
                    <button className="cancel">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default NewTask;