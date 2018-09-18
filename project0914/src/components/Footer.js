import React,{Component} from 'react';
import twitter from '../img/twitter-logo.png';
import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                
                <div className="footer-p">
                <h2>회사소개</h2>
                <p>주소 : 서울 5길 10, 1층</p>
                <p>전화번호 : 010-4440-0231</p>
                <p>이메일 : snrnt@naver.com</p>
                <p>회사소개   |   쇼핑가이드   |   개인정보보호정책   |   이용약관</p>
                </div>
                <div className="sns-bar">
                    <img src={twitter} alt=""/>
                    <img src={instagram} alt=""/>
                    <img src={facebook} alt=""/>
                </div>
            </div>
        );
    }
}