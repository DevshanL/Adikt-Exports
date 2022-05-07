import React, { Component } from "react";
import axios from "../axiosConfig";
import Swal from "sweetalert2";
import Footer from "./Footer";

export default class HomePosted extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buyerRegister: [],
    };
  }

  componentDidMount() {
    this.retriveBuyerRegister();
  }

  retriveBuyerRegister() {
    axios.get("http://localhost:8000/buyer-register").then((res) => {
      console.log(res.data);
      if (res.data.success) {
        this.setState({
          buyerRegister: res.data.existingBuyerRegister,
        });
        console.log(this.state.buyerRegister);
      }
    });
  }
  //filter data
  filterData(buyerRegister, searchKey) {
    const result = buyerRegister.filter(
      (buyerRegister) =>
        buyerRegister.Name.toLowerCase().includes(searchKey) ||
        buyerRegister.BuyerID.toLowerCase().includes(searchKey)
    );
    this.setState({ buyerRegister: result });
  }
  //Search function
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/buyer-register").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingBuyerRegister, searchKey);
      }
    });
  };
  goToEdit = (recordId) => {
    this.props.history.push({
      pathname: `/editPostbr/${recordId}`,
    });
  };

  goToDelete = (recordId) => {
    axios.delete(`/buyer-register/delete/${recordId}`).then((res) => {
      if (res.data.success) {
        Swal.fire("Deleted", "Deleted Successfully", "success");
        this.retriveBuyerRegister();
      }
    });
  };
  render() {
    return (
      //component organizer
      <div id="wrapper" className="toggled">
        <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
          <div className="container-fluid"></div>

          {/* custom navigation        */}
          <nav
            class="navbar navbar-expand-lg rounded-3"
            style={{ backgroundColor: "#006a4e" }}
          >
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    class="nav-link"
                    href="/dash"
                  >
                    BR Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    class="nav-link"
                    href=""
                  >
                    {" "}
                    &#62; Buyer Registration{" "}
                    <span class="sr-only">(current)</span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h4> Buyer Registration</h4>
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  name="SearchQuery"
                  onChange={this.handleSearchArea}
                ></input>
              </div>
            </div>
          </div>
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <table className="table">
                <caption>
                  <a href="/addPostbr">
                    <button
                      className="btn btn-success"
                      type="button"
                      style={{ marginTop: "15px" }}
                    >
                      Add Buyer Registration
                    </button>
                  </a>
                </caption>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col"> BuyerID</th>
                    <th scope="col"> Name</th>
                    <th scope="col">Nic</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col">ContactNumber</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.buyerRegister.map((buyerRegister, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <a
                          href={`/post/${buyerRegister._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {buyerRegister.BuyerID.substring(0, 7)}
                        </a>
                      </td>

                      <td>{buyerRegister.Name}</td>
                     
                      <td>{buyerRegister.NIC}</td>
                      <td>{buyerRegister.Address}</td>
                      <td>{buyerRegister.Email}</td>
                      <td>{buyerRegister.ContactNumber}</td>

                      <td>
                        <a
                          className="btn btn-warning"
                          href="#"
                          onClick={() => this.goToEdit(buyerRegister._id)}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a
                          className="btn btn-danger"
                          href="#"
                          onClick={() => this.goToDelete(buyerRegister._id)}
                        >
                          <i className="fas fa-trash-alt"></i>&nbsp;Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}
