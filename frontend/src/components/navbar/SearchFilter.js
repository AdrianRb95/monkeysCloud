import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import ListItem from './listItem'

const CustomSearch = () => {
    const [search, setSearch] = useState({query:""})
    const data = [
        {title:"D8M-199",description:" LLS.org - add new content type to the community feed",date:"Drupal 8 Migration * Updated yesterday "},
        {title:"D8M-199",description:" LLS.org - add new content type to the community feed",date:"Drupal 8 Migration * Updated yesterday "},
        {title:"D8M-199",description:" LLS.org - add new content type to the community feed",date:"Drupal 8 Migration * Updated yesterday "},
        {title:"D8M-199",description:" LLS.org - add new content type to the community feed",date:"Drupal 8 Migration * Updated yesterday "},
        {title:"D8M-199",description:" LLS.org - add new content type to the community feed",date:"Drupal 8 Migration * Updated yesterday "}
    ]

    const options =  ["issues","boards","projects","filters","people"];
    const users = ["Josue","Jorge","Mario"];
    const {query} = search;

    const onHandleChange = e => {
        setSearch({...search,query:e.target.value})
    }

    return (
        <form className="nav-form">
            <input type="text" className="nav-input" placeholder="Search ..." value={query} onChange={onHandleChange} />  
               {query.length > 2 && (<div className="nav-search">
                    <div className="search-container">
                        <div className="search-issues">
                            <h4 className="search-section-title">Issues <span className="search-badge">99+</span></h4>
                            <div className="search-list-issues">
                                {data.map(({title,description,date},i) => <ListItem title={title} description={description} date={date} key={i} />)}
                                <Link to="/" className="nav-show-more">Show more</Link>
                            </div>
                            <div className="nav-boards">
                                <h4 className="search-section-title">Boards, Projects and filters</h4>
                                {users.map(u => <ListItem title={u} key={u} />)}    
                            </div>
                        </div>
                        <div className="search-filter">
                            <div className="projects-filters">
                                <h5 className="search-section-title">Filter by project</h5>
                                <div className="filter-project">
                                    <div className="filter-checkbox">
                                        <input type="checkbox"/>
                                    </div>
                                    <ListItem title="monkey-cloud" />
                                </div>
                                <Link to="/" className="nav-show-more">Show more</Link>
                            </div>
                            <div className="projects-filters">
                                <h5 className="search-section-title">
                                    Filter By assignee
                                </h5>
                                {users.map(u => (
                                    <div className="filter-project" key={u}>
                                        <div className="filter-checkbox">
                                            <input type="checkbox"/>
                                        </div>
                                        <ListItem title={u} avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkDVDRhcwX5vFbA3CJlA1-tyf_2VOG2FwG7w&usqp=CAU" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                <div className="search-footer">
                    <h5>Go to all: </h5>
                    {options.map((o,i) => <Link to="/" className="nav-filter-button" key={i} onClick={()=>{}} >{o}</Link>)}
                </div>
            </div>)}
        </form>  
        )
    }

export default CustomSearch
