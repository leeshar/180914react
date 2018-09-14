import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Home,About,Event,Login} from '../pages';

export default class Section extends Component{
    render(){
        return(
            <div className="section">
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/event" component={Event}/>
                <Route exact path="/login" component={Login}/>
                <div className="push"></div>
            </div>
        );
    }
}