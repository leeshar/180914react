import React, { Component } from 'react';
import './css/App.css';
import './css/Page.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AdminNav from './components/AdminNav';

class App extends Component {
  render() {
    const str = window.location.href.indexOf(':3000')+6;
    const url = window.location.href.substr(str);
    return (
      <div className="App">
        <Header/>
        {url==='admin' ? <AdminNav/>:<Nav/>}
        <Section/>
        <Footer/>
      </div>
    );
  }
}

export default App;
