import React,{Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import Arrow from '../img/menu_arrow.png';

export default class AdminNav extends Component{
   constructor(){
       super();
       this.handleChange = this.handleChange.bind(this);
   }
   handleChange = (e) =>{
       const element = document.getElementById('submenu0'+e);
       element.classList.toggle('on');
   };
    render(){
        return(
            <div className="adminNav">
            <ul className="aside">
            <li class="adminli">관리자</li>
            <li><NavLink to="/">홈</NavLink></li>
            <li>관리</li>
            <li onClick={(e) => this.handleChange(1)}><a>회원관리<span><img src={Arrow}/></span></a></li>
            <ul className="on" id="submenu01">
            <li>· 일반회원</li>
            <li>· 스토어회원</li>
            <li>· 스토어정보</li>
            <li>· 휴먼회원</li>
            </ul>
            <li onClick={(e) => this.handleChange(2)}>승인관리<span><img src={Arrow}/></span></li>
            <ul className="on" id="submenu02">
            <li>· 스토어개설</li>
            <li>· 스토어폐쇄</li>
            </ul>
            <li onClick={(e)=>this.handleChange(3)}>스토어관리<span><img src={Arrow}/></span></li>
            <ul className="on" id="submenu03">
                <li>· 상품조회</li>
                <li>· 게시글관리</li>
                <li>· 쪽지관리</li>
                <li>· 채팅관리</li>
                <li>· 댓글관리</li>
                <li>· 전체공지관리</li>
            </ul>
            <li onClick={(e)=>this.handleChange(4)}>주문/클레임관리<span><img src={Arrow}/></span></li>
            <ul className="on" id="submenu04">
                <li>· 입금확인중</li>
                <li>· 신규주문</li>
                <li>· 발주확인</li>
                <li>· 서비스이용중</li>
                <li>· 구매확정</li>
                <li>· 취소/환불</li>
            </ul>
            </ul>
            </div>
        );

    }

}