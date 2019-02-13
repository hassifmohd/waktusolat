import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import Homepage from './views/Homepage';
import Settings from './views/Settings';
import AboutUs from './views/AboutUs';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto">Waktu Solat Malaysia</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/">Waktu Solat</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/settings">Settings</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/aboutus">About</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route path="/settings" component={Settings} />
            <Route path="/aboutus" component={AboutUs} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
