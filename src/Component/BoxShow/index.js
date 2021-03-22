import React, { Component } from 'react'
import Boxcomponent from '../Box'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

export default class BoxModelForVisible extends Component {
    constructor(){
        super()
        this.state={
             color:false
        }
        this.ButtonClick=this.ButtonClick.bind(this)
    }
    ButtonClick(){
         this.setState({
             color:!this.state.color
         })
    }
    render() {
        return (
            <React.Fragment >
                 
               
             <div className='outermost'>
                 <div style={{width:'50%',height:'50vh',backgroundColor:this.state.color?'green':'red'}}>

                 </div>
                <button onClick={this.ButtonClick} className='btn btn-primary mt-3 p-2' >Press</button>
             </div>
            
                  
            </React.Fragment>
        )
    }
}
