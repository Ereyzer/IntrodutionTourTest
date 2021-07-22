import React, { Component } from 'react';
import classes from './Tour.module.css'

export class DivElement extends Component{
    state ={
        styleLabel: {
            position: "fixed",
            left: this.props.x,
            top: this.props.y,
            width: "40px",
            height: "40px",
            backgroundColor: "red",
            outline: "1px solid tomato",
            transform: "translate(-50%, -50%)"
        },

        styleInput: {
            position: "absolute",
            bottom: "-40px",
            backgroundColor: "white"
        },
    }

    render(){
        const {text} =this.props
        const {styleLabel, styleInput} =this.state
        console.log(this.props)

        return<div>
        <div style={styleLabel}><p style={styleInput}>{text}</p></div>
        
        
        
        
    </div>
    }
}