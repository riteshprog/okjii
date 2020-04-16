import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import avatar from '../../assets/img/storeIcon.png';
import CustomerNavBar from '../customer/CustomerNavBar';
import { CustomInput, Row, Col } from 'reactstrap';
import CookieHandler from '../../utils/cookieHandler';
import Axios from "axios";

export default class StoreDetails extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      showActions: false,
      allShops: [],
    }
  let {userInfo} = JSON.parse(CookieHandler.readCookie('userData'));
  }

  componentDidMount(){
    let {userInfo, _id} = JSON.parse(CookieHandler.readCookie('userData'));
    let token = JSON.parse(CookieHandler.readCookie('token'))
    let url = process.env.REACT_APP_API_URL + '/shop';
    if(userInfo.userType.key == 'marketing') { 
      url+='?addedBy=' + _id
    } 
    this.getShopList(url, token);
  }

  getShopList = (url, token) => {
    Axios.get(url, {
      headers: {
        token
      }
    })
    .then(({data})=>{
      console.log(data);
      if(data.status){
        this.setState({allShops: data.allShops})
      }else{
        console.log('no shop found')
      }
    }).catch(err=>{
      console.log(`catch`, err);
    })
  }

  handleAddNewShop = (e, type) => {
    if(type == 'addNewShop'){
      window.location.pathname= 'admin/shops/add-new';
    }
  }

  handleOnAddProductClicked = (shopId)=> <Link to='/login'/>

  render() {
    return (
      <>
        <div className="content store-page">
          <CustomerNavBar />
         
          <div className='retail-store'>
             <MDBTable className="customer-table" striped>
              <MDBTableHead>
                <tr>
                  <th><img src={avatar} className="rounded-circle testimoni-img" width="50" height="50" alt="avatar" /></th>
                  <th>Serial No.</th>
                  <th>Store Name</th>
                  <th>Location</th>
                  <th>Categories</th>
                  <th className="text-center">Active</th>
                  <th className="text-center">Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {this.state.allShops.map(shop=>(
                <tr>
                  <td><img src={shop.basic.ownerPhoto} className="rounded-circle testimoni-img" width="50" height="50" alt="avatar" /></td>
                  <td><span className="text-green">{shop.shopInfo.shopCode}</span></td>
                  <td><span className="text-green">{shop.basic.shopName}</span></td>
                  <td>{shop.basic.district?shop.basic.district:shop.basic.shopLocation.label.split(', ').slice(0, 2).join(', ') }</td>
                  <td><span className="text-green">{shop.storeCatelogue.storeType}</span></td>
                  <td className="text-center"><Switch checked={shop.shopInfo.status === 'Active'?true:false} checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
                 <td className="text-center"><MDBDropdown dropleft>
                <MDBDropdownToggle color="primary">
                <i class="fas fa-ellipsis-v" />
                </MDBDropdownToggle>
                <MDBDropdownMenu  basic className="dropdown-bottom" >
                  <MDBDropdownItem><Link to={`/admin/shops/single/${shop._id}`}>View Details</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to={`/admin/shops/add-item/${shop._id}`}>Add Product</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="store/product/:storeId">Product</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="target">Target</Link></MDBDropdownItem>
                  {window.location.hostname.split('.')[0] != 'Marketing'?<MDBDropdownItem><Link to="store/wallet">wallet</Link></MDBDropdownItem>:(null)}
                  {window.location.hostname.split('.')[0] != 'Marketing'?<MDBDropdownItem>OkkJi Khata</MDBDropdownItem>:(null)}
                  {window.location.hostname.split('.')[0] != 'Marketing'?<MDBDropdownItem>Setting</MDBDropdownItem>:(null)}
                  {window.location.hostname.split('.')[0] != 'Marketing'?<MDBDropdownItem>Revenue</MDBDropdownItem>:(null)}
                </MDBDropdownMenu>
              </MDBDropdown></td>
                </tr>
            ))}
            </MDBTableBody>
          </MDBTable>
          </div>
         
         </div>
      </>
    )
  }
}
