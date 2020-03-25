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

import routes from "../../routes";
import './login.css';
import axios from "axios";
import CookieHandler from '../../utils/cookieHandler.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent",
      email: '',
      password: '',
      loginError: false

    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
    // const userData = CookieHandler.readCookie('userData');
    // if(userData) window.location.pathname = '/admin/dashboard'
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
  // componentDidUpdate(e) {
  //   if (
  //     window.innerWidth < 993 &&
  //     e.history.location.pathname !== e.location.pathname &&
  //     document.documentElement.className.indexOf("nav-open") !== -1
  //   ) {
  //     document.documentElement.classList.toggle("nav-open");
  //     this.sidebarToggle.current.classList.toggle("toggled");
  //   }
  // }
  handleOnChange = (e, type) => {
    const value = e.target.value;
    if(type == 'email') this.setState({email: value})
    if(type == 'password') this.setState({password: value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_API_URL + '/user/login', {
      email: this.state.email || 'user2@gmail.com',
      password: this.state.password || '123456'
    }).then((response)=> {
      console.log(response.data);
      response = response.data;
      if(!response.status){
        this.setState({loginError: true})
      }else{
        CookieHandler.createCookie('userData', JSON.stringify(response.userData));
        this.props.setUserData(response.userData);
      }
    }).catch(err=> {
      alert(`Error, Something Went Wrong`)
      console.log(err)
    })
  }
  render() {
    return (
      <div className='main-wrapper'>
      <Container className='container'>
        <Card style={{ minWidth: 200}}>
          <CardBody style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{padding: '10px', display: 'flex', flex:1, justifyContent: 'center', alignItems: 'center'}}>
              <img src='SMALL-OKKJI-LOGO.PNG'></img>
            </div>
            <Form className='login-form' onSubmit={this.handleSubmit}>

              <FormGroup >
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText style={{backgroundColor: '#f1f1f1', padding: 10}}><i className='nc-icon nc-single-02' /></InputGroupText>
                  </InputGroupAddon>
                <Input type="email" placeholder="Email" onChange={(e)=>this.handleOnChange(e, 'email')}/>
                </InputGroup>
                
              </FormGroup>
              <FormGroup >
                <Label for="examplePassword" hidden>Password</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText style={{backgroundColor: '#f1f1f1', padding: 10}}><i className='nc-icon nc-key-25' /></InputGroupText>
                  </InputGroupAddon>
                <Input type="password" placeholder="Password" onChange={(e)=>this.handleOnChange(e, 'password')}/>
                </InputGroup>
              </FormGroup>
              
              <Button color='success' type='submit'>Login</Button>
              {this.state.loginError? <span className='text-danger ml-3'>Invalid email/password, Try Again!</span>: null }
            </Form>
          </CardBody>
        </Card>
      </Container>
      </div>);
  }
}

export default Login;
