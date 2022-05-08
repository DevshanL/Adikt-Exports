import React, { Component } from 'react'
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import jsPDF from 'jspdf';
import 'jspdf-autotable';



const generatePDF = buyerRegister => {
    const doc = new jsPDF();
    const tableColumn = ["BuyerID", "Name", "Nic", "Address", "Email", "ContactNumber"];
    const tableRows = [];
  
    buyerRegister.map(buyerRegister => {
      const exportData = [
        
        buyerRegister.BuyerID,
        buyerRegister.Name,
        buyerRegister.Nic,
        buyerRegister.Address,
        buyerRegister.Email,
        buyerRegister.ContactNumber,
        
       
   ];
      tableRows.push(exportData);
    })
    doc.text("Adikt Exports", 70,8).setFontSize(13);
    doc.text("Buyer Registration SUMMURY", 14, 16).setFontSize(13); 
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("BuyerRegistrationSUMMARY.pdf");
  }

export default class buyerRegisterRep extends Component {

    constructor(props){
        super(props);
    
        this.state={
            buyerRegister:[]
        };
    }
    
        componentDidMount(){
            this.retriveBuyerRegister();
        }
    
        retriveBuyerRegister(){
          //get server side http module to get data to client side Http request
       axios.get("http://localhost:8000/buyer-register").then(res =>{
        if(res.data.success){
          this.setState({
            buyerRegister:res.data.existingBuyerRegister
          });
    
          console.log(this.state.buyerRegister);
        }
    
    });
    }

    //filter data
filterData(buyerRegister,searchKey){

    const result = buyerRegister.filter((exportDetails) =>
     
    buyerRegister.BuyerID.toLowerCase().includes(searchKey) ||
    buyerRegister.Nic.toLowerCase().includes(searchKey)
    
    )
    
    this.setState({buyerRegister:result})
    
    }
  
  //Search Function
  handleSearchArea = (e) =>{
  
    const searchKey= e.currentTarget.value;
  
    axios.get("http://localhost:8000/buyer-register").then(res =>{
        if(res.data.success){
  
          this.filterData(res.data.existingBuyerRegister,searchKey)
  
        }
    });
  
  }
  render() {
    return (
        <div  id="wrapper" className="toggled">
      
        <div  style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
        <div className="container-fluid">
          
    
             {/* custom navigation        */}
        <nav class="navbar navbar-expand-lg  rounded-3" style={{ backgroundColor: "#006a4e" }}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <li class="nav-item active">
             <a   style={{textDecoration:'none',color:'white'}} class="nav-link" href="/">Dashboard</a>
           </li>
           <li class="nav-item">
             <a   style={{textDecoration:'none',color:'white'}} class="nav-link" href="/buyerRegisterRep">Reports</a>
           </li>
        
       
        </ul>
      </div>
        </nav> 
        <hr/>
        <center>
     <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>REPORTS</b></h1>
      </center>
    
    
    <hr/>
    <center>
        <div  className="col-lg-3 mt-2 mb-2">
          {/* Searchbar */}
          <input
          className="form-control "
          type="search"
          placeholder="Search "
          name="searchQuery"
          onChange={this.handleSearchArea}>

          </input>

          
          </div>
          </center>
         
        
          
     
    
<ReactHTMLTableToExcel
              
              id="test-table-xls-button"
              
              className="btn btn-info"
              
              table="tablee"
              filename="Export Details Summary"
              sheet="tablexls"
              buttonText="Download As Excel" />
&nbsp;

      <button
        type="button"
        style={{ backgroundColor: "#00000", padding: "7px" }}
        class="btn btn-info btn-sm"
        onClick={() => generatePDF(this.state.buyerRegister)}
      >
        Download As PDF
      </button>
              <br/>
              <br/>
             <div style={{ backgroundColor: "#faf0e6" }}>
              <table  id="tableee" class="table" >
              <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">BuyerID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Nic</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col">ContactNumber</th>
                   
                    
                      
                     
                  </tr>
              </thead>
              <tbody>
                  {this.state.buyerRegister.map((buyerRegister,index) =>(
                      <tr>
                        <th scope='row'>{index+1}</th>
                        <td>
                          <b>
                          <a href={`/propost/${buyerRegister._id}`} style={{textDecoration:'none',color:"#0E3662"}}>
                         
                          {`PRO${buyerRegister._id.substr(0,7)}`}
                          </a>
                          </b>
                          </td>
                        
                          <td>{buyerRegister.BuyerID.substring(0, 7)}</td>
                          <td>{buyerRegister.Name}</td>
                          <td>{buyerRegister.Nic}</td>
                          <td>{buyerRegister.Address}</td>
                          <td>{buyerRegister.Email}</td>
                          <td>{buyerRegister.ContactNumber}</td>
                     
                     
                       
                       
    
    
    
                      </tr>
    
                  ))}
              </tbody>
              </table>
              </div>
          </div>
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
      <h1>Adikt Exports</h1>
      
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
    
    )
  }
}