import React from "react";
import { Link } from "react-router-dom";
import {
  Row, Col, FormGroup, Form, Button,
  Card,
  Label,
  Input,
  Container,
  CardBody,
  CardTitle,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

import routes from "routes.js";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent"
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
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        // background: '#f1f1f1'
        backgroundImage: "url(" + 'OkkJi-Logo-big.png' + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover'

      }}>
        <Container style={{ display: 'flex', justifyContent: 'center', minHeight: 300 }}>
        <Card style={{ minWidth: 500}}>
          <CardBody style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{padding: '10px', display: 'flex', flex:1, justifyContent: 'center', alignItems: 'center'}}>
              <img src='SMALL-OKKJI-LOGO.PNG'></img>
            </div>
            <Form>
              <FormGroup >
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText style={{backgroundColor: '#f1f1f1', padding: 10}}><i className='nc-icon nc-single-02' /></InputGroupText>
                  </InputGroupAddon>
                <Input type="text" name="name" placeholder="Enter Name" />
                </InputGroup>
              </FormGroup>
              
              <FormGroup >
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText style={{backgroundColor: '#f1f1f1', padding: 10}}><i className='nc-icon nc-mobile' /></InputGroupText>
                  </InputGroupAddon>
                <Input type="number" name="mobileNumber" placeholder="Enter Mobile Number" />
                </InputGroup>
              </FormGroup>
              
              <FormGroup >
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText style={{backgroundColor: '#f1f1f1', padding: 10}}><i className='nc-icon nc-single-02' /></InputGroupText>
                  </InputGroupAddon>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
                </InputGroup>
              </FormGroup>
              <FormGroup >
                <Label for="examplePassword" hidden>Password</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText style={{backgroundColor: '#f1f1f1', padding: 10}}><i className='nc-icon nc-key-25' /></InputGroupText>
                  </InputGroupAddon>
                  {/* <Input placeholder="username" /> */}
                {/* <Input type="email" name="email" id="exampleEmail" placeholder="Email" /> */}
                <Input type="password" name="password" id="examplePassword" placeholder="Password"/>
                </InputGroup>
              </FormGroup>
              <Button color='success'>Signup</Button>
              <a className='pl-3' href='/login'>Already have an account!</a>
            </Form>
          </CardBody>
        </Card>
      </Container>
      </div>);
  }
}

export default Signup;
