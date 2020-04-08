import React from "react";
import Axios from "axios";
import moment from "moment-timezone";
import { Radio, message, Table, Select, Tag  } from "antd";
import { Row, Col, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Form, Input } from "reactstrap";

const { Option } = Select;

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showActions: false,
      allCategories: [],
      allSubCategories: [],
      addNewCategoryModalVisibility: false,
      addNewSubCategoryModalVisibility: false,
      addNewBrandModalVisibility: false,
      addNewStoreTypeModalVisibility: false,
      newCategory: {
        name: "",
        subCategories: []
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
    {
      title: "Sub Categories",
      dataIndex: "subCategories",
      key: "_id",
      render: (sub) => <span>{sub.map(single=>single.name)}</span>,
    }
  ];

  subCategoriesColumns = [
    {
      title: "Sub Categories",
      dataIndex: "name",
      key: "_id",
      render: (name) => <span>{name}</span>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "_id",
      render: (cat) => <span>{cat.name}</span>,
    },
  ];
  
  storeTypeColumns = [
    {
      title: "Store Types",
      dataIndex: "name",
      key: "_id",
      render: (name) => <span>{name}</span>,
    }
  ];
  
  brandColumns = [
    {
      title: "Categories",
      dataIndex: "name",
      key: "_id",
      render: (name) => <span>{name}</span>,
    },
    {
      title: "Sub Categories",
      dataIndex: "subCategories",
      key: "_id",
      render: (sub) => <span>{sub.map(single=>single.name)}</span>,
    }
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
                <Input placeholder="Enter Category Name" value={this.state.newCategory.name} onChange={(e) => this.handleOnChange(e, 'category', "name")} type="text" />
              </FormGroup>
            </Col>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Select Sub-Category</label>
                <Select mode="tags" tokenSeparators={[',']} style={{ width: "100%" }} placeholder="Select Sub Category" onDeselect={(e)=>this.handleOnSelect(e, 'category', 'subCategories')} onSelect={(e)=>this.handleOnSelect(e, 'category', 'subCategories')}>
                  {this.state.allSubCategories.map(sub=><Option key={sub._id}>{sub.name}</Option>)}}
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
        <Button id="save-btn" color="primary" onClick={this.handleOnAddNewCategorySave} > Add </Button>
        <Button color="secondary" onClick={this.toggleAddNewCategory}> Cancel </Button>
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
                <Input placeholder="Enter Sub Category Name" value={this.state.newSubCategory.name} onChange={(e) => this.handleOnChange(e, 'subCategory', "name")} type="text" />
              </FormGroup>
            </Col>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Select Sub-Category</label>
                <Select value={this.state.newSubCategory.categories} mode={'multiple'} style={{ width: "100%" }} placeholder="Select Sub Category" onDeselect={(e)=>this.handleOnSelect(e, 'subCategory', 'categoies')} onSelect={(e)=>this.handleOnSelect(e, 'subCategory', 'categoies')}>
                  {this.state.allSubCategories.map(sub=><Option key={sub.name}>{sub.name}</Option>)}
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
  toggleAddNewStoreType = () => this.setState({ addNewStoreTypeModalVisibility: !this.state.addNewStoreTypeModalVisibility, errorMessage: `` });
  toggleAddNewBrand = () => this.setState({ addNewBrandModalVisibility: !this.state.addNewBrandModalVisibility, errorMessage: `` });

  handleOnChange = (e, type, key) => {
    if(type === 'category'){
      let { newCategory } = this.state;
      newCategory[key] = e.target.value;
      this.setState({ newCategory });
    }else if(type === 'subCategory') {
      let { newSubCategory } = this.state;
      newSubCategory[key] = e.target.value;
      this.setState({ newSubCategory });
    }
  };

  handleOnSelect = (e, type, key) => {
    console.log(e, type, key)
    if(type === 'category'){
      let { newCategory } = this.state;
      let index = newCategory[key].indexOf(e);
      
      if(index == -1) newCategory[key].push(e);
      else newCategory[key].splice(index, 1);
      
      this.setState({ newCategory });
    
    }else if(type === 'subCategory') {
      let { newSubCategory } = this.state;
      let index = newSubCategory[key].indexOf(e);

      if(index === -1) newSubCategory[key].push(e);
      else newSubCategory[key].splice(index, 1);
      
      this.setState({ newSubCategory });
    }
  }

  handleOnAddNewSubCategorySave = () => {
    let { newSubCategory, errorMessage } = this.state;
    if (!newSubCategory.name)
      this.setState({ errorMessage: "Invalid Category Name" });
    else if (!errorMessage) {
      Axios.post(process.env.REACT_APP_API_URL + "/sub-category", newSubCategory)
        .then(({ data }) => {
          if (!data.status) {
            this.setState({ errorMessage: data.errorMessage });
          } else {
            message.success(`New Sub Category Added Successfully`);
            this.setState({
              errorMessage: ``,
              addnewSubCategoryModalVisibility: false,
            });
          }
        })
        .catch((er) => {
          this.setState({ errorMessage: `Something went wrong` });
        });
    }
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
          <Row>
            <Col md="6">
              <Button color="primary" onClick={this.toggleAddNewCategory}>
                Add New Store Type
              </Button>
              <Row>
                <Col className="pr-1" md={12}>
                  <Table columns={this.storeTypeColumns} dataSource={this.state.allCategories} />
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
          </Row>
        </div>
      </>
    );
  }
  }