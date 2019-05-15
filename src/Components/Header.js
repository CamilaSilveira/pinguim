import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,} from 'reactstrap';
  export default class Example extends React.Component {
   constructor(props) {
     super(props);
 
     this.toggle = this.toggle.bind(this);
     this.state = {
       isOpen: false
     };
   }
   toggle() {
     this.setState({
       isOpen: !this.state.isOpen
     });
   }
   render() {
     return (
       <div>
         <Navbar color="dark" light expand="md">
           <NavbarBrand href="/">Pinguim Software</NavbarBrand>
           <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem>
                 <NavLink href="/components/About">About</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/components/Services">Services</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/components/Footer">Contact</NavLink>
               </NavItem>
             </Nav>
           </Collapse>
         </Navbar>
       </div>
     );
   }
 }