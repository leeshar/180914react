import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import {Admin} from '../pages';
export default class AdminSec extends Component{

    render(){
        return(
            <div className="wrapAdminSec">
                <div className="adminSec">
                <Route exact path="/admin" component={Admin}/>
                <div className="push"></div>
                </div>
            </div>
        );
    }
}