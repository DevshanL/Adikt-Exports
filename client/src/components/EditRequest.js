import React, { Component } from 'react'
import moment from 'moment'
import axios from 'axios';

export default class EditRequest extends Component {

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

    const id =this.props.match.params.id;
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
      axios.put(`/request/update/${id}`,data).then((res) => {
  
        if (res.data.success) {

          alert("Request Updated successfully!")
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

    if (!this.state.packageQty) {
      err_packageQty="Please enter the Package Qty!"
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

  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`/request/${id}`).then((res)=> {
      if (res.data.success) {
        this.setState({

          requestID:res.data.request.requestID,
          date:res.data.request.date,
          customerName:res.data.request.customerName,
          c_address:res.data.request.c_address,
          c_email:res.data.request.c_email,
          c_ContactNo:res.data.request.c_ContactNo,
          c_btc_from:res.data.request.c_btc_from,
          c_btc_to:res.data.request.c_btc_to,
          category:res.data.request.category,
          productName:res.data.request.productName,
          netWeight:res.data.request.netWeight,
          packageQty:res.data.request.packageQty,
          arrangedDate:res.data.request.arrangedDate

        });

        console.log(this.state.request);
      }

    });
  }



  render() {
    return (

      <div id='wrapper' className='toggled'>
      <div id="page-content-wrapper">
      <div className='container-fluid'>

      <div className='col-md-8 mt-4 mx-auto'>
      <h1 className='h3 mb-3 font-weight-normal'>Update Customer Request</h1>
        <form className='needs-validation' noValidate>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Request ID</label>
            <input type='text'
            className='form-control'
            name='requestID'
            placeholder='Enter the request Id'
            value={this.state.requestID}
            onChange={this.handleInputChange}
            readOnly
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
            <input type='email'
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
            max={10}
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
            placeholder='from'
            value={this.state.c_btc_from}
            onChange={this.handleInputChange}
            />
            <div style={{fontSize:15 ,color:"red"}}>
              {this.state.err_c_btc_from}
            </div>

            <input type='text'
            className='form-control'
            name='c_btc_to'
            placeholder='to'
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
            <input type="number"
            maxLength="10"
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
          
        </form>

    </div>

    </div>
    </div>
    </div>
    )
  }
}
