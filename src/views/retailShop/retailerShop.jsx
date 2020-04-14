import React from "react";
import Axios from "axios";
import moment from 'moment-timezone';
import { Link } from "react-router-dom";
import { Avatar, Table, Tag } from "antd";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button } from "reactstrap";
import CookieHandler from '../../utils/cookieHandler';

class Tables extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      showActions: false,
      allShops: [],
    }
  let {userInfo} = JSON.parse(CookieHandler.readCookie('userData'));
  }
  columns = [
    {
      title: `Owner`,
      dataIndex: 'basic',
      key: '_id',
      render: basic => <Avatar size={64} src={basic.ownerPhoto}/>
    },
    {
      title: 'Shop Id',
      dataIndex: 'shopInfo',
      key: '_id',
      render: shopInfo => <span>{shopInfo.shopCode?shopInfo.shopCode:'N/A'}</span>,
    },
    {
      title: 'Shop Name',
      dataIndex: 'basic',
      key: '_id',
      render: basic => <span>{basic.shopName}</span>,
    },
    {
      title: 'Owner Name',
      dataIndex: 'basic',
      key: '_id',
      render: basic => <span>{basic.ownerName}</span>,
    },
    {
      title: 'Shop Type',
      dataIndex: 'storeCatelogue',
      key: '_id',
      render: storeCatelogue => <Tag color={storeCatelogue.storeType =='24x7Store'?'green':storeCatelogue.storeType =='Medium Store'?'blue':'red'}>{storeCatelogue.storeType}</Tag>,
    },
    // {
    //   title: 'Added On',
    //   dataIndex: 'shopInfo',
    //   key: '_id',
    //   render: shopInfo => <span>{moment(shopInfo.createdAt).format("lll")}</span>,
    // },
    {
      title: 'Shop Location',
      dataIndex: 'basic',
      key: '_id',
      render: basic => <span>{basic.shopLocation.label}</span>,
    },
    {
      title: 'Action',
      dataIndex: '_id',
      key: 'x',
      render: shopId => <div className='df fdc'>
        {this.userInfo && this.userInfo.userType.key != 'admin' && <a href={`/admin/shops/single/${shopId}`}>View</a>}
        <a href={`/admin/shops/add-item/${shopId}`}>Add Product</a>
      </div>, //
    }
  ]
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
        <div className="content">
          <Row>
            <Button className='ml-3 mb-3' color="primary" onClick={(e)=>this.handleAddNewShop(e, 'addNewShop')}>Add A New Shop</Button>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Shops</CardTitle>
                </CardHeader>
                <CardBody>
                {this.state.allShops.length?<span className='ml-1 desc'>Total Shops: {this.state.allShops.length}</span>:(null)}
                  <Table columns={this.columns} scroll={{ x: true }} dataSource={this.state.allShops} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
