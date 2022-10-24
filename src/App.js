import React, { Component } from "react";
import "./App.css";

import AddProduct from "./components/AddProduct";
import ProductItem from "./components/ProductItem";
import Modal from "./components/Modal"

const allProduct = [
  {
    name: "IPhone 14 pro",
    price: 2000,
  },
  {
    name: "Samsung Galaxy S22",
    price: 1700,
  },
  {
    name: "Xiaomi MI 12 ultra",
    price: 1200,
  },
  {
    name: "Huawei MatePad 5",
    price: 1800  },
  {
    name: "Google Pixel 8",
    price: 1500,
  },
];

localStorage.setItem("allProduct", JSON.stringify(allProduct));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allProduct: JSON.parse(localStorage.getItem("allProduct")),
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentWillMount() {
    const allProduct = this.getProduct();
    this.setState({ allProduct });
  }

  getProduct() {
    return this.state.allProduct;
  }

  onAdd(name, price) {
    //console.log(name, price)
    const allProduct = this.getProduct();
    allProduct.push({
      name,
      price,
    });

    this.setState({ allProduct });
  }

  onDelete(name) {
    const allProduct = this.getProduct();

    const filteredIndianFoods = allProduct.filter((item) => {
      return item.name !== name;
    });

    this.setState({ allProduct: filteredIndianFoods });
  }

  onEditSubmit(name, price, originalName) {
    let allProduct = this.getProduct();

    allProduct = allProduct.map((item) => {
      if (item.name === originalName) {
        item.name = name;
        item.price = price;
      }

      return item;
    });

    this.setState({ allProduct });
  }

  render() {
    return (
      <div className="App container">
        <h1>Crud App </h1>

        <AddProduct onAdd={this.onAdd} />
        <Modal/>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allProduct.map((item , index) => {
              return (
                <ProductItem
                  key={index}
                  item={item}
                  index={index}
                  onDelete={this.onDelete}
                  onEditSubmit={this.onEditSubmit}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
