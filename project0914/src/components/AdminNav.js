import React,{Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import Arrow from '../img/menu_arrow.png';

export default class AdminNav extends Component{
    render(){
        return(
            <div className="adminNav">
            <ul className="aside">
            <li class="adminli">ADMIN</li>
            <li><NavLink to="/">홈</NavLink></li>
            <li>관리</li>
            <li>회원관리<span><img src={Arrow}/></span></li>
            <li>승인관리<span><img src={Arrow}/></span></li>
            <li>스토어관리<span><img src={Arrow}/></span></li>
            <li>주문/클레임관리<span><img src={Arrow}/></span></li>
            </ul>
            </div>
        );

    }

}