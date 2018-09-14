import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component{

    render(){
        const activeStyle = {
            border: '2px solid white'
        }
        return(
            <div className="nav">
                <ul className="nav-bar">
                    <li><Link to="/" activeStyle={activeStyle}>홈</Link></li>
                    <li><Link to="/about" activeStyle={activeStyle}>공지사항</Link></li>
                    <li><Link to="/event" activeStyle={activeStyle}>이벤트</Link></li>
                    <li>메뉴</li>
                </ul>
            </div>
        );
    }
}