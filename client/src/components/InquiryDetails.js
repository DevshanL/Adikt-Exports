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
      <div id="page-content-wrapper">
      <div className='container-fluid'>
      
        <h2>Inquiry Details</h2>

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
      
      </div>
      </div>
      </div>
    )
  }
}
