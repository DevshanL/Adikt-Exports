import React, { Component } from 'react'
import axios from 'axios'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import ReactHtmlTableToExcel from 'react-html-table-to-excel'


const generatePDF = requests =>{
  const doc =new jsPDF();
  const tableColumn =["Request ID", "Customer Name", "Date", "Product Name"];
  const tableRows =[];

  requests.map(requests=>{
    const requestsData=[
      requests.requestID,
      requests.customerName,
      requests.date,
      requests.productName,
    ];

    tableRows.push(requestsData);
  })

  doc.text("Adikt Exports", 70.8).setFontSize(13);
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
      <div id="page-content-wrapper">

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


      </div>
      </div>

    )
  }
}
