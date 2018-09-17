import React,{Component} from 'react';

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <ul className="header-bar">
                    <li>로그인</li>
                    <li>회원가입</li>
                    <li>내정보보기</li>
                </ul>
            </div>
        );
    }

}