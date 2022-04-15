import React, { Component } from 'react'
import axios from 'axios';
import './styleSideNav.css';

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

  render() {
    return (
      <div id="wrapper" className="toggled">
    <div id="page-content-wrapper">
      <div className="container-fluid">
        <button className="btn btn-info" style={{ backgroundColor: "#0E3662" }} ><a href="/intadd" style={{textDecoration:'none',color:'white'}}>Add New Inventory Card&nbsp;
        <i class="fas fa-plus-circle"></i> 
          </a></button>
         
          <table class="table" >
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">InventoryID</th>
                  <th scope="col">MName</th>
                  <th scope="col">cusID</th>
                  <th scope="col">proName</th>
                  <th scope="col">sDate</th>
                  <th scope="col">category</th>
                  <th scope="col">qty</th>
                  <th scope="col">price</th>
                  <th scope="col">des</th>
                  <th scope='col'>Action</th>
              </tr>
          </thead>
          <tbody>
              {this.state.inventory.map((inventory,index) =>(
                  <tr>
                    <th scope='row'>{index+1}</th>
                    <td>
                      <a href={`/intpost/${inventory._id}`} style={{textDecoration:'none'}}>
                      {/* {material.matID} */}
                      {`MAT${inventory._id.substr(0,7)}`}
                      </a>
                      </td>
                    <td>{inventory.matName}</td>
                    <td>{inventory.cusID}</td>
                    <td>{inventory.proName}</td>
                    <td>{inventory.stockedDate}</td>
                    <td>{inventory.category}</td>
                    <td>{inventory.qty}</td>
                    <td>{inventory.price}</td>
                    <td>{inventory.description}</td>
                    <td>
                        <a className="btn btn-warning" href="#">
                        <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a className="btn btn-danger" href="#">
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
    )
  }
}
