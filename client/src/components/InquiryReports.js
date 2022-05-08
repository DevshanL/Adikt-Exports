import React, { Component } from 'react'
import axios from 'axios'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import ReactHtmlTableToExcel from 'react-html-table-to-excel'

const generatePDF =inquiries =>{
  const doc =new jsPDF();
  const tableColumn =["Inquiry ID", "Date", "Customer Name", "Contact No", "Email", "Inquiry Type" , "Description"];
  const tableRows=[];

  inquiries.map(inquiries=>{
    const inquiryData=[
      inquiries.inquiryID,
      inquiries.date,
      inquiries.customerName,
      inquiries.contactNo,
      inquiries.email,
      inquiries.inquiryType,
      inquiries.description,
    ];

    tableRows.push(inquiryData);
  })
    doc.text("Adikt Exports", 70,8).setFontSize(13);
    doc.text("CUSTOMER INQUIRY SUMMARY", 14, 16).setFontSize(13); 
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("InquirySummary.pdf");


}

export default class InquiryReports extends Component {

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


  render() {
    return (
      <div id='wrapper' className='toggled'>
      <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">

      <center>
        <h4 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}>Customer Inquiry Reports</h4>
        <hr/>
      </center>

      <br/>

      <ReactHtmlTableToExcel
        id="test-table-xls-button"
        className="btn btn-info"
        table="tableee"
        filename="InquirySummary"
        sheet="tablexls"
        buttonText="Download as Excel"
      />
      &nbsp;

      <button 
      type='button'
      style={{backgroundColor:"#00000", padding: "7px"}}
      className="btn btn-info btn-sm"
      onClick={()=> generatePDF(this.state.inquiries)}
      >
        Download As PDF
      </button>

      <table id="tableee" className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Inquiry ID</th>
              <th scope="col">Date</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Contact No</th>
              <th scope="col">Email</th>
              <th scope="col">Inquiry Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.inquiries.map((inquiries,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{inquiries.inquiryID}</td>
                <td>{inquiries.date}</td>
                <td>{inquiries.customerName}</td>
                <td>{inquiries.contactNo}</td>
                <td>{inquiries.email}</td>
                <td>{inquiries.inquiryType}</td>
                <td>{inquiries.description}</td>
      
              </tr>
            ))}
          </tbody>  
        </table>

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
