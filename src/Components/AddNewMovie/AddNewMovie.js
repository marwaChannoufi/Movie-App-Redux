import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import ModalComp from '../Modal/Modal';

class AddNewMovie extends Component {
  state = {
    isShow: false
  };
  toggle = () => this.setState({ isShow: !this.state.isShow });
  render() {
    return (
      <>
        <Card style={{ width: '20rem' }} onClick={this.toggle}>
          <CardImg src='http://pngimg.com/uploads/plus/plus_PNG106.png'  />
        </Card>
        <ModalComp
          isOpen={this.state.isShow}
          toggle={this.toggle}
          isEdit={false}
          addNewMovie={this.props.addNewMovie}
        />
      </>
    );
  }
}

export default AddNewMovie;