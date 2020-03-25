import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import Axios from "axios";
import moment from "moment-timezone";
import { Avatar } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Redirect, Link } from "react-router-dom";

class PreReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewShopModalVisibility: false,
      showActions: false,
      preRegistraion: [],
    };
  }
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

  toggleAddNewShopModal = () =>
    this.setState({
      addNewShopModalVisibility: !this.state.addNewShopModalVisibility
    });
  handleAddNewShop = (e, type) => {
    if (type == "addNewShop") {
      window.location.pathname = "admin/shops/add-new";
      // this.toggleAddNewShopModal();
    }
  };
  handleOnAddProductClicked = shopId => <Link to="/login" />;

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Pre Registraions</CardTitle>
                </CardHeader>
                <CardBody>
                  <div>
                    {this.state.preRegistraion.length ? (
                      <span className="ml-1 desc">
                        Total Registraions: {this.state.preRegistraion.length}
                      </span>
                    ) : null}
                  </div>
                  {this.state.preRegistraion.length ? (
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
                    <span>Currenty there are no Registraions yet</span>
                  )}
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
