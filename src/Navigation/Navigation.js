import React from 'react';
import BCLogo from '../images/BCLogo-blk-sml.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Navigation.css';
import { Ch16UURLS, C15UURLS, G13UURLS, Y14UURLS, N12UURLS, W12UURLS, G11UURLS, A10UURLS, K16UURLS, H8UURLS } from '../TeamPage/events';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false,
    };
}

toggle() {
    this.setState(prevState => ({
        isOpen: !this.state.isOpen,
    }));
}

render() {
    const { onRouteChange } = this.props;
    return (
        <Navbar sticky={'top'} className="navbar navbar-expand-lg navbar-light bg-secondary">
          <NavbarBrand href = "/BuckeyeCharge" >
            <img src={BCLogo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="BC logo" /> <h4 className="d-inline-block align-bottom"> 
                   Buckeye Charge <br/>Fastpitch Softball </h4>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className="ml-auto" navbar >
              <NavItem >
                <NavLink tag="h6" href="/" onClick={this.toggle}>
                  <p onClick={() => onRouteChange('home')} >
                    <br/> HOME
                  </p> 
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle tag="h6" nav caret ><br/>TEAMS </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Cholley16U', 'Cholley 16U', Ch16UURLS)} >Cholley 16U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Kaisk16U', 'Kaisk 16U', K16UURLS)} >Kaisk 16U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Cavanagh15U', 'Cavanagh 15U', C15UURLS)} >Cavanagh 15U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Yoder14U', 'Yoder 14U', Y14UURLS)} >Yoder 14U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Gardner13U', 'Gardner 13U', G13UURLS)} >Gardner 13U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Norman12U', 'Norman 12U', N12UURLS)} >Norman 12U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                    onRouteChange('Meikle12U', 'Meikle 12U', W12UURLS)} >Meikle 12U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                    onRouteChange('Gressman11U', 'Gressman 11U', G11UURLS)} >Gressman 11U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Albertson10U', 'Albertson 10U', A10UURLS)} >Albertson10U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Homan8U', 'Homan 8U', H8UURLS)} >Homan8U</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('tournaments')} >
                  <br/> TOURNAMENTS 
                </p> 
              </NavLink>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <a href="https://2019buckeyecharge.itemorder.com/sale" target="_blank" rel="noopener noreferrer">
                  <br/> FAN GEAR 
                </a> 
              </NavLink>
              {/* <NavLink tag="h6" to="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('home')} >
                  <br/> SPONSORS 
                </p> 
              </NavLink> */}
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('training')} >
                  <br/> TRAINING 
                </p> 
              </NavLink>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('tryouts')} >
                  <br/> TRY-OUTS 
                </p> 
              </NavLink>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('abpitching')} >
                  AB Pitching,<br/> Hitting <br/>and Fitness 
                </p> 
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
    )
  }
}

export default Navigation;