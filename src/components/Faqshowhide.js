import React, { Component } from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBIcon, MDBCardHeader} from "mdbreact";

class CollapsePage extends Component {
state={
  collapseID: "collapse3"
}

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
const { collapseID } = this.state;
    return (
      <MDBContainer>
        <MDBContainer className='md-accordion mt-5'>
          <MDBCard className='mt-3'>
            <MDBCardHeader
              tagClassName='d-flex justify-content-between'
              onClick={() => this.toggleCollapse('collapse1')}
            >
              Collapsible Group Item #1
              <MDBIcon
                icon={collapseID === 'collapse1' ? 'angle-up' : 'angle-down'}
              />
            </MDBCardHeader>
            <MDBCollapse id='collapse1' isOpen={collapseID}>
              <MDBCardBody>
                Pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. 3 wolf moon officia aute, non
                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes
                anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                raw denim aesthetic synth nesciunt you probably haven&apos;t
                heard of them accusamus labore sustainable VHS.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCardHeader
              tagClassName='d-flex justify-content-between'
              onClick={() => this.toggleCollapse('collapse2')}
            >
              Collapsible Group Item #2
              <MDBIcon
                icon={collapseID === 'collapse2' ? 'angle-up' : 'angle-down'}
              />
            </MDBCardHeader>
            <MDBCollapse id='collapse2' isOpen={collapseID}>
              <MDBCardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven&apos;t heard of them accusamus labore sustainable VHS.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCardHeader
              tagClassName='d-flex justify-content-between'
              onClick={() => this.toggleCollapse('collapse3')}
            >
              Collapsible Group Item #3
              <MDBIcon
                icon={collapseID === 'collapse3' ? 'angle-up' : 'angle-down'}
              />
            </MDBCardHeader>
            <MDBCollapse id='collapse3' isOpen={collapseID}>
              <MDBCardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven&apos;t heard of them accusamus labore sustainable VHS.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default CollapsePage;