import React, {Component} from 'react';
import clases from './Tour.module.css';
import {DivElement} from './DivElement';

export class Tour extends Component {
    state= {
        divProps: JSON.parse(localStorage.getItem("info"))
    }

    render(){
        const {divProps} =this.state

        return(            <div className={clases.Overflow} onClick={this.handleBackdropClick}>
            <button onClick={this.startStopFunc} id="tyt">start/stop</button>
            <button onClick={this.onConsol} id="con">onConsol</button>
            {Object.keys(divProps).length > 0 &&  
            Object.keys(divProps).map(item=><DivElement 
            x={divProps[item].x}
            y={divProps[item].y}
            key={divProps[item].id}
            text={divProps[item].text}
            />)} 
        </div>)
    }
}