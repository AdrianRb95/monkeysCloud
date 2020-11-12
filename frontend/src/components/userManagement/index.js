import React, { useState } from 'react';
import {FaTrashAlt, FaCaretDown, FaSistrix} from "react-icons/fa";


//Imports css file
import './style.scss';

const usersCollection = [
    {id: 1, name: 'Oscar Melendez', userName: 'oski98colibri', img: "https://scontent.fsjo1-1.fna.fbcdn.net/v/t1.0-1/cp0/c0.7.40.40a/p40x40/81151809_572259023350913_2154406710079389696_o.jpg?_nc_cat=108&ccb=2&_nc_sid=dbb9e7&_nc_ohc=AeqEOhL3pikAX__opS1&_nc_ht=scontent.fsjo1-1.fna&tp=27&oh=ea566e72b6c903836704e84455cb7053&oe=5FC6CE82", company: "ColibriCode", Rol: "Dev"},
    {id: 2, name: 'Jorge Peraza', userName: 'Yorch', img: "https://ca.slack-edge.com/TMN43NK2P-UMZ3J5Q8L-g7bb149f4ded-512", company: "ColibriCode", Rol: "Project owner"},
    {id: 3, name: 'Diego Avila', userName: 'Avila20', img: "https://ca.slack-edge.com/TMN43NK2P-U011GDT0H9D-1ea1e50a5afc-512", company: "ColibriCode", Rol: "Dev"},
    {id: 4, name: 'David Loynaz', userName: 'LoynazDev', img: "https://ca.slack-edge.com/TMN43NK2P-U01D366EQ05-5a5f99ef7a03-512", company: "ColibriCode", Rol: "Dev"},
    {id: 5, name: 'Esteban Solis', userName: 'Chicho32', img: "https://ca.slack-edge.com/TMN43NK2P-U018391829M-468b7678b9dd-512", company: "ColibriCode", Rol: "Mid Full Stack Dev"},
    {id: 6, name: 'Gabriel Alvarado', userName: 'GaboAlv', img: "https://ca.slack-edge.com/TMN43NK2P-U018WKVBVGR-ea55c502835e-512", company: "ColibriCode", Rol: "Dev"},
    {id: 7, name: 'Josue Cordero', userName: 'JosueColibri', img: "https://ca.slack-edge.com/TMN43NK2P-U018J1FNJF4-gd071e2aeaaa-512", company: "ColibriCode", Rol: "Dev"},
    {id: 8, name: 'Karla Campos', userName: 'Kar97Campos', img: "https://ca.slack-edge.com/TMN43NK2P-U01D366F3L5-3b9a1fd2e78d-512", company: "ColibriCode", Rol: "Dev"},
    {id: 9, name: 'Adrian Ramirez', userName: 'Ramirez2020', img: "https://ca.slack-edge.com/TMN43NK2P-U01B61MCKNJ-d2777ee0801b-512", company: "ColibriCode", Rol: "Dev"}    

];

const roles = [
    {id: 1, name: "Maintain"},
    {id: 2, name: "testing1"},
    {id: 3, name: "testing2"},
    {id: 4, name: "testing3"},
    {id: 5, name: "testing4"}
];

const UserManagement = () =>{
    const [checked, setChecked] = useState(false);
    return(
        <div className="management-container">
            <div className="management-header">
                <p className="title-section">Magane access</p>
                <div className="management-actions">
                    <a href="#" className="create-team">Create team</a>
                    <a href="#" className="invite-section">Invite teams or people</a>
                </div>
            </div>
            <div className="management-section">                
                <div className="m-headerSection">
                    <input id="checkAll" type="checkbox" className="check-section" onChange={() => setChecked(!checked)}/>
                    <p className="select-all">Select all</p>
                    <div className="description-titles">
                        <p className="type-title">Type</p> <FaCaretDown style={{marginTop: '2px', marginRight: '2em'}}/>
                        <p className="role-title">Role</p> <FaCaretDown style={{marginTop: '2px'}}/>
                    </div>
                </div>
                <div className="filter-section inputWithIcon">
                    <input 
                        type="text" 
                        placeholder="Find team, organization member or outside collaborator..."
                        className="filterControl"
                    />
                    <i><FaSistrix/></i>
                </div>
                <div className="user-information">                    
                    
                    {usersCollection.map(({id, name, userName, img}, i)=>(
                        <UserInformation
                            id={id}
                            name={name}
                            userName={userName}
                            img={img}
                            key={i}
                        />
                    ))}                                                                    
                </div>
            </div>
        </div>
    );
}

const UserInformation = (props)=> {
    const [checked, setChecked] = useState(false);
    return(
        <section className="user-section">
            <div className="user-container">
                <input id={props.id} type="checkbox" className="userCheck" value={props.id} checked={checked} onChange={() => setChecked(!checked)}/>
                <label className="user-img">                
                    <div className="toggle">
                        <img 
                            className="img-radius"
                            src={props.img}
                        ></img>
                    </div>
                </label>
            </div> 
            <div className="userDetails">
                <p className="user-name">{props.name}</p>
                <p className="userName">{props.userName}</p>
            </div>                        
            <div className="userActions">
                <select className="roles-list">
                    {roles.map(({id, name}, i )=>(
                        <option value={id} key={i}>Role: {name}</option>
                    ))}                    
                </select>
                <FaTrashAlt className="trash-icon"/>
            </div>            
        </section>        
    );
}

export default UserManagement;