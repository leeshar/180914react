import React, { Component } from 'react';
import './css/App.css';
import './css/Page.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AdminNav from './components/AdminNav';
import AdminSec from './components/AdminSec';

class App extends Component {
  
  /*state = {users: []};
  componentDidMount() {
    console.log('mount');
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));

      }
    서버와 Ajax 통신
  */
  render() {
    const str = window.location.href.indexOf(':3000')+6;
    const url = window.location.href.substr(str);
   
    return (
      <div className="App">
        <Header/>
        {url==='admin' ? <AdminNav/>:<Nav/>}
        {url==='admin' ? <AdminSec/>:<Section/>}
{/*         
        {this.state.users.map(user =>
          // <div key={user.id}><p>user_id:{user.id}</p>
          // <p>user_username:{user.username}</p></div>
        )} */}
        <Footer/>
      </div>
    );
  }
}

export default App;
