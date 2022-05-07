import React, { Component } from 'react'
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import jsPDF from 'jspdf';
import 'jspdf-autotable';



const generatePDF = production => {
    const doc = new jsPDF();
    const tableColumn = ["Slot Name", "Slot Location", "Slot Manager", "Capacity", "Category"];
    const tableRows = [];
  
    production.map(production => {
      const productiondata = [
        
        production.slotName,
        production.slotLocation,
        production.slotManager,
        production.capacity,
        production.category,
       
   ];
      tableRows.push(productiondata);
    })
    doc.text("Adikt Exports", 70,8).setFontSize(13);
    doc.text("SLOT SUMMURY", 14, 16).setFontSize(13); 
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("SLOTSUMMARY.pdf");
  }

export default class ProductionRep extends Component {

    constructor(props){
        super(props);
    
        this.state={
            production:[]
        };
    }
    
        componentDidMount(){
            this.retriveProduction();
        }
    
        retriveProduction(){
          //get server side http module to get data to client side Http request
       axios.get("http://localhost:8000/production").then(res =>{
        if(res.data.success){
          this.setState({
            production:res.data.existingPosts
          });
    
          console.log(this.state.production);
        }
    
    });
    }

    //filter data
filterData(production,searchKey){

    const result = production.filter((production) =>
      //  material.matID.toLowerCase().includes(searchKey) ||
      production.slotName.toLowerCase().includes(searchKey) ||
      production.slotLocation.toLowerCase().includes(searchKey)||
      production.category.toLowerCase().includes(searchKey)
    )
    
    this.setState({production:result})
    
    }
  
  //Search Function
  handleSearchArea = (e) =>{
  
    const searchKey= e.currentTarget.value;
  
    axios.get("http://localhost:8000/production").then(res =>{
        if(res.data.success){
  
          this.filterData(res.data.existingPosts,searchKey)
  
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
             <a   style={{textDecoration:'none',color:'white'}} class="nav-link" href="/prodash">Slot Dashboard</a>
           </li>
           <li class="nav-item">
             <a   style={{textDecoration:'none',color:'white'}} class="nav-link" href="/prorep">Reports</a>
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
          placeholder="Search Slots"
          name="searchQuery"
          onChange={this.handleSearchArea}>

          </input>

          
          </div>
          </center>
          {/* Filter Category */}
<div className="p-3 mb-2 text-light rounded-3" style={{ backgroundColor: "#0E3662" }} >
          <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios2">
    ALL
  </label>
</div>

          
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="tea" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios2">
  TEA
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="coconut" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios3">
  COCONUT BASED PRODUCTS
  </label>
  
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="spices" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios3">
  SPICES
  </label>
</div>
</div>
        
          
     
    
<ReactHTMLTableToExcel
              
              id="test-table-xls-button"
              
              className="btn btn-info"
              
              table="tablee"
              filename="Production Slot Summary"
              sheet="tablexls"
              buttonText="Download As Excel" />
&nbsp;

      <button
        type="button"
        style={{ backgroundColor: "#00000", padding: "7px" }}
        class="btn btn-info btn-sm"
        onClick={() => generatePDF(this.state.production)}
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
                      <th scope="col">Slot ID</th>
                     
                      <th scope="col">Slot Name</th>
                      <th scope="col">Slot Location</th>
                      <th scope="col">Slot Manager</th>
                      <th scope="col">Capacity</th>
                      <th scope="col">Category</th>
                    
                      
                     
                  </tr>
              </thead>
              <tbody>
                  {this.state.production.map((production,index) =>(
                      <tr>
                        <th scope='row'>{index+1}</th>
                        <td>
                          <b>
                          <a href={`/propost/${production._id}`} style={{textDecoration:'none',color:"#0E3662"}}>
                         
                          {`PRO${production._id.substr(0,7)}`}
                          </a>
                          </b>
                          </td>
                        
                        <td>{production.slotName}</td>
                        <td>{production.slotLocation}</td>
                        <td>{production.slotManager}</td>
                        <td>{production.capacity}</td>
                        <td>{production.category}</td>
                     
                     
                       
                       
    
    
    
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
    
    )
  }
}
