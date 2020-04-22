import React from "react";
import Axios from "axios";
import moment from "moment-timezone";
import { Radio, message, Table, Select, Tag  } from "antd";
import { Row, Col, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Form, Input } from "reactstrap";
import CookieHandler from '../../utils/cookieHandler';

import './setting.css';

const { Option } = Select;

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showActions: false,
      allCategories: [],
      allSubCategories: [],
      allStoreTypes: [],
      allBrands: [],
      allRegions: [],
      addNewCategoryModalVisibility: false,
      addNewSubCategoryModalVisibility: false,
      addNewBrandModalVisibility: false,
      addNewStoreTypeModalVisibility: false,
      editCategoryModalVisibility: false,
      newCategory: {
        name: "",
        subCategories: [],
        regionId: []
      },
      currentCategory: {
        name: "",
        subCategories: [],
        regionId: []
      },
      newSubCategory: {
        name: "",
        categoies: []
      },
      newBrand:{
        name: '',
        category: '',
        subCategory: ''
      },
      newStoreType: {
        name: ''
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
      render: (sub) => <span>{sub.map(single=><Tag>{single.name}</Tag>)}</span>,
    },
    {
      title: "Regions",
      dataIndex: "regionId",
      key: "_id",
      render: (regions) => <span>{regions.length?regions.map(region=><Tag>{region.name}</Tag>):'N/A'}</span>,
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (_id)=> <span onClick={()=>this.toggleEditCategory(_id)} className='cp op8 t-text'>Edit</span>
    }
  ];

  subCategoriesColumns = [
    {
      title: "Sub Categories",
      dataIndex: "name",
      key: "_id",
      render: (name) => <span>{name}</span>,
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
      title: "Brand Name",
      dataIndex: "name",
      key: "_id",
      render: (name) => <span>{name}</span>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "_id",
      render: (cat) => <span>{cat}</span>,
    },
    {
      title: "Sub Category",
      dataIndex: "subCategory",
      key: "_id",
      render: (sub) => <span>{sub}</span>,
    }
  ];

  componentDidMount() {
    this.getAllCategories();
    this.getAllSubCategories();
    this.getAllStoreType();
    this.getAllBrands();
    this.getAllRegions();
  }
  
  getAllCategories = () => {
    let token = JSON.parse(CookieHandler.readCookie('token'));
    Axios.get(process.env.REACT_APP_API_URL + "/category", {
      headers: {
        token
      }
    })
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
  getSingleCategoryById = (categoryId) => {
    let token = JSON.parse(CookieHandler.readCookie('token'));
    let url = process.env.REACT_APP_API_URL + '/category/' + categoryId;
    return Axios.get(url, {
      headers: {
        token
      }
    }).then(({data})=>{
      return data.data;
    }).catch(ex=>{
      if(ex.response && ex.response.status == 401){
        message.info('Session Expired!, Please Login Again.')
      }else {
        message.error(`Something went wrong`);
      }
    })
  } 
  getAllRegions = () => {
    let token = JSON.parse(CookieHandler.readCookie('token'));
    Axios.get(process.env.REACT_APP_API_URL + '/region', {
      headers: {
        token
      }
    }).then(({data})=>{
      let {allRegions} = this.state;
      allRegions = data.data;
      this.setState({allRegions})
    }).catch(ex=>{
      if(ex.response && ex.response.status == 401){
        message.info('Session Expired!, Please Login Again.')
      }else {
        message.error(`Something went wrong`);
      }
    })
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
  getAllStoreType = () => {
   Axios.get(process.env.REACT_APP_API_URL + "/store-type")
    .then(({ data }) => {
      if (data.status) {
        console.log(`allStoreTypes`, data)
        this.setState({ allStoreTypes: data.allStoreTypes });
      } else {
        console.log("no Store Type found");
      }
    })
    .catch((err) => {
      console.log(`catch`, err)
;    }); 
  }

  getAllBrands = () => {
    Axios.get(process.env.REACT_APP_API_URL + "/brand")
     .then(({ data }) => {
       if (data.status) {
         console.log(`allBrands`, data)
         this.setState({ allBrands: data.allBrands });
       } else {
         console.log("no Store Type found");
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
                <label htmlFor="userName">Select Sub Categories</label>
                <Select mode="tags" tokenSeparators={[',']} style={{ width: "100%" }} placeholder="Select Sub Category" onDeselect={(e)=>this.handleOnSelect(e, 'category', 'subCategories', 'add')} onSelect={(e)=>this.handleOnSelect(e, 'category', 'subCategories', 'add')}>
                  {this.state.allSubCategories.map(sub=><Option key={sub._id}>{sub.name}</Option>)}}
                </Select>
              </FormGroup>
            </Col>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Select Regions</label>
                <Select mode="tags" tokenSeparators={[',']} style={{ width: "100%" }} placeholder="Select Regions" onDeselect={(e)=>this.handleOnSelect(e, 'category', 'regionId', 'add')} onSelect={(e)=>this.handleOnSelect(e, 'category', 'regionId', 'add')}>
                  {this.state.allRegions.map(region=><Option key={region._id}>{region.name}</Option>)}}
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
                <label htmlFor="userName">Select Category</label>
                <Select mode="tags" tokenSeparators={[',']}  value={this.state.newSubCategory.categories} style={{ width: "100%" }} placeholder="Select Sub Category" onDeselect={(e)=>this.handleOnSelect(e, 'subCategory', 'categoies', 'add')} onSelect={(e)=>this.handleOnSelect(e, 'subCategory', 'categoies', 'add')}>
                  {this.state.allCategories.map(sub=><Option key={sub.name}>{sub.name}</Option>)}
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
          onClick={this.handleOnAddNewSubCategorySave}
        >
          Add
        </Button>
        <Button color="secondary" onClick={this.toggleAddNewSubCategory}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );

  renderAddNewStoreType = () => (
    <Modal isOpen={this.state.addNewStoreTypeModalVisibility} toggle={this.toggleAddNewStoreType} >
      <ModalHeader toggle={this.toggleAddNewStoreType}> Add New Sub Category </ModalHeader>
      <ModalBody>
        <Form>
          <Row className="df jcc">
            <Col className="pl-1" md="10">
              <FormGroup>
                <label >Store Type Name</label>
                <Input placeholder="Enter Store Type Name" value={this.state.newStoreType.name} onChange={(e) => this.handleOnChange(e, 'storeType', "name")} type="text" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        { this.state.errorMessage ? ( <span className="mr-3 text-danger">{this.state.errorMessage}</span> ) : null }
        <Button id="save-btn" color="primary" onClick={this.handleOnAddNewStoreType} > Add </Button>
        <Button color="secondary" onClick={this.toggleAddNewStoreType}> Cancel </Button>
      </ModalFooter>
    </Modal>
  );

  renderAddNewBrand = () => (
    <Modal isOpen={this.state.addNewBrandModalVisibility} toggle={this.toggleAddNewBrand} >
      <ModalHeader toggle={this.toggleAddNewBrand}> Add New Sub Category </ModalHeader>
      <ModalBody>
        <Form>
          <Row className="df jcc">
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Name</label>
                <Input placeholder="Enter Brand Name" value={this.state.newBrand.name} onChange={(e) => this.handleOnChange(e, 'brand', "name")} type="text" />
              </FormGroup>
            </Col>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Name</label>
                <Input placeholder="Enter Brand Name" value={this.state.newBrand.name} onChange={(e) => this.handleOnChange(e, 'brand', "name")} type="text" />
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
          onClick={this.handleOnAddNewStoreType}
        >
          Add
        </Button>
        <Button color="secondary" onClick={this.toggleAddNewBrand}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );

  toggleAddNewCategory = () => this.setState({ addNewCategoryModalVisibility: !this.state.addNewCategoryModalVisibility, errorMessage: `` });
  toggleEditCategory = (selectedCategoryId) => {
    if(selectedCategoryId){
      let {currentCategory} = this.state;
      this.getSingleCategoryById(selectedCategoryId).then( singleCategory=>{
        this.setState({ currentCategory: singleCategory });
      });
    }
    this.setState({ editCategoryModalVisibility: !this.state.editCategoryModalVisibility, errorMessage: `` });
  }
  
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
    }else if (type === 'storeType') {
      let { newStoreType } = this.state;
      newStoreType[key] = e.target.value;
      this.setState({newStoreType});
    }
  };

  handleOnSelect = (e, type, key, from) => {
    if(type === 'category'){
      if(from == 'add'){
        let { newCategory } = this.state;
        let index = newCategory[key].indexOf(e);
        
        if(index == -1) newCategory[key].push(e);
        else newCategory[key].splice(index, 1);
        
        this.setState({ newCategory });
      }else if(from == 'edit'){
        console.log(e, type, key, from)
        // let { currentCategory } = this.state;
        // let index = currentCategory[key].indexOf(e);
        
        // if(index == -1) currentCategory[key].push(e);
        // else currentCategory[key].splice(index, 1);
        // this.setState({ currentCategory });

      }

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

  handleOnAddNewStoreType = () => {
    let { newStoreType, errorMessage } = this.state;
    if (!newStoreType.name)
      this.setState({ errorMessage: "Invalid Store Type" });
    else if (!errorMessage) {
      Axios.post(process.env.REACT_APP_API_URL + "/store-type", newStoreType)
        .then(({ data }) => {
          if (!data.status) {
            this.setState({ errorMessage: data.errorMessage });
          } else {
            message.success(`New Store Type Added Successfully`);
            this.setState({
              errorMessage: ``,
              addNewStoreTypeModalVisibility: false,
            });
          }
        })
        .catch((er) => {
          this.setState({ errorMessage: `Something went wrong` });
        });
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Button color="primary" onClick={this.toggleAddNewCategory}>
                Add New Category
              </Button>
              <Row>
                <Col className="pr-1" md={12}>
                  <Table columns={this.categoriesColumns}  loading={this.state.allCategories.length?false:true} dataSource={this.state.allCategories} />
                </Col>
              </Row>
            </Col>
            {this.renderAddNewCategoryModal()}
            {this.renderAddNewSubCategoryModal()}
            {this.renderEditCategoryModal()}
          </Row>
          <Row>
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
            <Col md="6">
              <Button color="primary" onClick={this.toggleAddNewStoreType}>
                Add New Store Type
              </Button>
              <Row>
                <Col className="pr-1" md={12}>
                  <Table columns={this.storeTypeColumns} dataSource={this.state.allStoreTypes} />
                </Col>
              </Row>
            </Col>
            <Col md="12">
              <Button color="primary" onClick={this.toggleAddNewBrand}>
                Add New Brand
              </Button>
              <Row>
                <Col className="pr-1" md={12}>
                  <Table columns={this.brandColumns} dataSource={this.state.allBrands} />
                </Col>
              </Row>
            </Col>
            {this.renderAddNewBrand()}
            {this.renderAddNewStoreType()}
          </Row>
        </div>
      </>
    );
  }
  searchFilter = (input, option) => {
    input = input.toLowerCase();
    if(!Array.isArray(option.props.children)) {
      if(typeof option.props.children === 'string') {
        return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    }
  }
  renderEditCategoryModal = () => (
    <Modal isOpen={this.state.editCategoryModalVisibility} toggle={this.toggleEditCategory} >
      <ModalHeader toggle={this.toggleEditCategory}> Edit Category </ModalHeader>
      <ModalBody>
        <Form>
          <Row className="df jcc">
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Category Name</label>
                <Input placeholder="Enter Category Name" value={this.state.currentCategory.name} onChange={(e) => this.handleOnChange(e, 'category', "name")} type="text" />
              </FormGroup>
            </Col>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Select Sub Categories</label>
                <Select mode="multiple" defaultValue={this.state.currentCategory.subCategories.map(sCat=>sCat._id)} style={{ width: "100%" }} placeholder="Select Sub Category"
                 onSelect={(value)=>this.handleOnSelect(value, 'category', 'subCategories', 'edit')}
                >
                  {this.state.allSubCategories.map(sub=><Option key={sub._id} value={sub._id}>{sub.name}</Option>)}}
                </Select>
              </FormGroup>
            </Col>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Select Regions</label>
                <Select mode="tags" value={this.state.currentCategory.regionId.map(region=>region._id)} tokenSeparators={[',']} style={{ width: "100%" }} placeholder="Select Regions" onDeselect={(e)=>this.handleOnSelect(e, 'category', 'regionId', 'edit')} onSelect={(e)=>this.handleOnSelect(e, 'category', 'regionId', 'edit')}>
                  {this.state.allRegions.map(region=><Option key={region._id}>{region.name}</Option>)}}
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
        <Button id="save-btn" color="primary" onClick={this.toggleEditCategory} > Add </Button>
        <Button color="secondary" onClick={this.toggleEditCategory}> Cancel </Button>
      </ModalFooter>
    </Modal>
  );

}