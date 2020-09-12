import React from 'react';
import './dai.css';

function Dai () {

  return (
  
<div class="bs-example">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
            <a href="#" class="navbar-brand"> amazon</a>
            <button type="button" class="navbar-toggler" dat0a-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav">
                    <a href="#" class="nav-item nav-link active">Home</a>
                    <a href="#" class="nav-item nav-link">Profile</a>
                </div>
            <form class="form-inline">
                    <div class="input-group">                    
                        <input type="text" class="form-control" placeholder="Search"/>
                        <div class="input-group-append">
                            <button type="button" class="btn btn-secondary"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
            </form>
            <div class="navbar-nav">
                <a href="#" class="nav-item nav-link">Login</a>
            </div>
        </div>
    </nav>
</div>

  )
}

export default Dai;