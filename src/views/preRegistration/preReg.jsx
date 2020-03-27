import React from "react";
import Axios from "axios";
import { Radio } from 'antd';
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import { Avatar, Table, Tag } from 'antd';
import moment from 'moment-timezone';


class PreReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewShopModalVisibility: false,
      showActions: false,
      preRegistraion: [],
      filter: {
        district: 'all'
      }
    };
  }

  columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: '_id',
      render: name => <span>{name}</span>,
    },
    {
      title: 'Mobile',
      dataIndex: 'mobileNumber',
      key: '_id',
      render: mobileNumber => <span>{mobileNumber}</span>,
    },
    {
      title: 'Pincode',
      dataIndex: 'pincode',
      key: '_id',
      render: pincode => <span>{pincode}</span>,
    },
    {
      title: 'District',
      dataIndex: 'district',
      key: '_id',
      render: district => <span>{district}</span>,
    },
    {
      title: 'State',
      dataIndex: 'pincode',
      key: '_id',
      render: state => <span>{state}</span>,
    },
    {
      title: 'Offer',
      dataIndex: 'offer',
      key: '_id',
      render: offer => <span>{offer.title}</span>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: '_id',
      render: email => <span>{email?email:'N/A'}</span>,
    }
  ]

  componentDidMount() {
    Axios.get(process.env.REACT_APP_API_URL + "/pre-registraion")
      .then(({ data }) => {
        if (data.status) {
          this.setState({ preRegistraion: data.allPreRegs });
        } else {
          console.log("no preRegistraion found");
        }
      })
      .catch(err => {
        console.log(`catch`, err);
      });
  }
  callApiOnFilterChange = ()=> {
    let filterObj = this.state.filter, queryStr = ``;
    Object.keys(filterObj).map(key=> queryStr += `${key}=${filterObj[key]}`)

    Axios.get(process.env.REACT_APP_API_URL + "/pre-registraion?" + queryStr)
      .then(({ data }) => {
        if (data.status) {
          this.setState({ preRegistraion: data.allPreRegs });
        } else {
          console.log("no preRegistraion found");
        }
      })
      .catch(err => {
        console.log(`catch`, err);
      });
  }
  handleFilterChange = (e, type) => {
    const value = e.target.value;
    const filter = this.state.filter;
    filter[type] = value;
    this.setState({filter});
    this.callApiOnFilterChange();
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Pre Registrations</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className='df jcsb'>
                    <div className='m-2'>
                      {this.state.preRegistraion.length ? (
                        <span className="ml-1 desc">
                          Total Registrations: {this.state.preRegistraion.length}
                        </span>
                      ) : null}
                    </div>
                    <div className='m-2'>
                    <Radio.Group value={this.state.filter.district} onChange={(e)=>this.handleFilterChange(e, 'district')}>
                      <Radio.Button value="all">All</Radio.Button>
                      <Radio.Button value="Patna">Patna</Radio.Button>
                      <Radio.Button value="Jaipur">Jaipur</Radio.Button>
                    </Radio.Group>
                    </div>

                  </div>
                  <Table  columns={this.columns} dataSource={this.state.preRegistraion} />
                  {/* {this.state.preRegistraion.length ? (
                    <Table responsive>
                      <thead className="text-primary">
                        <tr className="ta">
                          <th>Name</th>
                          <th>Mobile Number</th>
                          <th>Pincode</th>
                          <th>District</th>
                          <th>State</th>
                          <th>Offer</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.preRegistraion.map(user => (
                          <tr className="ta">
                            <th className="tal">{user.fullName}</th>
                            <td>{user.mobileNumber}</td>
                            <td>{user.pincode}</td>
                            <td>{user.district}</td>
                            <td>{user.state}</td>
                            <td>{user.offer.title}</td>
                            <td>{user.email ? user.email : "N/A"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : (
                    <span>Currenty there are no registrations yet</span>
                  )} */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default PreReg;
