import axios from 'axios'
import React, { Component } from 'react'
import moment from 'moment'

export default class CreateInquiry extends Component {

  constructor(props){
    super(props);

    this.state={
      inquiryID:"",
      date:"",
      customerName:"",
      contactNo:"",
      email:"",
      inquiryType:"",
      description:"",

      //err
      err_inquiryID:"",
      err_date:"",
      err_customerName:"",
      err_contactNo:"",
      err_email:"",
      err_inquiryType:"",
      err_description:""
    }
  }

  //Handling inputchange
  handleInputChange =(e) =>{
    const{name,value} =e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  //Onsubmit
  onSubmit =(e) =>{
    e.preventDefault();

    const isValid =this.formValidation();

    const{inquiryID,
      date,
      customerName,
      contactNo,
      email,
      inquiryType,
      description}=this.state;

    const data={
      inquiryID:inquiryID,
      date:date,
      customerName:customerName,
      contactNo:contactNo,
      email:email,
      inquiryType:inquiryType,
      description:description,
    }

    //validation successful
    if (isValid) {
      console.log(data);
    }

    //POST data
    axios.post("/inq/save", data).then((res)=>{
      if (res.data.success) {
        alert("Customer Inquiry created successfully")
        this.setState(
          {
            inquiryID:"",
            date:"",
            customerName:"",
            contactNo:"",
            email:"",
            inquiryType:"",
            description:""
          }
        )
      }
    })

  }

  //form validation
  formValidation=() =>{
    let err_inquiryID="";
    let err_date="";
    let err_customerName="";
    let err_contactNo="";
    let err_email="";
    let err_inquiryType="";
    let err_description="";

    if (!this.state.inquiryID) {
      err_inquiryID="Please enter a valid inquiry ID"
    }

    if (!this.state.date) {
      err_date="Please enter a valid date"
    }

    if (!this.state.customerName) {
      err_customerName="Please enter a valid Customer Name"
    }

    if (!this.state.contactNo) {
      err_contactNo="Please enter a valid contact No"
    }
    else if (!this.state.contactNo.match('^[1-9]+[0-9]*$')) {
      err_contactNo="Invalid Contact No!"
    }

    if (!this.state.email) {
      err_email="Please enter a valid email"
    }

    if (!this.state.inquiryType) {
      err_inquiryType="Please enter a valid inquiry Type"
    }

    if (!this.state.description) {
      err_description="Please enter a valid description"
    }

    if (err_inquiryID||err_date||err_customerName||err_contactNo||err_email||err_inquiryType||err_description) {
      this.setState({err_inquiryID,err_date,err_customerName,err_contactNo,err_email,err_inquiryType,err_description});
      return false;
    }

  }

  //demo
  //onclear

  render() {
    return (
      <div id='wrapper' className='toggled'>
      <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
      <div className='container-fluid'>

      <center>
        <h4 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}>Create Customer Inquiry</h4>
        <hr/>
      </center>

      <div className='col-md-8 mt-4 mx-auto'>
        
          <form className='needs-validation' noValidate>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Inquiry ID</label>
              <input type='text'
              className='form-control'
              name='inquiryID'
              placeholder='Enter the Inquiry Id'
              value={this.state.inquiryID}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_inquiryID}
              </div>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>date</label>
              <input type='date'
              className='form-control'
              name='date'
              placeholder='Enter the date'
              value={this.state.date}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_date}
              </div>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Customer Name</label>
              <input type='text'
              className='form-control'
              name='customerName'
              placeholder='Enter the customer Name'
              value={this.state.customerName}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_customerName}
              </div>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact No</label>
              <input type='text'
              maxLength='10'
              className='form-control'
              name='contactNo'
              placeholder='Enter the Contact No'
              value={this.state.contactNo}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_contactNo}
              </div>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>email</label>
              <input type='email'
              className='form-control'
              name='email'
              placeholder='Enter the email'
              value={this.state.email}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_email}
              </div>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Inquiry Type</label>
              <input type='text'
              className='form-control'
              name='inquiryType'
              placeholder='Enter the inquiryType'
              value={this.state.inquiryType}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_inquiryType}
              </div>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Description</label>
              <input type='text'
              maxLength='250'
              className='form-control'
              name='description'
              placeholder='Enter the description'
              value={this.state.description}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_description}
              </div>
            </div>

            <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className='far fa-check-square'></i>
              &nbsp; Save
            </button>


          </form>
          <br/>
          <br/>

      </div>

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
