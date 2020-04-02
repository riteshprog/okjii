import React from "react";
import Axios from "axios";
import { Radio, message } from 'antd';
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Form, Input } from "reactstrap";
import { Avatar, Table, Tag } from 'antd';
import moment from 'moment-timezone';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showActions: false,
      allCategories: [],
      addNewCategoryModalVisibility: false,
      newCategory: {
        name: ''
      },
      errorMessage: ''
    };
  }

  columns = [
    {
      title: 'Categories',
      dataIndex: 'name',
      key: '_id',
      render: name => <span>{name}</span>,
    }
  ]

  componentDidMount() {
    Axios.get(process.env.REACT_APP_API_URL + "/category")
      .then(({ data }) => {
        if (data.status) {
          this.setState({ allCategories: data.allCategories });
        } else {
          console.log("no allCategories found");
        }
      })
      .catch(err => {
        console.log(`catch`, err);
      });
  }

  renderAddNewModal = () => (
    <Modal isOpen={this.state.addNewCategoryModalVisibility} toggle={this.toggleAddNewCategory} >
      <ModalHeader toggle={this.toggleAddNewCategory}>Add New Category</ModalHeader>
      <ModalBody>
        <Form>
          <Row className='df jcc'>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">
                  Category Name
                </label>
                <Input placeholder="Enter Category Name" value={this.state.newCategory.name} onChange={(e)=>this.handleOnChange(e, 'name')} type="text" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
               
      </ModalBody>
      <ModalFooter>
        {this.state.errorMessage?<span className='mr-3 text-danger'>{this.state.errorMessage}</span>:null}
        <Button id='save-btn' color="primary" onClick={this.handleOnAddNewCategorySave}>Add</Button>
        <Button color="secondary" onClick={this.toggleAddNewCategory}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )

  toggleAddNewCategory = () => this.setState({addNewCategoryModalVisibility: !this.state.addNewCategoryModalVisibility, errorMessage: ``});
  
  handleOnChange = (e, key) => {
    let {newCategory} = this.state;
    newCategory[key] = e.target.value;
    this.setState({newCategory});
  }
  
  handleOnAddNewCategorySave = () => {
    let {newCategory, errorMessage} = this.state;
    if(!newCategory.name) this.setState({errorMessage: 'Invalid Category Name'});
    else if(!errorMessage) {
      Axios.post(process.env.REACT_APP_API_URL + '/category', newCategory).then(({data})=>{
        if(!data.status){
          this.setState({errorMessage: data.errorMessage});
        }else {
          message.success(`New Category Added Successfully`);
          this.setState({errorMessage: ``, addNewCategoryModalVisibility: false})
        }
      }).catch((er)=>{
        this.setState({errorMessage: `Something went wrong`})
      })
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Categories</CardTitle>
                </CardHeader>
                <CardBody>
                  <Button color="primary" onClick={this.toggleAddNewCategory}>Add New Category</Button>
                  <Row>
                    <Col className="pr-1" md={12}>
                      <Table  columns={this.columns} dataSource={this.state.allCategories} />  
                    </Col>
                  </Row>
                  
                </CardBody>
              </Card>
            </Col>
            {this.renderAddNewModal()}
          </Row>
        </div>
      </>
    );
  }
}

export default Categories;
