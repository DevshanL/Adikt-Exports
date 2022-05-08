import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import './style.css';

class ComponentToPrint extends React.Component {
  render() {

    const {TransportID,VehicleID,VehicleType,Destination,TransportDate,ShipmentID} = this.state.post;

      return (
          <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
            <div className="container-fluid">
          <div className="card text-center">
    <div className="card-header">
      Featured
    </div>
    <div className="card-body">
      <h5 className="card-title"></h5>
      <div style={{margineTop:'20px'}}>
       <dt className="col-sm-3">Transport ID</dt>
         <h4>{TransportID}</h4>
         <hr/>

        <dl className="row">
          
  
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

        </dl>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div className="footer">
  <div className="contain">
  <div className="col">
    <h1>Company</h1>
    <ul>
      <li>Contact us</li>
      <li>Suggestion</li>
    </ul>
  </div>
  <div className="col">
    <h1></h1>
    <ul>
      <li></li>
    </ul>
  </div>
  <div className="col">
    <h1></h1>
    <ul>
      <li>@ Copyright reserved</li>
    </ul>
  </div>
  <div className="col">
    <h1></h1>
    <ul>
    </ul>
    </div>
  <div className="col social">
    <h1>Social</h1>
    <ul>
      <li>Discription goes to here</li>
    </ul>
  </div>
<div className="clearfix"></div>
</div>
</div>
  </div>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

render(<Example />, document.querySelector("#root"));