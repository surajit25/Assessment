import React, { Component } from 'react'
import './style.css'

export default class Boxcomponent extends Component {
    render() {
        const {value}=this.props
        return (
            <div >
                 
                    
                 <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:'white'}}>Assessment</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
    
    </div>
  </div>
</nav>
            </div>
        )
    }
}
