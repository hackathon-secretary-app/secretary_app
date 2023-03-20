import React from 'react'
import {SideBarList} from './SideBarData'
import SideBarImg from './SideBarImg'

function SideBar(props) {
  
  return (
    <div className='sidebar' >
        <ul className='sidebarlist'>
            {SideBarList.map((value,key)=>{
                return (
                    <li key={key} 
                    className='row'
                    onClick={()=>{
                        window.location.pathname = value.link
                    }}
                    id={window.location.pathname==value.link ? "active" : ""}>
                        <div id='icon'>{value.icon}</div>
                        <div id='title'>{value.title}</div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default SideBar;