import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends Component{
  
    render(){
        const activeStyle = {
            border: '2px solid white',
            padding: '10px'
        }
        return(
            
            <div className="nav">
                <ul className="nav-bar">
                    <li><NavLink exact to="/" activeStyle={activeStyle}>홈</NavLink></li>
                    <li><NavLink to="/about" activeStyle={activeStyle} >공지사항</NavLink></li>
                    <li><NavLink to="/event" activeStyle={activeStyle}>이벤트</NavLink></li>
                    <li><NavLink to="/admin" activeStyle={activeStyle}>관리자</NavLink></li>
                </ul>
            </div>
        );
    }
}