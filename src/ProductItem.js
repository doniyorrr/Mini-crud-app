import React, { Component } from 'react';

class ProductItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      isEdit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete(){
    const{ onDelete, name } = this.props;
    onDelete(name)
  }

  onEdit(){
    this.setState({ isEdit: true});
  }

  onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);

    this.setState({ isEdit: false });
  }

  render() {
    const { name, price } = this.props.item;
    const index = this.props.index

    return (
      <tr>
      <th scope="row">{index + 1}</th>
      <td>{name}</td>
      <td>{price}</td>
      <button onClick={this.onEdit}>Edit</button>
      <button onClick={this.onDelete}>Delete</button>
    </tr>
    // {/* {
    //     this.state.isEdit
    //       ? (
    //         <form onSubmit={this.onEditSubmit}>
    //         <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue = {name} />
    //         <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue = {price} />
    //         <button>Save</button>
    //         </form>
    //       )
    //       : (
    //         // <div>
    //         //   <span>{name}</span>
    //         //   {' | '}
    //         //   <span>{price}</span>
    //         //   {' | '}
    //         //   
    //         //   {' | '}
    //         //   
    //         // </div>
    //         <tr>
    //           <th scope="row">1</th>
    //           <td>{name}</td>
    //           <td>{price}</td>
    //           <button onClick={this.onEdit}>Edit</button>
    //           <button onClick={this.onDelete}>Delete</button>
    //         </tr>
    //       )

    //     } */}

  );
 }
}

export default ProductItem;
