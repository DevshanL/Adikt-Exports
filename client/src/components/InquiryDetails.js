import React, { Component } from 'react'
import axios from 'axios'

export default class InquiryDetails extends Component {

  constructor(props){
    super(props);
    this.state={
      inquiry:{}
    };
  }

  componentDidMount(){
    this.showInquiryDetails();
  }

  showInquiryDetails(){
    const id=this.props.match.params.id;

    axios.get(`/inquiry/${id}`).then((res)=>{
      if (res.data.success) {
        this.setState({
          inquiry:res.data.inquiry
        });

        console.log(this.state.inquiry);
      }
    });
  }

  render() {

    const{
      inquiryID,
      date,
      customerName,
      contactNo,
      email,
      inquiryType,
      description
    }=this.state.inquiry;



    return (
      <div id='wrapper' className='toggled'>
      <div  style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
      <div className='container-fluid'>
      
      <center>
        <h4 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}>Inquiry Details</h4>
        <hr/>
      </center>

        &nbsp;&nbsp;&nbsp;

        <dt className='col-sm-3'>inquiry ID</dt>
        <dd className='col-sm-9'>{inquiryID}</dd>

        <dt className='col-sm-3'>Date</dt>
        <dd className='col-sm-9'>{date}</dd>

        <dt className='col-sm-3'>Customer Name</dt>
        <dd className='col-sm-9'>{customerName}</dd>

        <dt className='col-sm-3'>Contact No</dt>
        <dd className='col-sm-9'>{contactNo}</dd>

        <dt className='col-sm-3'>Email</dt>
        <dd className='col-sm-9'>{email}</dd>

        <dt className='col-sm-3'>Inquiry Type</dt>
        <dd className='col-sm-9'>{inquiryType}</dd>

        <dt className='col-sm-3'>Description</dt>
        <dd className='col-sm-9'>{description}</dd>

        &nbsp;
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
