import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";
import CookieHandler from '../../utils/cookieHandler';
import { Menu } from "antd";
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
    this.state = {
      userData: null,
      showNotification: false,
      userPermissions: [{
        name: 'shopKeeper',
        canView: ['Dashboard', 'Store', 'Customer', 'Location', 'Target', 'Incentive', 'Support']
      }],
      sidebarRoutes: this.props.routes
    }
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    let userData = JSON.parse(CookieHandler.readCookie('userData'));
    this.setState({userData});
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }

    let {sidebarRoutes, userPermissions} = this.state;
    let {userInfo} = userData;
    let currentUserType = userInfo.userType.key;
    if(currentUserType == 'marketing'){
      let userShouldView = ['Dashboard', 'Store', 'Customer', 'Location', 'Target', 'Incentive', 'Support'];
      sidebarRoutes = this.props.routes;
      sidebarRoutes = sidebarRoutes.filter(singleRoute => userShouldView.includes(singleRoute.name))
      this.setState({sidebarRoutes});
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    let {sidebarRoutes} = this.state;
    return (
      <div className="sidebar" data-color={this.props.bgColor} data-active-color={this.props.activeColor}>
        <div className="logo">
          <a href="#" className="simple-text logo-mini" >
            <div className="logo-img">
              <img src='/SMALL-OKKJI-LOGO.PNG' alt="react-logo" />
            </div>
          </a>
          <a href="#" className="simple-text logo-normal"> <i class="fas fa-align-right float-right"></i> </a>
        </div>
        <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
            {sidebarRoutes.map((prop, key) => (prop.type != 'subMenu')?(
              <li className={ this.activeRoute(prop.path) + (prop.pro ? "active-pro" : "") } key={key} >
                <NavLink to={prop.layout + prop.path} className="nav-link" activeClassName="active" >
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            ):(
              <li className={ this.activeRoute(prop.path) + (prop.pro ? "active-pro" : "") } key={key} >
                {sidebarRoutes.map((subMenu, i)=><NavLink to={subMenu.layout + subMenu.path} className="nav-link" activeClassName="active" >
                  <i className={subMenu.icon} />
                  <p>{subMenu.name}</p>
                </NavLink>)}
              </li>

              // <Menu mode="inline" >
              // <SubMenu className='nav-link'
              //   style={{backgroundColor: '#eee'}}
              //   title={
              //     <span>
              //       <i className={prop.icon}/>
              //       <p>{prop.subMenuTitle}</p>
              //     </span>
              //   }>
              //     {prop.routes.map((subMenu, i)=><Menu.Item className='nav-link' ><Link to={subMenu.path}>{subMenu.name}</Link></Menu.Item>)}
              // </SubMenu>
              // </Menu>
            ))}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;