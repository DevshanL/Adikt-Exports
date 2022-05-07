import React, { Component } from "react";
import axios from "axios";

export default class PostbrDetails extends Component {
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
    axios.get(`/buyer-register/${id}`).then((res) => {
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
    const { BuyerID,Name, Nic, Address, Email, ContactNumber } =
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
                    &#62;Buyer Registration
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    {" "}
                    &#62; Buyer Details <span class="sr-only">
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
            <div class="card-header">Buyer Registration</div>

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
                    <h4>BuyerID</h4>
                    <h4>{BuyerID}</h4>
                  </dt>
                  <hr />

                  <d1 className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9">{Name}</dd>

                    <dt className="col-sm-3"> Nic</dt>
                    <dd className="col-sm-9">{Nic}</dd>

                    

                    <dt className="col-sm-3"> Address</dt>
                    <dd className="col-sm-9">{Address}</dd>

                    <dt className="col-sm-3">Email </dt>
                    <dd className="col-sm-9">{Email}</dd>

                    <dt className="col-sm-3">ContactNumber</dt>
                    <dd className="col-sm-9">{ContactNumber}</dd>
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
