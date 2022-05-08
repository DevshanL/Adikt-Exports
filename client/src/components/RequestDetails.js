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
      <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
      <div className='container-fluid'>

      <center>
        <h4 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}>Request Details</h4>
        <hr/>
      </center>

        

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

        <br/>

         {/* Footer Section */}
         <div class="footer">
      <div class="contain">

      <br/>
      <div class="col">
      <h1>ABOUT US</h1>

      <ul>
      <li><i class="fas fa-phone-square"></i>&nbsp; &nbsp; Contact us</li>
      <li><i class="fas fa-comment-alt"></i>&nbsp; &nbsp;Suggestion</li>
      </ul>
  
      </div>

      <div class="col">
        <h1></h1>
        <ul>
          <li></li>
        </ul>
      </div>

      <div class="col">
        <div class="position-absolute top-50 start-50 translate-middle">
      <br/>

          <img src="%PUBLIC_URL%../../white.png" class="rounded-circle" width="40" height="40"  alt=""/>
          <h1>CASANOVA</h1>
        
          <ul>
            <li>@ Copyright reserved</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <h1></h1>
        <ul>
        </ul>
      </div>

      <div class="position-absolute top-50 end-0 translate-middle-y">
        <div class="col social">
      <h1>Help</h1>
  
      <ul>
      <li><i class="fas fa-envelope"></i>&nbsp; &nbsp; <i class="fas fa-map-marker-alt"></i>&nbsp; &nbsp;<i class="fas fa-star"></i></li>
      </ul>
  
        </div>
      </div>
      <div class="clearfix">
      </div>
    </div>
    </div>



      </div>
      </div>
      </div>
    )
  }
}
