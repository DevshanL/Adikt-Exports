import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';


export default class InventoryDashboard extends Component {
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
onDelete = (id) =>{

  axios.delete(`http://localhost:8000/inventory/deleteinventory/${id}`).then((res) =>{
    Swal.fire('Deleted','Inventory Card Deleted Successfilly','success')
    this.retriveInventory();
  })
}

//filter data
filterData(inventory,searchKey){

  const result = inventory.filter((inventory) =>
   
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
        <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/"> &#62; Inventory Cards  <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
    </nav> 




<hr/>

<center>
     <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>INVENTORY</b></h1>
      </center>
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

        <button className="btn btn-info" style={{ backgroundColor: "#0E3662" }} ><a href="/intadd" style={{textDecoration:'none',color:'white'}}>Add New Inventory Card&nbsp;
        <i class="fas fa-plus-circle"></i> 
          </a></button>
          <br/>
          <br/>
         <div style={{ backgroundColor: "#faf0e6" }}>
          <table className ="table table-hover" >
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Inventory ID</th>
                 
                  <th scope="col">Customer ID</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Stocked Date</th>
                  <th scope="col">Scheduled Date</th>
                  <th scope="col">Category</th>
                  <th scope="col">Qty Kg.</th>
                  <th scope="col">Price</th>
                  
                  <th scope='col'>Action</th>
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
                   
                    <td>
                       
                        <button className="btn btn-info" style={{ backgroundColor: "#0E3662" }} ><a href={`/intedit/${inventory._id}`} style={{textDecoration:'none',color:'white'}}>Edit&nbsp;
        <i class="fas fa-edit"></i> 
          </a></button>
                        &nbsp;
                        <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(inventory._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                    </td>



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
