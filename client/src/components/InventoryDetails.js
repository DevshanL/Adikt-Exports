import React, { Component } from 'react'
import axios from 'axios';

export default class InventoryDetails extends Component {

   //Binding event handler method
   constructor(props){
    super(props);

    this.state={
      inventory:{}
    };
}
//load data from a remote endpoint
componentDidMount(){

    const id =this.props.match.params.id;
    //get server side http module to get data to client side Http request
    axios.get(`http://localhost:8000/inventory/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
              inventory:res.data.inventory
            });

            console.log(this.state.inventory);
        }
    });
}
  render() {

    const id =this.props.match.params.id;

    const{matName,cusID,proName,stockedDate,category,qty,price,description} = this.state.inventory;
    return (
      <div class="card-body">
      <h5 class="card-title"></h5>

     
            <div style={{marginTop:'20px'}}>
            
            <h4>  <i class="fas fa-angle-double-up"></i> &nbsp; {`MAT${id.substr(0,5)}`}</h4>
            <hr/>
            
            <dl className="row ">
                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Material Name</b></dt>
                <dd className="col-sm-9">{matName}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Suplier ID</b></dt>
                <dd className="col-sm-9">{cusID}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Supplier Name</b></dt>
                <dd className="col-sm-9">{proName}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Arrival Date</b></dt>
                <dd className="col-sm-9">{stockedDate}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Shipment ID</b></dt>
                <dd className="col-sm-9">{category}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Price</b></dt>
                <dd className="col-sm-9">{qty}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Qty</b></dt>
                <dd className="col-sm-9">{price}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Category</b></dt>
                <dd className="col-sm-9">{description}</dd>

                

            </dl>
            
        </div>
        </div>
    )
  }
}
