import React, { Component } from 'react';
import '../assets/css/checkoutItems.css';




export default class checkoutItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaProdutos: [],
        };
        
        this.checkoutItems = [];

    }


    getData = () => {
        this.checkoutItems = JSON.parse(localStorage.getItem('localStorageOrder'));
    }; 


    render() {
        return (
         <>
         <div value={this.checkoutItems}>{this.checkoutItems}</div>
         </>              

        )
    }
}


