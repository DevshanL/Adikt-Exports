import React, { Component } from "react";
import axios from "../axiosConfig";
import Footer from "./Footer";
import Swal from "sweetalert2";

class EditPostbr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BuyerID: "",
      Name: "",
      Nic: "",
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

  //validation
  validate = () => {
    let BuyerIDError = "";
    let NameError = "";
    let NicError = "";
    //let CountryError = "";
    let AddressError = "";
    let EmailError = "";
    let ContactNumberError = "";

    if (!this.state.BuyerID) {
      BuyerIDError = "*BuyerID is Required!";
    }

    if (!this.state.Name) {
      NameError = "*Name is Required!";
    }

    if (!this.state.NIC) {
      NicError = "*NIC  is Required!";
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
      BuyerIDError ||
      NameError ||
      NicError ||
      //CountryError ||
      AddressError ||
      EmailError ||
      ContactNumberError
    ) {
      this.setState({
        BuyerIDError,
        NameError,
        NicError,
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
    const id = this.props.match.params.id;

    const { BuyerID, Name, Nic, Address, Email, ContactNumber } =
      this.state;

    const data = {
      BuyerID: BuyerID,
      Name: Name,
      Nic: Nic,
      //Country: Country,
      Address: Address,
      Email: Email,
      ContactNumber: ContactNumber,
    };
    //if validation succussesfully pass
    if (isValid) {
      console.log(data);
      //Put data to back end using the Http link
      axios.put(`/buyer-register/update/${id}`, data).then((res) => {
        if (res.data.success) {
          Swal.fire("Updated", "Updated Successfully", "success");

          this.setState({
            BuyerID: "",
            Name: "",
            Nic: "",
            //Country: "",
            Address: "",
            Email: "",
            ContactNumber: "",
          });
        }
      });
    }
  };

  //   onSubmit = (e) =>{
  //     e.preventDefault();
  //     const id = this.props.match.params.id;
  //     const {ProductID,ShipmentID,Date,UnitPrice,Qty,Type,Description} = this.state;
  //     const data ={
  //         ProductID:ProductID,
  //         ShipmentID:ShipmentID,
  //         Date:Date,
  //         UnitPrice:UnitPrice,
  //         Qty:Qty,
  //         Type:Type,
  //         Description:Description
  //     }
  //     console.log(data)

  //     axios.put(`/exportDetails/update/${id}`,data).then((res) =>{
  //         if(res.data.success){
  //             alert("Export Details Updated Successfully")
  //             this.setState(
  //                 {
  //                     ProductID:"",
  //                     ShipmentID:"",
  //                     Date:"",
  //                     UnitPrice : "",
  //                     Qty:"",
  //                     Type : "",
  //                     Description:"",
  //                 }
  //             )
  //         }
  //     })

  // }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/buyer-register/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          BuyerID: res.data.buyerRegister.BuyerID,
          Name: res.data.buyerRegister.Name,
          Nic: res.data.buyerRegister.Nic,
          //Country: res.data.buyerRegister.Country,
          Address: res.data.buyerRegister.Address,
          Email: res.data.buyerRegister.Email,
          ContactNumber: res.data.buyerRegister.ContactNumber,
        });
      }
    });
  }
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="col-md-8 mt-4 mx-auto">
              <h1 className="h3 mb-3 font-weight-nomal">
                Update Buyer Registration
              </h1>
              <form className="needs-validation" noValidate>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>BuyerID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="BuyerID"
                    placeholder="Enter BuyerID"
                    value={this.state.BuyerID}
                    onChange={this.handleInputChange}
                    required
                  
                    readOnly
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.BuyerIDError}
                  </div>
                </div>

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
                  <label style={{ marginBottom: "5px" }}>Nic </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Nic"
                    placeholder="Nic"
                    value={this.state.Nic}
                    onChange={this.handleInputChange}
                    required
                    readOnly
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.NicError}
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
                  &nbsp; Update
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

export default EditPostbr;
