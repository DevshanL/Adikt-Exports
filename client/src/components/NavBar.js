import React, { Component } from 'react';
import './styleSideNav.css';

class NavBar extends Component {
    render() {
        return (
            <div id="wrapper" className="toggled">
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                 <br/> 
                 <br/> 
                  &nbsp;
                  &nbsp;
                  &nbsp;
                 <img src="%PUBLIC_URL%../../white.png" class="rounded-circle" width="200" height="200"  alt=""/>
                <br/>
                <br/>  
                <hr/>
        <li>
                    <a href="#">
                    <i class="fas fa-sort-amount-up-alt"></i>

                    &nbsp;
                    
                      Customer Management</a>
                </li>
                <hr/>
                <li>
                    <div className="dropdown">
                        
                        <i class="fas fa-cubes"></i>
                        &nbsp;
                          Inventory Management
                        <div className="dropdown-content">
                        <a href="/intdash">Inventory Dashboard</a>
                        
                         <a href="/intrep">Reports</a>
                        
                    </div>
                    </div>
                </li>
                <hr/>

                <li>
                    <div className="dropdown">
                       
                        <i class="fab fa-product-hunt"></i>
                        &nbsp;
                      
                        Production Management
                      
                        <div className="dropdown-content">
                        <a href="/prodash">Production Dashboard</a>
                        <a href="/prorep">Slot Reports</a>
                        
                        
                    </div>
                    </div>
                </li>
                <hr/>
               
                <li>
                    <div className="dropdown">
                        
                        <i class="fas fa-cubes"></i>
                        &nbsp;
                          Export Management
                        <div className="dropdown-content">
                        <a href="/expDash">Export Dashboard</a>
                        <a href="/buyerReg">Buyer Registration</a>
                        
                         <a href="#">Reports</a>
                        
                    </div>
                    </div>
                </li>
                <hr/>

                <li>
                    <div className="dropdown">
                        
                        <i class="fas fa-cubes"></i>
                        &nbsp;
                          QC Management
                        <div className="dropdown-content">
                        <a href="/homeqc">QC Dashboard</a>
                        <a href="/add">QC Card</a>
                        
                    </div>
                    </div>
                </li>
                <hr/>
                
                
                <li>
                <div className="dropdown">
                        
                        <i class="fas fa-cubes"></i>
                        &nbsp;
                          Transort
                        <div className="dropdown-content">
                        <a href="/hometr">TR Dashboard</a>
                        <a href="/addtr">TR Card</a>
                       
                    </div>
                    </div>
                </li>
                <hr/>
                
                <li>
                    <a href="/admin">
                      
                    <i class="fas fa-users-cog"></i>
                    &nbsp;
                      Admin</a>
                </li>
                <hr/>
                
                        </ul>
                    </div>
   
   
   <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#013220" }}>
            {/* <!-- Image and text --> */}
  <a class="navbar-brand" href="#">
 
   
   
  </a>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <i class="fas fa-question-circle"></i>
          &nbsp;
            HELP</a> 
        </li>
       
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
          <i class="fas fa-phone-square"></i> &nbsp;Contact</a>
        </li>
        



       <div class="position-absolute top-50 end-0 translate-middle-y" >
       <a  href="/matNotification"> 
        <button type="button" class="btn btn-success position-relative"  style={{ backgroundColor: "#006a4e" }}>
        <i class="fas fa-bell"></i>
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
</a>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

</div>

        
      </ul>

      
    </div>
  </div>
</nav>
</div> 







        );
    }
}

export default NavBar;