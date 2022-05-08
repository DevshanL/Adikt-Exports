import React, {Component} from "react";
import axios from "axios";



export default class PostDetailsTR extends Component {
  
  //Binding event handler method
  constructor(props){
    super(props);

    this.state={
      transport:{}
    };
  }

  //load data from a remote endpoint
  componentDidMount(){

    const id = this.props.match.params.id;

    //get server side http module to get data to client side Http request
    axios.get(`/transport/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          transport:res.data.transport
        });

        console.log(this.state.transport);
      }

    });


  }

  //gather outputs
  render() {

    const id =this.props.match.params.id;
    const {TransportID,VehicleID,VehicleType,Destination,TransportDate,ShipmentID} = this.state.post;

    return (
      //component organizer
      <div id="wrapper" className="toggled">
      <div id="page-content-wrapper">
      <div className="container-fluid"></div>
      {/*<div style={{margineTop:'20px'}}>*/}

                  {/* custom navigation        */}
                  <nav class="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/dashtr">Dashboard </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/posttr"> &#62;TR Details</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/"> &#62; Transport Details <span class="sr-only">(current)</span> </a>
      </li>
    </ul>
  </div>
</nav> 

<hr/>

          {/* Title        */}
          <div class="card bg-info text-left col-lg-7 mt-2 mb-2">
                
          <div class="card-header">
             TR CARD
           </div>

            {/* Card */}
        <div class="card-body">
            <h5 class="card-title"></h5>
            <div style={{marginTop:'20px'}}>
                
          <h4>  <i class="fas fa-angle-double-up"></i> &nbsp; {`MAT${id.substr(0,5)}`}</h4>
        <hr/>

      <dl className="row ">
       <dt className="col-sm-3"><h4>Transport ID</h4><h4>{TransportID}</h4></dt>
         <hr/>

      <d1 className="row">

        <dt className="col-sm-3">Vehicle ID</dt>
        <dd className="col-sm-9">{VehicleID}</dd>

        <dt className="col-sm-3">Vehicle Type</dt>
        <dd className="col-sm-9">{VehicleType}</dd>

        <dt className="col-sm-3">Destination</dt>
        <dd className="col-sm-9">{Destination}</dd>

        <dt className="col-sm-3">Transport Date</dt>
        <dd className="col-sm-9">{TransportDate}</dd>

        <dt className="col-sm-3">Shipment ID</dt>
        <dd className="col-sm-9">{ShipmentID}</dd>

        
      </d1>
      </dl>


      </div>
      </div>
          </div>
          
          </div>
          </div>
      
    )
    
  }
  
}
