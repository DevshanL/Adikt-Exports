import React, { Component } from "react";
import axios from "../axiosConfig";
import Swal from 'sweetalert2';
import Footer from "./Footer";

export default class HomePosted extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exportDetails: [],
    };
  }

  componentDidMount() {
    this.retriveExportDetails();
  }

  retriveExportDetails() {
    axios.get("http://localhost:8000/export-details").then((res) => {
      console.log(res.data);
      if (res.data.success) {
        this.setState({
          exportDetails: res.data.existingExportDetails,
        });
        console.log(this.state.exportDetails);
      }
    });
  }
  //filter data
  filterData(exportDetails, searchKey) {
    const result = exportDetails.filter(
      (exportDetails) =>
        exportDetails.ProductID.toLowerCase().includes(searchKey) ||
        exportDetails.ShipmentID.toLowerCase().includes(searchKey)
    );
    this.setState({ exportDetails: result });
  }
  //Search function
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/export-details").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingexportDetails, searchKey);
      }
    });
  };
  goToEdit = (recordId) => {
    this.props.history.push({
      pathname: `/edit/${recordId}`,
    });
  };

  goToDelete = (recordId) => {
    axios.delete(`/export-details/delete/${recordId}`).then((res) => {
      if (res.data.success) {
        Swal.fire('Deleted','Deleted Successfully','success')
        this.retriveExportDetails();
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
                    ED Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    class="nav-link"
                    href=""
                  >
                    {" "}
                    &#62; Export Details <span class="sr-only">
                      (current)
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h4>All Export Details</h4>
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  name="SearchQuery"
                  onChange={this.handleSearchArea}>

                  </input>
              </div>
            </div>
          </div>
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <table className="table">
                <caption>
                  <a href="/add">
                    <button
                      className="btn btn-success"
                      type="button"
                      style={{ marginTop: "15px" }}
                    >
                      Add Export Details
                    </button>
                  </a>
                  
                </caption>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ProductID</th>
                    <th scope="col">ShipmentID</th>
                    <th scope="col">Date</th>
                    <th scope="col">UnitPrice</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Type</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.exportDetails.map((exportDetails, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <a
                          href={`/post/${exportDetails._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {exportDetails.ProductID}
                        </a>
                      </td>

                      <td>{exportDetails.ShipmentID.substring(0, 7)}</td>
                      <td>{exportDetails.Date}</td>
                      <td>{exportDetails.UnitPrice}</td>
                      <td>{exportDetails.Qty}</td>
                      <td>{exportDetails.Type}</td>
                      <td>{exportDetails.Description}</td>

                      <td>
                        <a
                          className="btn btn-warning"
                          href="#"
                          onClick={() => this.goToEdit(exportDetails._id)}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a
                          className="btn btn-danger"
                          href="#"
                          onClick={() => this.goToDelete(exportDetails._id)}
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
