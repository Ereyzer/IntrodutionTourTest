import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import styles from './AppContainer.module.css';
import control from '../../data/Control/Control'

export class AppContainer extends PureComponent {
    arr = []
    testArr = ['a', 1,2]
    testClick = false
    readClick = (e)=>{
        if(!this.testClick)return
        console.log(control)
        // control.test = true
        // e.stopPropagation()
        console.log("click on current",e.currentTarget)
        console.log("click on target", e.target)
        if (e.target.id === 'tyt') {
            return
        }
        this.arr = [...this.arr, e.target]
        console.log(this.arr)
        localStorage.setItem("arr", this.arr);
        // window.localStorage.setItem("arr", JSON.stringify(this.arr))

    }
    startStopFunc =()=>{
        this.testClick = !this.testClick;
        console.log(this.testClick);
        

    }
    onConsol=()=>{
       const arr = window.localStorage.getItem("arr")
        console.log(arr)
    }

    render(){
        const {children} = this.props;
        return (<>
            
            <div className={styles.Overlay} onClick={this.readClick}>
            <button onClick={this.startStopFunc} id="tyt">start/stop</button>
            <button onClick={this.onConsol}>onConsol</button>
            {children}</div>
        </>)
    }
}