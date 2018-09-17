import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';
export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <img src={logo}></img>
                <ul className="header-bar">
                    <li><Link to="/login">로그인</Link></li>
                    <li>회원가입</li>
                    <li>내정보보기</li>
                </ul>
            </div>
        );
    }

}