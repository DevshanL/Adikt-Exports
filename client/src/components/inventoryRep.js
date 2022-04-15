import React, { Component } from 'react'
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import jsPDF from 'jspdf';
import 'jspdf-autotable';



const generatePDF = inventory => {
    const doc = new jsPDF();
    const tableColumn = ["Customer ID", "Product Name", "Stocked DATE", "Scheduled DATE", "Category", "QTY", "Price","TOTAL"];
    const tableRows = [];
  
    inventory.map(inventory => {
      const inventorydata = [
        
        inventory.cusID,
        inventory.proName,
        inventory.stockedDate,
        inventory.scheduledDate,
        inventory.category,
        inventory.qty,
        inventory.price,
        inventory.price*inventory.qty,
   ];
      tableRows.push(inventorydata);
    })
    doc.text("Adikt Exports", 70,8).setFontSize(13);
    doc.text("INVENTORY SUMMURY", 14, 16).setFontSize(13); 
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("INVENTORYSUMMARY.pdf");
  }

export default class inventoryRep extends Component {

    constructor(props){
        super(props);
    
        this.state={
            inventory:[]
        };
    }
    
        componentDidMount(){
            this.retriveInventory();
        }
    
        retriveInventory(){
          //get server side http module to get data to client side Http request
       axios.get("http://localhost:8000/inventory").then(res =>{
        if(res.data.success){
          this.setState({
            inventory:res.data.existingPosts
          });
    
          console.log(this.state.inventory);
        }
    
    });
    }

    //filter data
filterData(inventory,searchKey){

    const result = inventory.filter((inventory) =>
      //  material.matID.toLowerCase().includes(searchKey) ||
      inventory.cusID.toLowerCase().includes(searchKey) ||
      inventory.proName.toLowerCase().includes(searchKey)||
      inventory.category.toLowerCase().includes(searchKey)
    )
    
    this.setState({inventory:result})
    
    }
  
  //Search Function
  handleSearchArea = (e) =>{
  
    const searchKey= e.currentTarget.value;
  
    axios.get("http://localhost:8000/inventory").then(res =>{
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
             <a   style={{textDecoration:'none',color:'white'}} class="nav-link" href="">Dashboard</a>
           </li>
           <li class="nav-item">
             <a   style={{textDecoration:'none',color:'white'}} class="nav-link" href="/intrep">Reports</a>
           </li>
        
       
        </ul>
      </div>
        </nav> 
    
    
    
    
    <hr/>
    <center>
        <div  className="col-lg-3 mt-2 mb-2">
          {/* Searchbar */}
          <input
          className="form-control "
          type="search"
          placeholder="Search Inventory"
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

          <div class="form-check" >
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="apparel" onChange={this.handleSearchArea} />
  <label class="form-check-label" for="exampleRadios1">
  APPAREL & TEXTILES
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
              
              table="tableee"
              filename="Inventory Summary"
              sheet="tablexls"
              buttonText="Download As Excel" />
&nbsp;

      <button
        type="button"
        style={{ backgroundColor: "#00000", padding: "7px" }}
        class="btn btn-info btn-sm"
        onClick={() => generatePDF(this.state.inventory)}
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
                      <th scope="col">InventoryID</th>
                     
                      <th scope="col">cusID</th>
                      <th scope="col">proName</th>
                      <th scope="col">sDate</th>
                      <th scope="col">scDate</th>
                      <th scope="col">category</th>
                      <th scope="col">qty</th>
                      <th scope="col">price</th>
                      <th scope="col">Total</th>
                      
                     
                  </tr>
              </thead>
              <tbody>
                  {this.state.inventory.map((inventory,index) =>(
                      <tr>
                        <th scope='row'>{index+1}</th>
                        <td>
                          <b>
                          <a href={`/intpost/${inventory._id}`} style={{textDecoration:'none',color:"#0E3662"}}>
                         
                          {`INT${inventory._id.substr(0,7)}`}
                          </a>
                          </b>
                          </td>
                        
                        <td>{inventory.cusID}</td>
                        <td>{inventory.proName}</td>
                        <td>{inventory.stockedDate}</td>
                        <td>{inventory.scheduledDate}</td>
                        <td>{inventory.category}</td>
                        <td>{inventory.qty}</td>
                        <td>{inventory.price}</td>
                        <td>Rs.{inventory.price*inventory.qty}.00</td>
                       
                       
    
    
    
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
