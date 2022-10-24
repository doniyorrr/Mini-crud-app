import React, { Component } from 'react';

class AddProduct extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event){
    event.preventDefault();
    this.props.onAdd(this.nameInput.value, this.priceInput.value);
    //console.log(this.nameInput.value, this.priceInput.value);
    this.nameInput.value = '';
    this.priceInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3> Add Product</h3>
        <div className='d-flex'>

        <input className='form-control' placeholder="Name" ref={nameInput => this.nameInput = nameInput} />
        <input className='form-control' placeholder="Price" ref={priceInput => this.priceInput = priceInput} />
        <button className='btn btn-primary'>Add</button>
        </div>

        <hr />
      </form>
  );
 }
}

export default AddProduct;
