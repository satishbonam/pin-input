import React, { Component } from 'react'
import PropTypes from "prop-types"


export default class TypeInput extends Component {
  constructor(props) {
    super(props)
    this.style = {
      input: {
        border: "1px solid black",
        height: "50px",
        width: "50px",
        margin: "5px",
      }
    }

    this.values = new Array(this.props.length).fill("")
    this.elements = []

  }

  handlechange=(e,i)=>{
    console.log(this.values)
    this.values[i] = e.target.value
    
    if(i === this.elements.length-1 && this.values[i].length === 1){
      this.elements[i].blur()
    }

    if(this.values[i].length > 0 && i < this.elements.length-1){
        this.elements[i+1].focus()
    }

  }


  render() {
    console.log(this.values)
    return (
      <div>
        {
          this.values.map((elem,i)=>{
            return (
            <>
              <input style={this.style.input} ref={input => (this.elements[i] = input)} onChange={(e)=>this.handlechange(e,i)}/>
            </>
            )
          })
        }
      </div>
    );
  }
}

TypeInput.propTypes = {
  length: PropTypes.number,
}

TypeInput.defaultProps = {
  length: 4
}