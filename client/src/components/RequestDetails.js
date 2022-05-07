import React, { Component } from 'react'
import axios from 'axios'

export default class RequestDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      request:{}
    };
  }

  componentDidMount(){
    this.showRequestDetails();
    
  }

  showRequestDetails(){
    //const{id}=useParams(props);
    const id =this.props.match.params.id;

    axios.get(`/request/${id}`).then((res)=> {
      if (res.data.success) {
        this.setState({
          request:res.data.request
        });

        console.log(this.state.request);
      }

    });
  }


  render() {

    const {requestID,
      date,
      customerName,
      c_address,
      c_email,
      c_ContactNo,
      c_btc_from,
      c_btc_to,
      category,
      productName,
      netWeight,
      packageQty,
      arrangedDate} =this.state.request;

    return (

      <div id='wrapper' className='toggled'>
      <div id="page-content-wrapper">
      <div className='container-fluid'>
      
        <h2>RequestDetails</h2>

        &nbsp;&nbsp;&nbsp;

        <dt className='col-sm-3'>Date</dt>
        <dd className='col-sm-9'>{date}</dd>

        <dt className='col-sm-3'>Customer Name</dt>
        <dd className='col-sm-9'>{customerName}</dd>

        &nbsp;

        <h5>Contact Details</h5>
        <hr/>

        <dt className='col-sm-3'>Address</dt>
        <dd className='col-sm-9'>{c_address}</dd>

        <dt className='col-sm-3'>Email</dt>
        <dd className='col-sm-9'>{c_email}</dd>

        <dt className='col-sm-3'>Contact No</dt>
        <dd className='col-sm-9'>{c_ContactNo}</dd>

        <dt className='col-sm-3'>Best time to contact</dt>
        <dd className='col-sm-9'>{c_btc_from} to {c_btc_to}</dd>
        &nbsp;

        <h5>Product Details</h5>
        <hr/>
        <dt className='col-sm-3'>Category</dt>
        <dd className='col-sm-9'>{category}</dd>

        <dt className='col-sm-3'>Product Name</dt>
        <dd className='col-sm-9'>{productName}</dd>

        <dt className='col-sm-3'>Net weight(Kg)</dt>
        <dd className='col-sm-9'>{netWeight}</dd>

        <dt className='col-sm-3'>Package Qty</dt>
        <dd className='col-sm-9'>{packageQty}</dd>

        <dt className='col-sm-3'>Arranged Date</dt>
        <dd className='col-sm-9'>{arrangedDate}</dd>

      </div>
      </div>
      </div>
    )
  }
}
