import React, {useCallback} from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import {useDropzone} from 'react-dropzone'

import './style.scss';

const handleSubmit = event => {
    event.preventDefault();
}

const NewTask = () =>{
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
        {file.path} - {file.size} bytes
        </li>
    ));

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
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
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
                    {/* <div className="input-divider">                                            
                        <input type="text" className="form-control" placeholder="Attachment" name="summary"/>
                    </div> */}
                    
                    {/* 
                        Begining of DropZone section
                     */}

                    <section className="upload-container">                        
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <h4 className="lb-description">Attachment</h4>
                            <p style={{color:"#aeafb1"}}>Drop files here to attach, or <a href="#" style={{color:"#0759bd"}}>browse</a></p>
                        </div>
                        <div className="uploaded-files">
                            <h4>Files</h4>
                            <ul>{files}</ul>
                        </div>
                    </section>
                    
                    {/* 
                        Ending of DropZone section
                     */}
                    <div className="input-divider" style={{width: "97%", margin: "2px auto"}}>                    
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