import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBContainer } from "mdbreact";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover() {
    this.setState((prevState) => ({ isHovered: !prevState.isHovered }));
  }
  render() {
    return (
      <MDBContainer className="mt-2">
        <MDBCard>
          <MDBCardBody
            className="text-center"
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          >
            {this.state.isHovered ? (
              <p> {this.props.pass.update_text} </p>
            ) : (
              <p> {this.props.pass.update_date}</p>
            )}
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}
export default Panel;
