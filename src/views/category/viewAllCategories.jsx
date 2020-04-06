import React from "react";
import Axios from "axios";
import moment from "moment-timezone";
import { Radio, message, Table, Select  } from "antd";
import { Row, Col, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Form, Input } from "reactstrap";

const { Option } = Select;

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showActions: false,
      allCategories: [],
      allSubCategories: [],
      addNewCategoryModalVisibility: false,
      addNewSubCategoryModalVisibility: false,
      newCategory: {
        name: "",
        subCategoies: []
      },
      newSubCategory: {
        name: "",
        categoies: []
      },
      errorMessage: "",
    };
  }

  categoriesColumns = [
    {
      title: "Categories",
      dataIndex: "name",
      key: "_id",
      render: (name) => <span>{name}</span>,
    },
  ];

  subCategoriesColumns = [
    {
      title: "Sub Categories",
      dataIndex: "name",
      key: "_id",
      render: (name) => <span>{name}</span>,
    },
  ];

  componentDidMount() {
    this.getAllCategories();
    this.getAllSubCategories();
  }
  
  getAllCategories = () => {
    Axios.get(process.env.REACT_APP_API_URL + "/category")
    .then(({ data }) => {
      if (data.status) {
        this.setState({ allCategories: data.allCategories });
      } else {
        console.log("no category found");
      }
    })
    .catch((err) => {
      console.log(`catch`, err);
    });
  }
  getAllSubCategories = () => {
   Axios.get(process.env.REACT_APP_API_URL + "/sub-category")
    .then(({ data }) => {
      if (data.status) {
        console.log(`sub categories`, data)
        this.setState({ allSubCategories: data.allSubCategories });
      } else {
        console.log("no subcategory found");
      }
    })
    .catch((err) => {
      console.log(`catch`, err);
    }); 
  }

  renderAddNewCategoryModal = () => (
    <Modal isOpen={this.state.addNewCategoryModalVisibility} toggle={this.toggleAddNewCategory} >
      <ModalHeader toggle={this.toggleAddNewCategory}> Add New Category </ModalHeader>
      <ModalBody>
        <Form>
          <Row className="df jcc">
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Category Name</label>
                <Input placeholder="Enter Category Name" value={this.state.newCategory.name} onChange={(e) => this.handleOnChange(e, "name")} type="text" />
              </FormGroup>
            </Col>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Select Sub-Category</label>
                <Select mode="multiple" style={{ width: "100%" }} placeholder="Select Sub Category" onSelect={(e)=>this.handleOnSelect(e, 'subCategoies')}>
                  {this.state.allSubCategories.map(sub=><Option key={sub.name}>{sub.name}</Option>)}}
                </Select>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        {this.state.errorMessage ? (
          <span className="mr-3 text-danger">{this.state.errorMessage}</span>
        ) : null}
        <Button
          id="save-btn"
          color="primary"
          onClick={this.handleOnAddNewCategorySave}
        >
          Add
        </Button>
        <Button color="secondary" onClick={this.toggleAddNewCategory}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );

  renderAddNewSubCategoryModal = () => (
    <Modal isOpen={this.state.addNewSubCategoryModalVisibility} toggle={this.toggleAddNewSubCategory} >
      <ModalHeader toggle={this.toggleAddNewSubCategory}> Add New Sub Category </ModalHeader>
      <ModalBody>
        <Form>
          <Row className="df jcc">
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Sub Category Name</label>
                <Input placeholder="Enter Sub Category Name" value={this.state.newSubCategory.name} onChange={(e) => this.handleOnChange(e, "name")} type="text" />
              </FormGroup>
            </Col>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Select Sub-Category</label>
                <Select value={this.state.newSubCategory.categories} mode={'multiple'} style={{ width: "100%" }} placeholder="Select Sub Category" onSelect={(e)=>this.handleOnSelect(e, 'categoies')}>
                  {this.state.allSubCategories.map(sub=><Option key={sub.name}>{sub.name}</Option>)}}
                </Select>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        {this.state.errorMessage ? (
          <span className="mr-3 text-danger">{this.state.errorMessage}</span>
        ) : null}
        <Button
          id="save-btn"
          color="primary"
          onClick={this.handleOnAddNewCategorySave}
        >
          Add
        </Button>
        <Button color="secondary" onClick={this.toggleAddNewSubCategory}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );

  toggleAddNewCategory = () => this.setState({ addNewCategoryModalVisibility: !this.state.addNewCategoryModalVisibility, errorMessage: `` });

  toggleAddNewSubCategory = () => this.setState({ addNewSubCategoryModalVisibility: !this.state.addNewSubCategoryModalVisibility, errorMessage: `` });

  handleOnChange = (e, key) => {
    let { newCategory } = this.state;
    newCategory[key] = e.target.value;
    this.setState({ newCategory });
  };
  handleOnSelect = (e, key) => {
    let { newCategory } = this.state;
    newCategory[key] = e;
    this.setState({ newCategory });
  }


  handleOnAddNewCategorySave = () => {
    let { newCategory, errorMessage } = this.state;
    if (!newCategory.name)
      this.setState({ errorMessage: "Invalid Category Name" });
    else if (!errorMessage) {
      Axios.post(process.env.REACT_APP_API_URL + "/category", newCategory)
        .then(({ data }) => {
          if (!data.status) {
            this.setState({ errorMessage: data.errorMessage });
          } else {
            message.success(`New Category Added Successfully`);
            this.setState({
              errorMessage: ``,
              addNewCategoryModalVisibility: false,
            });
          }
        })
        .catch((er) => {
          this.setState({ errorMessage: `Something went wrong` });
        });
    }
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6">
              <Button color="primary" onClick={this.toggleAddNewCategory}>
                Add New Category
              </Button>
              <Row>
                <Col className="pr-1" md={12}>
                  <Table columns={this.categoriesColumns} dataSource={this.state.allCategories} />
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <Button color="primary" onClick={this.toggleAddNewSubCategory}>
                Add New Sub Category
              </Button>
              <Row>
                <Col className="pr-1" md={12}>
                  <Table columns={this.subCategoriesColumns} dataSource={this.state.allSubCategories} />
                </Col>
              </Row>
            </Col>
            {this.renderAddNewCategoryModal()}
            {this.renderAddNewSubCategoryModal()}
          </Row>
        </div>
      </>
    );
  }
}

export default Categories;
