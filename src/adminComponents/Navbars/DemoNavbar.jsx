/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import {MDBIcon} from "mdbreact";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  NavItem
} from "reactstrap";

import routes from "../../routes";
import CookieHandler from '../../utils/cookieHandler.js';
import Add from '../../assets/img/Add.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent",
      userData: JSON.parse(CookieHandler.readCookie('userData'))
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
    

  }

  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "dark"
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  getBrand() {
    let brandName = "Default Brand";
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  }
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "dark"
      });
    } else {
      this.setState({
        color: "transparent"
      });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("toggled");
    }
  }
  handleLogout = () => {
    CookieHandler.eraseCookie('userData');
    window.location = '/';
  }
  render() {
    let user = this.state.userData;
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "dark"
            : this.state.color
        }
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar className="justify-content-end" >
            <form>
              <InputGroup className="no-border">
              <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                  <i class="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input className='no-border' placeholder="Search..." />
              </InputGroup>
            </form>
            <Nav navbar>
            <NavItem className="nav-btn">
              <Link to="#" className="nav-link"><i class="far fa-question-circle"></i></Link>
              <Link to="#" className="nav-link"><MDBIcon far icon="bell" /></Link>
              <Link title='Add New Shop' to="/admin/mshops/add-new-shop" className="nav-link"><img src={Add} alt="" className="Add" /></Link> <Link to="/" className="nav-link"><MDBIcon icon="dharmachakra" /></Link>
            </NavItem>



              {/* <NavItem>
                <Link to="shops/add-new" className="nav-link btn-magnify">
                  <PlusCircleOutlined style={{fontSize: 25}}/>
                  <i className="nc-icon nc-simple-add" />
                </Link>
              </NavItem> */}
              {/* <NavItem>
                <Link to="#pablo" className="nav-link btn-rotate">
                  <i className="nc-icon nc-settings-gear-65" />
                  <p>
                    <span className="d-lg-none d-md-block">Account</span>
                  </p>
                </Link>
              </NavItem> */}

              { <div className='df aic'>
                <span >Hello {user && user.basic && user.basic.name} </span>
              </div> }
              
              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={e => this.dropdownToggle(e)}>
                <DropdownToggle caret nav>
                  <i className="nc-icon nc-single-02" />
                  <p> <span className="d-lg-none d-md-block">User Actions</span></p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.handleLogout} tag="a">Logout</DropdownItem>
                </DropdownMenu>
              </Dropdown>
                            
              {/* <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={e => this.dropdownToggle(e)}
              >
                <DropdownToggle caret nav>
                  <i className="nc-icon nc-bell-55" />
                  <p>
                    <span className="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a">Action</DropdownItem>
                  <DropdownItem tag="a">Another Action</DropdownItem>
                  <DropdownItem tag="a">Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
               */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
