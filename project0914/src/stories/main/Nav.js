import React, {Component} from 'react';
import {LinkTo} from '@storybook/addon-links';

export default class Nav extends Component{

    render(){
        const activeStyle = {
            border: '2px solid white',
            padding: '10px'
        }
        return(
            <div className="nav">
                <ul className="nav-bar">
                    <li>홈</li>
                    <li>공지사항</li>
                    <li>이벤트</li>
                    <li>메뉴</li>
                </ul>
            </div>
        );
    }
}