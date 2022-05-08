import React, { Component } from 'react'
import axios from 'axios'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import ReactHtmlTableToExcel from 'react-html-table-to-excel'


const generatePDF = requests =>{
  const doc =new jsPDF();
  const tableColumn =["Request ID", "Customer Name", "Date","Category","Product Name", "Net weight", "Package Qty"];
  const tableRows =[];

  requests.map(requests=>{
    const requestsData=[
      requests.requestID,
      requests.customerName,
      requests.date,
      requests.category,
      requests.productName,
      requests.netWeight,
      requests.packageQty,
    ];

    tableRows.push(requestsData);
  })

  doc.text("Adikt Exports", 70,8).setFontSize(13);
  doc.text("Requests Summary", 14 ,16).setFontSize(13);
  doc.autoTable(tableColumn, tableRows, {styles: { fontSize: 8, }, startY: 35});
  doc.save("RequestsSummary.pdf");

}



export default class RequestReports extends Component {

  constructor(props){
    super(props);

    this.state={
      requests:[]
    };
  }

  componentDidMount(){
    this.retriveRequests();
  }
  
  retriveRequests(){
    axios.get("/requests").then(res =>{
      if(res.data.success){
        this.setState({
          requests:res.data.existingRequests
        });
  
        console.log(this.state.requests)
      }
    });
  }


  render() {
    return (

      <div id='wrapper' className='toggled'>
      <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">

      <center>
        <h4 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}>Customer Request Reports</h4>
        <hr/>
      </center>

      &nbsp;&nbsp;
      <br/>

      <ReactHtmlTableToExcel
        id="test-table-xls-button"
        className="btn btn-info"
        table="tableee"
        filename="RequestSummary"
        sheet="tablexls"
        buttonText="Download as Excel"
      />
      &nbsp;

      <button 
        type='button'
        style={{ backgroundColor: "#00000", padding: "7px" }}
        class="btn btn-info btn-sm"
        onClick={() => generatePDF(this.state.requests)}
      >Download as PDF</button>

<table id="tableee" className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Request ID</th>
              <th scope="col">Date</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Category</th>
              <th scope="col">ProductName</th>
              <th scope="col">Net Weight(Kg)</th>
              <th scope="col">Package Qty</th>
            </tr>
          </thead>
          <tbody>
            {this.state.requests.map((requests,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{requests.requestID}</td>
                <td>{requests.date}</td>
                <td>{requests.customerName}</td>
                <td>{requests.category}</td>
                <td>{requests.productName}</td>
                <td>{requests.netWeight}</td>
                <td>{requests.packageQty}</td>
      
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
