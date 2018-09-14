import React, { Component } from 'react';
import './css/App.css';
import './css/Page.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Nav/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}

export default App;
