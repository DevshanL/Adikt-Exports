import React, { Component } from "react";
import axios from "../axiosConfig";
import Footer from "./Footer";
import Swal from 'sweetalert2';

class CreatePosted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductID: "",
      ShipmentID: "",
      Date: "",
      UnitPrice: "",
      Qty: "",
      Type: "",
      Description: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleDateInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      Date: value,
    });
  };

  //validation
  validate = () => {
    let ProductIDError = "";
    let ShipmentIDError = "";
    let DateError = "";
    let UnitPriceError = "";
    let QtyError = "";
    let TypeError = "";
    let DescriptionError = "";

    if (!this.state.ProductID) {
      ProductIDError = "*ProductID is Required!";
    }

    if (!this.state.ShipmentID) {
      ShipmentIDError = "*ShipmentID  is Required!";
    }
    if (!this.state.Date) {
      DateError = "*Date is Required";
    }
    if (!this.state.UnitPrice) {
      UnitPriceError = "*UnitPrice is Required";
    }

    if (!this.state.Qty) {
      QtyError = "*Qty is Required";
    }

    if (!this.state.Type) {
      TypeError = "*Type is Required";
    }

    if (!this.state.Description) {
      DescriptionError = "*Description is Required";
    }

    if (
      ProductIDError ||
      ShipmentIDError ||
      DateError ||
      UnitPriceError ||
      QtyError ||
      TypeError ||
      DescriptionError
    ) {
      this.setState({
        ProductIDError,
        ShipmentIDError,
        DateError,
        UnitPriceError,
        QtyError,
        TypeError,
        DescriptionError,
      });
      return false;
    }

    return true;
  };
  //onsubmit method
  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    const { ProductID, ShipmentID, Date, UnitPrice, Qty, Type, Description } =
      this.state;

    const data = {
      ProductID: ProductID,
      ShipmentID: ShipmentID,
      Date: Date,
      UnitPrice: UnitPrice,
      Qty: Qty,
      Type: Type,
      Description: Description,
    };
    //if validation succussesfully pass
    if (isValid) {
      console.log(data);
      //Put data to back end using the Http link
      axios.post("/export-details/save", data).then((res) => {
        if (res.data.success) {
          Swal.fire('Added','Added Successfully','success')
          //alert("Export Details Saved Successfully");
          this.setState({
            ProductID: "",
            ShipmentID: "",
            Date: "",
            UnitPrice: "",
            Qty: "",
            Type: "",
            Description: "",
          });
        }
      });
    }
  };

  /*onSubmit = (e) => {

    e.preventDefault();

    
    const { ProductID, Date, UnitPrice, Qty, Type, Description} =
      this.state;
    const data = {
      ProductID: ProductID,
      // ShipmentID: ShipmentID,
      Date: Date,
      UnitPrice: UnitPrice,
      Qty: Qty,
      Type: Type,
      Description: Description,
    };

    

    
    console.log(data);

    axios.post("/export-details/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          ProductID: "",
          ShipmentID: "",
          Date: "",
          UnitPrice: "",
          Qty: "",
          Type: "",
          Description: "",
        });
      } else {
        alert("Check the deails");
      }
    });
  
}*/

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="col-md-8 mt-4 mx-auto">
              
              <h1 className="h3 mb-3 font-weight-nomal">
                Create Export Details
              </h1>
              <form className="needs-validation" noValidate>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Product ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ProductID"
                    placeholder="Enter ProductID"
                    value={this.state.ProductID}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.ProductIDError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Shipment ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ShipmentID"
                    placeholder="ShipmentID"
                    value={this.state.ShipmentID}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.ShipmentIDError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="requirment1"
                    placeholder="Date"
                    value={this.state.Date}
                    onChange={this.handleDateInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.ShipmentIDError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Unit Price</label>
                  <input
                    type="string"
                    className="form-control"
                    name="UnitPrice"
                    placeholder="Enter UnitPrice"
                    value={this.state.UnitPrice}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.UnitPriceError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Qty</label>
                  <input
                    type="text"
                    min="0"
                    max="100"
                    step="1"
                    className="form-control"
                    name="Qty"
                    placeholder="Enter Qty"
                    value={this.state.Qty}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.QtyError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Type</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Type"
                    placeholder="Enter Type"
                    value={this.state.Type}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.TypeError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Description"
                    placeholder="Enter Description"
                    value={this.state.Description}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.DescriptionError}
                  </div>
                </div>

                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ marginTop: "15px" }}
                  onClick={this.onSubmit}
                >
                  <i className="far fa-check-square"></i>
                  &nbsp; Save
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CreatePosted;
