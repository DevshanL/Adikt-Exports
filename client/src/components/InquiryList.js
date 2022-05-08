import React, { Component } from 'react'
import axios from 'axios'
import './styleSideNav.css';

export default class InquiryList extends Component {

  constructor(props){
    super(props);

    this.state={
      inquiries:[]
    };
  }

  componentDidMount(){
    this.retrieveInquiries();
  }

  retrieveInquiries(){
    axios.get("/inquiries").then(res =>{
      if (res.data.success) {
        this.setState({
          inquiries:res.data.existingInquiries
        });

        console.log(this.state.inquiries)
      }
    });
  }

  //onClick delete function
  onDelete =(id) =>{
    axios.delete(`/inquiry/delete/${id}`).then((res) =>{
      alert("Deleted Successfully");
      this.retrieveInquiries();
    })
  }

  //Search
  filterData(inquiries,searchKey){
    const result =inquiries.filter((inquiry) =>
    inquiry.customerName.toLowerCase().includes(searchKey) ||
    inquiry.inquiryType.toLowerCase().includes(searchKey) 
    )
    this.setState({inquiries:result})
  }

  handleSearchArea =(e) =>{
    console.log(e.currentTarget.value);
    const searchKey =e.currentTarget.value;

    axios.get("/inquiries").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingInquiries,searchKey)
      }
    });

  }



  render() {
    return (
      <div id='wrapper' className='toggled'>
      <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">

        <div className='container-fluid'> 
            <center>
              <h4 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}>All Customer Inquiries</h4>
              <hr/>
            </center>
          
          <div className="col-lg-9 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search by entering Customer Name, Inquiry Type"
              name="searchQuery"
              onChange={this.handleSearchArea}
            />
          </div>
        
        <table className ="table">
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Inquiry ID</th>
              <th scope='col'>Date</th>
              <th scope='col'>Customer Name</th>
              <th scope='col'>Contact No</th>
              <th scope='col'>Email</th>
              <th scope='col'>Inquiry Type</th>
              <th scope='col'>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.inquiries.map((inquiries,index)=>(
              <tr key={index}>
                <th scope='row'>{index+1}</th>
                <td>
                  <a href={`/inquiry/${inquiries._id}`} style={{textDecoration:'none'}}>{inquiries.inquiryID}</a>
                </td>
                <td>{inquiries.date}</td>
                <td>{inquiries.customerName}</td>
                <td>{inquiries.contactNo}</td>
                <td>{inquiries.email}</td>
                <td>{inquiries.inquiryType}</td>
                <td>{inquiries.description}</td>
                <td>
                  <a className='btn btn-warning' href={`/inqedit/${inquiries._id}`}><i className='fas fa-edit'></i>&nbsp;Edit</a>&nbsp;&nbsp;
                  <a className='btn btn-danger' href='#' onClick={() => this.onDelete(inquiries._id)}><i className='far fa-trash-alt'></i>&nbsp;Delete</a>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

        <button className='btn btn-success'><a href='/inqadd' style={{textDecoration:'none',color:'white'}}>Create a New Customer Inquiry</a></button>
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
    )
  }
}
