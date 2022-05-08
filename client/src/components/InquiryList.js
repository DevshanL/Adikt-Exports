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
      <div id="page-content-wrapper">

        <div className='container-fluid'> 
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>All Customer Inquiries</h4>
            </div> 
          </div>
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
        </div>
      </div>
      </div>
    )
  }
}
