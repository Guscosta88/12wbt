import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Button, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import './Join.css';


class CustomNavbar extends Component {
    render() {
        return (
                // <Navbar default collapseOnSelect>

<nav class="navMenu nav py-0 navbar navbar-expand-md navbar-light sticky-top">
<div class="container-sm">
<button aria-controls="navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed">
<span class="navbar-toggler-icon"></span></button><span class="py-0 navbar-brand">

<a href="/" img src="/static/media/12wbt-logo.30c8c45a.svg" width="140px" alt="12WBT Logo Blue" class="my-2">

</a>

</span>
<div class="navbar-collapse collapse" id="navbar-nav">
<div class="mr-auto navbar-nav">
<div class="nav-item">
<a href="/howitworks">How it Works</a>
</div>
<div class="nav-item">
<a href="/programs">Programs</a>
</div>
<div class="nav-item">
<a href="/nutrition">Nutrition</a>
</div>
<div class="nav-item">
<a href="/fitness">Fitness</a>
</div>
<div class="nav-item">
<a href="/mindset">Mindset</a>
</div>
<div class="dropdown nav-item">
<a aria-haspopup="true" aria-expanded="false" id="collasible-nav-dropdown" href="#" class="dropdown-toggle nav-link" role="button">Community</a>
</div>
<div class="nav-item">
<a href="/faqs">FAQs</a>
</div>
</div>
<div class="navbar-nav">
<a id="sign-in-nav" href="https://go.12wbt.com" data-rb-event-key="https://go.12wbt.com" class="nav-link">Login</a>
<a id="sign-up-nav" href="https://go.12wbt.com/sign-up" data-rb-event-key="https://go.12wbt.com/sign-up" class="nav-link">Join Now</a>
</div>
</div>
</div>
</nav>



            
                       
        )
    }
}

export default CustomNavbar;

// <nav class="navMenu nav py-0 navbar navbar-expand-md navbar-light sticky-top">
// <div class="container-sm">
// <button aria-controls="navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed">
// <span class="navbar-toggler-icon">
// </span>
// </button>
// <span class="py-0 navbar-brand">
// <a href="/">
// <img src="/static/media/12wbt-logo.30c8c45a.svg" width="140px" alt="12WBT Logo Blue" class="my-2">
// </a>
// </span>
// <div class="navbar-collapse collapse" id="navbar-nav">
// <div class="mr-auto navbar-nav"><div class="nav-item">
// <a href="/how-it-works">How it Works</a></div>
// <div class="nav-item">
// <a href="/programs">Programs</a>
// </div><div class="nav-item">
// <a href="/nutrition">Nutrition</a></div>
// <div class="nav-item">
// <a href="/fitness">Fitness</a>
// </div>
// <div class="nav-item">
// <a href="/mindset">Mindset</a>
// </div>
// <div class="dropdown nav-item">
// <a aria-haspopup="true" aria-expanded="false" id="collasible-nav-dropdown" href="#" class="dropdown-toggle nav-link" role="button">Community</a>
// </div>
// <div class="nav-item">
// <a href="/faqs">FAQs</a>
// </div>
// </div>
// <div class="navbar-nav">
// <a id="sign-in-nav" href="https://go.12wbt.com" data-rb-event-key="https://go.12wbt.com" class="nav-link">Login</a>
// <a id="sign-up-nav" href="https://go.12wbt.com/sign-up" data-rb-event-key="https://go.12wbt.com/sign-up" class="nav-link">Join Now</a>
// </div>
// </div>
// </div>
// </nav>