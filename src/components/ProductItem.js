import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete() {
    const { onDelete, name } = this.props;
    onDelete(name);
  }

  onEdit() {
    this.setState({ isEdit: true });
  }

  onEditSubmit(event) {
    event.preventDefault();
    this.props.onEditSubmit(
      this.nameInput.value,
      this.priceInput.value,
      this.props.name
    );

    this.setState({ isEdit: false });
  }

  render() {
    const { name, price } = this.props.item;
    const index = this.props.index;

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{name}</td>
        <td>{price}</td>
        <button className="btn btn-success" onClick={this.onEdit}>Edit</button>
        <button className="btn btn-danger" onClick={this.onDelete}>Delete</button>
      </tr>
      
    );
  }
}

export default ProductItem;
