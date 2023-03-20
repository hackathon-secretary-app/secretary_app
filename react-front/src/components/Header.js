import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import {useState} from "react";
import sidebar_status from "../App"

function Header(props) { 
  return (
    <header>
        <div className='app-title'>
            <div className='memu-bar' onClick={()=>{
                props.changeState(!props.state)
            }}>
                <DensityMediumIcon fontSize='large'/>
            </div>
            <div className='logo'>
                <h3>
                    ToDoアプリ
                </h3>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <a href='#'>Order</a>
                </li>
                <li>
                    <a href='#'>かきくけこ</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header