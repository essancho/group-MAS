import React, { useContext } from "react";
import Card from "react-credit-cards";
import "./PaymentForm.css";
import SupportedCards from "./Cards";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "./utils";
import "react-credit-cards/es/styles-compiled.css";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductContext";

export default class App extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };
  


  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, formData } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form style={{display: "flex", flexDirection: "column", alignItems: "center"}} ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
            <div >
              
              <TextField
                type="tel"
                name="number"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div>
              <TextField
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div>
              <div>
                <TextField
                  type="tel"
                  name="expiry"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div>
                <TextField
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <div className="form-actions">
              <Button onClick={() => {
                localStorage.removeItem("cart");
                
              }} to="/" component={Link}>CONFIRM PURCHASE</Button>
            </div>
          </form>
          
          <hr style={{ margin: "60px 0 30px" }} />
          
        </div>
      </div>
    );
  }
}
