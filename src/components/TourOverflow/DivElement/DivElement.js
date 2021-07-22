import React, { Component } from 'react';

// import { v4 as uuidv4 } from 'uuid';


class DivElement extends Component {
    // id = uuidv4()
    state={
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
            bottom: "-25px"
        },
    
        input: '',

        Button:{
            position: "absolute",
            right: "-30px"
        }
    }
    
    handleChange = (e) => {
        this.setState({input: e.target.value})
    }

    submit=()=>{
        this.props.onBlur(this.state.input)
    }


    render(){
        const {id} = this.props;
        return <div>
            <label style={this.state.styleLabel} htmlFor={id}>
            <input style={this.state.styleInput} id={id} onChange={this.handleChange} value={this.state.input} ></input>
            <button onClick={this.submit} style={this.state.Button}>click</button>
            </label>
            
            
        </div>
    }
}

export default DivElement;