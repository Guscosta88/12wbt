import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Howitworks from './components/Howitworks';
import Programs from './components/Programs';
import Nutrition from './components/Nutrition';
import Fitness from './components/Fitness';
import Mindset from './components/Mindset';
import Community from './components/Community';
import FAQs from './components/FAQs';
import Login from './components/Login';
import Join from './components/Join';
import Navbar from './components/CustomNavbar';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/howitworks" component={Howitworks} />
          <Route path="/programs" component={Programs} />
          <Route path="/nutrition" component={Nutrition} />
          <Route path="/fitness" component={Fitness} />
          <Route path="/mindset" component={Mindset} />
          <Route path="/community" component={Community} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
        </div>
      </Router>
    );
  }
}

export default App;
