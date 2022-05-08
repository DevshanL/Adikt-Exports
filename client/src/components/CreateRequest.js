import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

export default class CreateRequest extends Component {

    //Constructor
    constructor(props){
      super(props);
      this.state={
        requestID:"",
        date:"",
        customerName:"",
        c_address:"",
        c_email:"",
        c_ContactNo:"",
        c_btc_from:"",
        c_btc_to:"",
        category:"",
        productName:"",
        netWeight:"",
        packageQty:"",
        arrangedDate:"",
        //err
        err_requestID:"",
        err_date:"",
        err_customerName:"",
        err_c_address:"",
        err_c_email:"",
        err_c_ContactNo:"",
        err_c_btc_from:"",
        err_c_btc_to:"",
        err_category:"",
        err_productName:"",
        err_netWeight:"",
        err_packageQty:"",
        err_arrangedDate:"",
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

    //Onsubmit customer request
    onSubmit =(e) =>{
      e.preventDefault();

      const isValid=this.formValidation();

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
        arrangedDate} =this.state;

      const data={
        requestID:requestID,
        date:date,
        customerName:customerName,
        c_address:c_address,
        c_email:c_email,
        c_ContactNo:c_ContactNo,
        c_btc_from:c_btc_from,
        c_btc_to:c_btc_to,
        category:category,
        productName:productName,
        netWeight:netWeight,
        packageQty:packageQty,
        arrangedDate:arrangedDate,
      }

      //validation successful
      if (isValid) {
        console.log(data);

        //POST data
        axios.post("/request/save",data).then((res) => {
          if (res.data.success) {
            alert("Customer request Created Successfully!")
            this.setState(
              {
                requestID:"",
                date:"",
                customerName:"",
                c_address:"",
                c_email:"",
                c_ContactNo:"",
                c_btc_from:"",
                c_btc_to:"",
                category:"",
                productName:"",
                netWeight:"",
                packageQty:"",
                arrangedDate:"",
              }
            )
          }
        })

      }

    }

    //form validation
    formValidation =() =>{
      let err_requestID="";
      let err_date="";
      let err_customerName="";
      let err_c_address="";
      let err_c_email="";
      let err_c_ContactNo="";
      let err_c_btc_from="";
      let err_c_btc_to="";
      let err_category="";
      let err_productName="";
      let err_netWeight="";
      let err_packageQty="";
      let err_arrangedDate="";

      if (!this.state.requestID) {
        err_requestID="Please enter a Request ID!"
      }

      if (!this.state.date) {
        err_date="Please enter a Date!"
      }

      if (!this.state.customerName) {
        err_customerName="Please enter a Customer Name!"
      }

      if (!this.state.c_address) {
        err_c_address="Please enter a Address!"
      }

      if (!this.state.c_email) {
        err_c_email="Please enter a Email!"
      }

      if (!this.state.c_ContactNo) {
        err_c_ContactNo="Please enter a Contact No!"
      }

      if (!this.state.c_btc_from) {
        err_c_btc_from="Enter the best time to contact!"
      }

      if (!this.state.c_btc_to) {
        err_c_btc_to="Enter the best time to contact!"
      }

      if (!this.state.category) {
        err_category="Please Select a product Category!"
      }

      if (!this.state.productName) {
        err_productName="Please enter a ProductName!"
      }

      if (!this.state.netWeight) {
        err_netWeight="Please enter the Net Weight!"
      }
        else if (this.state.netWeight >= 500) {
          err_netWeight="Maximum Net Weight is 500Kg"
        }

      if (!this.state.packageQty) {
        err_packageQty="Please enter the Package Qty!"
      }
        else if (!this.state.packageQty.match('^[1-9]+[0-9]*$')) {
          err_packageQty="Invalid Package Qty!"
        }
        else if (this.state.packageQty >= 100) {
          err_packageQty="Maximum Package Qty is 100"
        }

      if (!this.state.arrangedDate) {
        err_arrangedDate="Please enter the date!"
      }

      if (err_requestID||err_date||err_customerName||err_c_address||err_c_email||err_c_ContactNo||err_c_btc_from||err_c_btc_to||err_category||err_productName||err_netWeight||err_packageQty||err_arrangedDate) {
        this.setState({err_requestID,err_date,err_customerName,err_c_address,err_c_email,err_c_ContactNo,err_c_btc_from,err_c_btc_to,err_category,err_productName,err_netWeight,err_packageQty,err_arrangedDate});
        return false;
      }

      return true;
    }

    //Demo
    demoValues =(e) =>{
      e.preventDefault();

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
        arrangedDate} =this.state;

        const data={
          requestID:requestID,
          date:date,
          customerName:customerName,
          c_address:c_address,
          c_email:c_email,
          c_ContactNo:c_ContactNo,
          c_btc_from:c_btc_from,
          c_btc_to:c_btc_to,
          category:category,
          productName:productName,
          netWeight:netWeight,
          packageQty:packageQty,
          arrangedDate:arrangedDate,
        }

        this.setState(
          {
            requestID:"009",
            date:"10/12/2022",
            customerName:"Jason Athapatthu",
            c_address:"Ekala",
            c_email:"Jason999@gmail.com",
            c_ContactNo:"0726485778",
            c_btc_from:"08.00",
            c_btc_to:"20.00",
            category:"Garment goods",
            productName:"Buttons",
            netWeight:"2",
            packageQty:"1",
            arrangedDate:"11/12/2022",
          }
        )

    }

    //onClear
    onClear = (e) => {
      e.preventDefault();
      
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
        arrangedDate} =this.state;
      
      const data={
          requestID:requestID,
          date:date,
          customerName:customerName,
          c_address:c_address,
          c_email:c_email,
          c_ContactNo:c_ContactNo,
          c_btc_from:c_btc_from,
          c_btc_to:c_btc_to,
          category:category,
          productName:productName,
          netWeight:netWeight,
          packageQty:packageQty,
          arrangedDate:arrangedDate,
      }
      
      console.log(data)
      
      this.setState(
        {
          requestID:"",
          date:"",
          customerName:"",
          c_address:"",
          c_email:"",
          c_ContactNo:"",
          c_btc_from:"",
          c_btc_to:"",
          category:"",
          productName:"",
          netWeight:"",
          packageQty:"",
          arrangedDate:"",
        }
      )
    }

  render() {
    return (

      <div id='wrapper' className='toggled'>
      <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
      <div className='container-fluid'>

      <center>
        <h4 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}>Create Customer Request</h4>
        <hr/>
      </center>

      <div className='col-md-8 mt-4 mx-auto'>
        
          <form className='needs-validation' noValidate>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Request ID</label>
              <input type='text'
              className='form-control'
              name='requestID'
              placeholder='Enter the request Id'
              value={this.state.requestID}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_requestID}
              </div>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Date</label>
              <input type='date'
              className='form-control'
              name='date'
              placeholder='Enter the date'
              value={this.state.date}
              max={moment().format("YYYY-MM-DD")}
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
              placeholder='Enter Full Name'
              value={this.state.customerName}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_customerName}
              </div>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Address</label>
              <input type='text'
              className='form-control'
              name='c_address'
              placeholder='Enter the address'
              value={this.state.c_address}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_c_address}
              </div>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Email</label>
              <input type="email"
              className='form-control'
              name='c_email'
              placeholder='Enter the email'
              value={this.state.c_email}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_c_email}
              </div>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact No</label>
              <input type='text'
              maxLength='10'
              className='form-control'
              name='c_ContactNo'
              placeholder='Enter the ContactNo'
              value={this.state.c_ContactNo}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_c_email}
              </div>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Best Time to Contact</label>
              <input type='text'
              className='form-control'
              name='c_btc_from'
              placeholder='HH:MM'
              value={this.state.c_btc_from}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_c_btc_from}
              </div>

              &nbsp;
              <label>to</label>
              &nbsp;

              <input type='text'
              className='form-control'
              name='c_btc_to'
              placeholder='HH:MM'
              value={this.state.c_btc_to}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_c_btc_to}
              </div>
            </div>

            
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Category</label>
              <input type="text"
              className="form-control"
              name='category'
              placeholder='Enter the category'
              value={this.state.category}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_category}
              </div>
            </div>

            
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Product Name</label>
              <input type="text"
              className="form-control"
              name='productName'
              placeholder='Enter Name of the product'
              value={this.state.productName}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_productName}
              </div>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Net Weight(Kg)</label>
              <input type="number"
              max='999'
              className="form-control"
              name='netWeight'
              placeholder='Enter the netWeight'
              value={this.state.netWeight}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_netWeight}
              </div>
            </div>

            
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Package Qty</label>
              <input type="number" max='100'
              maxLength="3"
              className="form-control"
              name='packageQty'
              placeholder='Enter the package qty'
              value={this.state.packageQty}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_packageQty}
              </div>
            </div>

            
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Package(s) Can be Arranged for Transport by</label>
              <input type="date"
              className="form-control"
              name='arrangedDate'
              placeholder='Enter the Arranged Date'
              value={this.state.arrangedDate}
              max={moment().format("YYYY-MM-DD")}
              onChange={this.handleInputChange}
              />
              <div style={{fontSize:15 ,color:"red"}}>
                {this.state.err_arrangedDate}
              </div>
            </div>

            <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className='far fa-check-square'></i>
              &nbsp; Save
            </button>

            &nbsp;&nbsp;

            <button className='btn btn-dark' type='submit' style={{marginTop:'15px',backgroundColor: "#2D5F97"}} onClick={this.onClear}>
              <i class="fa-solid fa-circle-exclamation"></i>
              &nbsp; Clear
            </button>

            &nbsp;&nbsp;

            <button className='btn btn-dark' type='submit' style={{marginTop:'15px',backgroundColor: "#2D5F97"}} onClick={this.demoValues}>
              <i class="fa-solid fa-circle-exclamation"></i>
              &nbsp; Demo
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
