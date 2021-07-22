import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
import clases from './TourOverflow.module.css';
import DivElement from './DivElement/DivElement';
import { v4 as uuidv4 } from 'uuid';




const modalRoot = document.querySelector('#tour-overflow-root');


class TourOverflow extends PureComponent {
    state = {
        divProps: [],
            
    }

    items = [];

    StartOrStop = false;
    handleBackdropClick = (e) => {
        if (e.target !== e.currentTarget || !this.StartOrStop) return;
        const id = uuidv4()
        this.setState(({divProps})=>({

            divProps: {...divProps, [id]: {x:e.clientX, y:e.clientY, id}} 
        }))
    }
    renderDiv(){

    }
    startStopFunc = () => {
        this.StartOrStop = !this.StartOrStop;

    }

    onConsol = () => {
        console.log(this.state.divProps)
        localStorage.setItem("info", JSON.stringify(this.state.divProps))
    }

    onBlur = (id) =>{
        return (value)=>{
            this.setState(
                ({divProps})=>{
                    const testProps = divProps
                    console.log("testProps", value)
                    testProps[id] = {...testProps[id], text: value}
                    return(
                {divProps: {...testProps}})}
                
                )
        }
    }
        

    render(){
        const { divProps}=this.state

        return createPortal(
            <div className={clases.Overflow} onClick={this.handleBackdropClick}>
                <button onClick={this.startStopFunc} id="tyt">start/stop</button>
                <button onClick={this.onConsol} id="con">onConsol</button>
                {Object.keys(divProps).length > 0 &&  
                Object.keys(divProps).map(item=><DivElement 
                x={divProps[item].x}
                y={divProps[item].y}
                key={divProps[item].id}
                id={divProps[item].id}
                onBlur={this.onBlur(divProps[item].id)}
                />)} 
            </div>,
            modalRoot,
          );
    }
}
export default TourOverflow;