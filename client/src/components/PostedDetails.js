import React, { Component } from "react";
import axios from "axios";

export default class PostedDetails extends Component {
  //Binding event handler method
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  //load data from a remote endpoint
  componentDidMount() {
    const id = this.props.match.params.id;

    //get server side http module to get data to client side Http request
    axios.get(`/export-details/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });

        console.log(this.state.post);
      }
    });
  }

  //gather outputs
  render() {
    const id = this.props.match.params.id;
    const { ProductID, ShipmentID, Date, UnitPrice, Qty, Type, Description } =
      this.state.post;

    return (
      //component organizer
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid"></div>
          {/*<div style={{margineTop:'20px'}}>*/}

          {/* custom navigation        */}
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3">
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
                  <a class="nav-link" href="/dash">
                    Dashboard{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    {" "}
                    &#62;Export Details
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    {" "}
                    &#62; Product Details <span class="sr-only">
                      (current)
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <hr />

          {/* Title        */}
          <div class="card bg-info text-left col-lg-7 mt-2 mb-2">
            <div class="card-header">Export Details</div>

            {/* Card */}
            <div class="card-body">
              <h5 class="card-title"></h5>
              <div style={{ marginTop: "20px" }}>
                <h4>
                  {" "}
                  <i class="fas fa-angle-double-up"></i> &nbsp;{" "}
                  {`MAT${id.substr(0, 5)}`}
                </h4>
                <hr />

                <dl className="row ">
                  <dt className="col-sm-3">
                    <h4>Product ID</h4>
                    <h4>{ProductID}</h4>
                  </dt>
                  <hr />

                  <d1 className="row">
                    <dt className="col-sm-3">ShipmentID</dt>
                    <dd className="col-sm-9">{ShipmentID}</dd>

                    <dt className="col-sm-3"> Date</dt>
                    <dd className="col-sm-9">{Date}</dd>

                    <dt className="col-sm-3">UnitPrice</dt>
                    <dd className="col-sm-9">{UnitPrice}</dd>

                    <dt className="col-sm-3"> Qty</dt>
                    <dd className="col-sm-9">{Qty}</dd>

                    <dt className="col-sm-3">Type </dt>
                    <dd className="col-sm-9">{Type}</dd>

                    <dt className="col-sm-3">Description</dt>
                    <dd className="col-sm-9">{Description}</dd>
                  </d1>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
