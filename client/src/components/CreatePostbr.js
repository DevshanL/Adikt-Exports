import React, { Component } from "react";
import axios from "../axiosConfig";
import Footer from "./Footer";
import Swal from 'sweetalert2';

class CreatePostbr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      NIC: "",
      //Country: "",
      Address: "",
      Email: "",
      ContactNumber: "",
      
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
    let NameError = "";
    let NICError = "";
    //let CountryError = "";
    let AddressError = "";
    let EmailError = "";
    let ContactNumberError = "";
    

    if (!this.state.Name) {
      NameError = "*Name is Required!";
    }

    if (!this.state.NIC) {
      NICError = "*NIC  is Required!";
    }
    //if (!this.state.Country) {
      //CountryError = "*Country is Required";
    //}
    if (!this.state.Address) {
      AddressError = "*Address is Required";
    }

    if (!this.state.Email) {
      EmailError = "*Email is Required";
    }

    if (!this.state.ContactNumber) {
      ContactNumberError = "*ContactNumber is Required";
    }

   

    if (
      NameError ||
      NICError ||
      //CountryError ||
      AddressError ||
      EmailError ||
      ContactNumberError 
      
    ) {
      this.setState({
        NameError,
        NICError,
        //CountryError,
        AddressError,
        EmailError,
        ContactNumberError,
        
      });
      return false;
    }

    return true;
  };
  //onsubmit method
  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    const { Name, NIC, Address, Email, ContactNumber} =
      this.state;

    const data = {
      Name: Name,
      NIC: NIC,
      //Country: Country,
      Address: Address,
      Email: Email,
      ContactNumber: ContactNumber,
    };
    //if validation succussesfully pass
    if (isValid) {
      console.log(data);
      //Put data to back end using the Http link
      axios.post("/buyer-register/save", data).then((res) => {
        if (res.data.success) {
          Swal.fire('Added','Added Successfully','success')
         
          this.setState({
            Name: "",
            NIC: "",
            //Country: "",
            Address: "",
            Email: "",
            ContactNumber: "",
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
                Create Buyer Registration
              </h1>
              <form className="needs-validation" noValidate>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    placeholder="Enter Name"
                    value={this.state.Name}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.NameError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>NIC</label>
                  <input
                    type="text"
                    className="form-control"
                    name="NIC"
                    placeholder="NIC"
                    value={this.state.NIC}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.NICError}
                  </div>
                </div>

               

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Address"
                    placeholder="Enter Address"
                    value={this.state.Address}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.AddressError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Email</label>
                  <input
                    type="text"
                    min="0"
                    max="100"
                    step="1"
                    className="form-control"
                    name="Email"
                    placeholder="Enter Email"
                    value={this.state.Email}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.EmailError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>ContactNumber</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ContactNumber"
                    placeholder="Enter ContactNumber"
                    value={this.state.ContactNumber}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.ContactNumberError}
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

export default CreatePostbr;
